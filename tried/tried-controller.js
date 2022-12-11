import * as dao from './tried-dao.js'
const TriedController = (app) => {

    const findAllTried = async(req,res) => {
        const tries = await dao.findAllTried()
            res.json(tries)
    }

    const tryDrink = async (req, res) => {
        const tried = req.body
        const currentUser = req.session['currentUser']
        tried.user = currentUser._id
        const actualTry = await dao.tryDrink(tried)
        res.json(actualTry)
    }
    const findTriedDrinks = async (req, res) => {
        const user = req.params.user
        const tried = await dao.findTriedDrinks(user)
        res.json(tried)
    }
    const findTryer = async (req, res) => {
        const drink = req.params.drink
        const tryer = await dao.findTryer(drink)
        res.json(tryer)
    }

    app.post('/tried', tryDrink)
    app.get('/users/:user/tried', findTriedDrinks)
    app.get('/tried', findAllTried)
    app.get('/drinks/:drink/tried', findTryer)
}

export default TriedController