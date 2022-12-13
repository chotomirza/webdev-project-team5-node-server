import followsModel from "./follows-model.js";

export const userFollowsUser = async (uid, uid2) => {
    return await followsModel.create({followed:uid, follower:uid2})
}

export const userUnfollowsUser = async (uid, uid2) => {
    return await followsModel.deleteOne({followed:uid, follower:uid2})
}

export const findUsersFollowedByUser = async (uid) => {
    return await followsModel
        .find({user:uid},{user:false})
        .populate('followed')
        .exec()
}

export const findUsersThatFollowedUser = async(uid) => {
    return await followsModel
        .find({user:uid},{user:false})
        .populate('followed')
        .exec()
}

export const findAllFollows = async () =>
    await followsModel.find()



export const followUser = (follow) =>
    followsModel.create(follow)

export const unfollowUser = (follow) =>
    followsModel.deleteOne(follow)

export const findFollowers = (followed) =>
    followsModel.find({followed})
        .populate('follower')
        .exec()

export const findFollowing = (follower) =>
    followsModel.find({follower})
        .populate('followed')
        .exec()
