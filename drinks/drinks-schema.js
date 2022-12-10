import mongoose from "mongoose";

const drinksSchema = mongoose.Schema({
    title: {type: String, required: true},
    likes: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
    dislikes: Number,
    rating: String,
    category: {type: String, enum: ['Alcoholic', 'Non Alcoholic', 'Optional']}
}, {collection: 'drinks'})

export default drinksSchema