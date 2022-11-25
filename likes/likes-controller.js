import {getPlaces} from "../places/places-controller.js";
import users from "../users/users.js";

let likes = [
    {_id: '123', user: '111', place: '123'},
    {_id: '234', user: '111', place: '234'},
    {_id: '345', user: '222', place: '345'},
    {_id: '456', user: '333', place: '345'},
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
    const userLikesPlace = (req, res) => {
        const uid = req.params.uid
        const pid = req.params.pid
        const newLike = {
            _id: (new Date()).getTime()+'',
            user: uid,
            place: pid
        }
        likes.push(newLike)
        res.json(newLike)
    }
    const userUnlikesPlace = (req, res) => {
        const uid = req.params.uid
        const pid = req.params.pid
        likes = likes.filter((l) => l.user !== uid && l.place !== pid)
        res.send(200)
    }
    const findAllLikes = (req, res) => {
        const populatedPlaces = populate({
            rawResults: likes,
            fieldToPopulate: 'place',
            sourceData: getPlaces(),
            sourceField: '_id'
        })
        const populateUsers = populate({
            rawResults: populatedPlaces,
            fieldToPopulate: 'user',
            sourceData: users,
            sourceField: '_id'
        })
        res.json(populateUsers)
    }
    const findPlacesLikedByUser = (req, res) => {
        const uid = req.params.uid
        const places = likes.filter((like) => like.user === uid)
        const populatedPlaces = populate({
            rawResults: places,
            fieldToPopulate: 'place',
            sourceData: getPlaces(),
            sourceField: '_id'
        })
        res.json(populatedPlaces)
    }
    const findUsersWhoLikedPlace = (req, res) => {
        const pid = req.params.pid
        const usersWhoLikePlace = likes.filter((like) => like.place === pid)
        const populateUsers = populate({
            rawResults: usersWhoLikePlace,
            fieldToPopulate: 'user',
            sourceData: users,
            sourceField: '_id'
        })
        res.json(populateUsers)
    }

    app.post('/users/:uid/likes/:pid', userLikesPlace)
    app.delete('/users/:uid/likes/:pid', userUnlikesPlace)
    app.get('/likes', findAllLikes)
    app.get('/users/:uid/likes', findPlacesLikedByUser)
    app.get('/places/:pid/likes', findUsersWhoLikedPlace)
    // app.put(updateLike)
}

export default LikesController;