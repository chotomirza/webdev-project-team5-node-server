import mongoose from "mongoose";
import drinksSchema from "./drinks-schema.js";

const drinksModel = mongoose.model('DrinkModel', drinksSchema)

export default drinksModel