import * as drinkDao from './drinks-dao.js'

// Here it does not understand what drinks is supposed to be
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

    const findDrinkById = async (req, res) => {
            const did = req.params['did']
            const drink = await drinkDao.findDrinkById(did)
            if (drink) {
                res.json(drink)
                return
            }
            res.sendStatus(404)
        }


    app.post  ('/drinks', createDrink)
    app.get   ('/drinks', findAllDrinks)
    app.get('/drinks/:did', findDrinkById)
    app.put   ('/drinks/:did', updateDrink)
    app.delete('/drinks/:did', deleteDrink)
}

export default DrinksController;