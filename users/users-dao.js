import usersModel from "./users-model.js";

export const createUser = async (user) =>
    await usersModel.create(user)

export const findAllUsers = async () =>
    await usersModel.find()

export const findUserByUsername = async (username) =>
    await usersModel.findOne({username})

export const findUserByCredentials = async (username, password) =>
    await usersModel.findOne({username, password})

export const deleteUser =  (username) =>
     usersModel.deleteOne({username: username})

export const updateUser = async (uname) =>
    await usersModel.updateOne({username:uname},
        {$set: {role:"admin"}})


export const findUserById = (uid) =>
    usersModel.findById(uid, {password:false})
