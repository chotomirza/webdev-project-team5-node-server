import mongoose from "mongoose";
import * as QueryString from "querystring";

const usersSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
}, {collection: 'users'})

export default usersSchema