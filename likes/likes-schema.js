import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    drink: {type: mongoose.Schema.Types.ObjectId, ref: 'DrinkModel'},
    }, {collection: 'likes'})

export default likesSchema