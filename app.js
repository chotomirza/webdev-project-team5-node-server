import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';


import PlacesController from "./places/places-controller.js";
import LikesController from "./likes/likes-controller.js";
import UsersController from "./users/user-controller.js";

const options = {
     useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family:4
}

mongoose.connect('mongodb://localhost:27017/webdev_project_team5', options)

const app = express();
app.use(cors())
app.use(express.json())
PlacesController(app)
LikesController(app)
UsersController(app)
// ReviewsController(app)

app.listen(4000)