import * as drinkDao from './drinks-dao.js'


export const getDrinks = () => drinks;

const DrinksController = (app) => {

    const createDrink   = async (req, res) => {
        const drink = req.body
        // movie["_id"] = (new Date()).getTime() + ''
        // movie["likes"] = 0
        // movie["liked"] = false
        // movies.push(movie)
        const actualDrink = await drinkDao.createDrink(drink)
        res.send(actualDrink)
    }
    const findAllDrinks = async (req, res) => {
        const drinksInDatabase = await movieDao.findAllDrinks()
        res.send(drinksInDatabase)
    }
    const updateDrink   = (req, res) => {
        const mid = req.params['mid']
        const drinkUpdates = req.body
        const drinkIndex = drinks.findIndex(
            (d) => d._id === did)
        drinks[drinkIndex] = {
            ...drinks[drinkIndex],
            ...drinkUpdates
        }
        res.send(200)
    }
    const deleteDrink   = async (req, res) => {
        const mid = req.params['mid']
        const status = await drinkDao.deleteDrink(did)
        // movies = movies.filter(
        //     (m) => m._id !== mid)
        res.send(status)
    }

    app.post  ('/drinks', createDrink)
    app.get   ('/drinks', findAllDrinks)
    app.put   ('/drinks/:did', updateDrink)
    app.delete('/drinks/:did', deleteDrink)
}

export default DrinksController;