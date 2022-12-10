import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';


import PlacesController from "./places/places-controller.js";
import LikesController from "./likes/likes-controller.js";
import UsersController from "./users/user-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import DrinksController from "./drinks/drinks-controller.js";
import FollowsController from "./follows/follows-controller.js";

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

app.use(cors({
                 credentials: true,
                 origin: 'http://localhost:3000'
             }))

// app.use(session({
//                     secret: 'should be an environment variable',
//                     resave: false,
//                     saveUninitialized: true,
//                     cookie: { secure: false }
//                 }))

app.use(express.json())
PlacesController(app)
//LikesController(app)
UsersController(app)
ReviewsController(app)
DrinksController(app)
FollowsController(app)


app.listen(4000)


