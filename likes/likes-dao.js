import likesModel from "./likes-model.js";

export const userLikesMovie = async (uid, pid) => {
    return await likesModel.create({user:uid, drink:pid})
}

export const userUnlikesMovie = async(uid, pid) => {
    return await likesModel.deleteOne({user:uid, drink:pid})
}

export const findDrinksLikedByUser = async (uid) => {
    return await likesModel
        .find({user:uid},{user:false})
        .populate('drink','title')
        .exec()
}

export const findUsersThatLikedDrink = async(pid) => {
    return await likesModel
        .find({drink:pid},{drink:false})
        .populate('user', 'username')
        .exec()
}

export const findAllLikes = async () =>
    await likesModel.find()