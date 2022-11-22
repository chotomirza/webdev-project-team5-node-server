import mongoose from "mongoose";
import * as QueryString from "querystring";

const usersSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: QueryString  g
}, {collection: 'users'})

export default usersSchema