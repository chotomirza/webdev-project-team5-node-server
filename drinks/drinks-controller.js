import * as drinkDao from './drinks-dao.js'


export const getDrinks = () => drinks;

const DrinksController = (app) => {

    const createDrink   = async (req, res) => {
        const drink = req.body
        const actualDrink = await drinkDao.createDrink(drink)
        res.send(actualDrink)
    }
    const findAllDrinks = async (req, res) => {
        const drinksInDatabase = await drinkDao.findAllDrinks()
        res.send(drinksInDatabase)
    }
    const updateDrink   = (req, res) => {
        const did = req.params['did']
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
        const did = req.params['did']
        const status = await drinkDao.deleteDrink(did)
        res.send(status)
    }

    app.post  ('/drinks', createDrink)
    app.get   ('/drinks', findAllDrinks)
    app.put   ('/drinks/:did', updateDrink)
    app.delete('/drinks/:did', deleteDrink)
}

export default DrinksController;