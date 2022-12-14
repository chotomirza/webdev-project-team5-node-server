import drinksModel from "./drinks-model.js";

export const findAllDrinks = async () => {
    const drinks = await drinksModel.find()
    return drinks
}

export const findDrinkById = (did) =>
    drinksModel.findById(did)


export const createDrink = async (drink) => {
    const actualInsertedDrink = await drinksModel.create(drink)
    return actualInsertedDrink
}
export const deleteDrink = async (mid) => {
    const status = await drinksModel.deleteOne({_id: mid})
    return status
}
export const updateDrink = () => {}