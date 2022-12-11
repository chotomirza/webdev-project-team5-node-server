import mongoose from "mongoose";

const triedSchema = mongoose.Schema({
                                          drink: {type: mongoose.Schema.Types.ObjectId, ref: 'DrinksModel'},
                                          user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
                                      }, {collection: 'tried'})

export default triedSchema