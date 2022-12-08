import mongoose from "mongoose";

const drinksSchema = mongoose.Schema({
                                         title: {type: String, required: true},
                                         genre: {type: String, required: true}
                                     }, {collection: 'drinks'})

export default drinksSchema