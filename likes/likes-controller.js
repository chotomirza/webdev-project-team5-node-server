import {getDrinks} from "../drinks/drinks-controller.js";
import users from "../users/users.js";
import * as likesDao from "./likes-dao.js"

let likes = [
    {_id: '123', user: '111', drink: '123'},
    {_id: '234', user: '111', drink: '234'},
    {_id: '345', user: '222', drink: '345'},
    {_id: '456', user: '333', drink: '345'},
]

const LikesController = (app) => {
    const populate = (
        {
            rawResults, fieldToPopulate,
            sourceData, sourceField
        }) => {
        const populatedResults = rawResults.map((raw) => {
            const source = sourceData.find(source => source[sourceField] === raw[fieldToPopulate])
            return ({
                ...raw,
                [fieldToPopulate]: source
            })
        })
        return populatedResults
    }
    const userLikesDrink = async (req, res) => {
        const uid = req.params.uid
        const pid = req.params.pid
        const newLike = await likesDao.userLikesMovie(uid, pid)
        res.json(newLike)
    }
    const userUnlikesDrink = async (req, res) => {
        const pid = req.params.pid
        const status = await likesDao.userUnlikesMovie(pid)
        res.send(status)
        // likes = likes.filter((l) => l.user !== uid && l.drink !== pid)
        // res.send(200)
    }

    // const findAllLikes = async (req, res) => {
    //     const populatedDrinks = populate({
    //         rawResults: likes,
    //         fieldToPopulate: 'drink',
    //         sourceData: getDrinks(),
    //         sourceField: '_id'
    //     })
    //     const populateUsers = populate({
    //         rawResults: populatedDrinks,
    //         fieldToPopulate: 'user',
    //         sourceData: users,
    //         sourceField: '_id'
    //     })
    //     res.json(populateUsers)
    // }

    const findAllLikes = async (req,res) => {
        const likes = await likesDao.findAllLikes()
        res.json(likes)
    }

    // const findDrinksLikedByUser = (req, res) => {
    //     const uid = req.params.uid
    //     const drinks = likes.filter((like) => like.user === uid)
    //     const populatedDrinks = populate({
    //         rawResults: drinks,
    //         fieldToPopulate: 'drink',
    //         sourceData: getDrinks(),
    //         sourceField: '_id'
    //     })
    //     res.json(populatedDrinks)
    // }

    const findDrinksLikedByUser = async (req,res) => {
        const uid = req.params.uid
        const drinks = await likesDao.findDrinksLikedByUser(uid)
        res.json(drinks)
    }

    // const findUsersWhoLikedDrink = (req, res) => {
    //     const pid = req.params.pid
    //     const usersWhoLikeDrink = likes.filter((like) => like.drink === pid)
    //     const populateUsers = populate({
    //         rawResults: usersWhoLikeDrink,
    //         fieldToPopulate: 'user',
    //         sourceData: users,
    //         sourceField: '_id'
    //     })
    //     res.json(populateUsers)
    // }

    const findUsersWhoLikedDrink = async (req,res) => {
        const pid = req.params.pid
        const users = await likesDao.findUsersThatLikedDrink(pid)
        res.json(users)
    }


     app.delete('/unsaves/:pid', userUnlikesDrink)
    // app.post('/users/:uid/likes/:pid', userLikesDrink)
    // app.get('/likes', findAllLikes)
    // app.get('/users/:uid/likes', findDrinksLikedByUser)
    // app.get('/drinks/:pid/likes', findUsersWhoLikedDrink)
    // app.put(updateLike)
    app.post('/users/:uid/collection/:pid', userLikesDrink)
    app.get('/collection', findAllLikes)
    app.get('/users/:uid/collection', findDrinksLikedByUser)
    app.get('/drinks/:pid/collection', findUsersWhoLikedDrink)
}


export default LikesController;