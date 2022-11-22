import placesModel from "./places-model.js";

export const findAllPlaces = async () => {
    const places = await placesModel.find()
    return places
}

export const createPlace = (place) => {
    const actualInsertedPlace = await placesModel.create(place)
    return actualInsertedPlace
}

export const deletePlace = async (pid) => {
    const status = await placesModel.deleteOne({_id:pid})
    return status
}

export const updatePlace = () => {}
