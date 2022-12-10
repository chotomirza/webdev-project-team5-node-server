import mongoose from "mongoose";
// import * as QueryString from "querystring";

const usersSchema = mongoose.Schema({
    username: {type: String, unique:true, required: true},
    password: {type: String, required: true},
    email: String,
    firstName: String,
    lastName: String,
    role: {type: String, enum: ['guest','admin']}
}, {collection: 'users'})

export default usersSchema