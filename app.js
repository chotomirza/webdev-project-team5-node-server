import express from 'express';
import cors from 'cors';
import session from 'express-session'
import mongoose from "mongoose";

import DrinksController from "./drinks/drinks-controller.js";
import TriedController from "./tried/tried-controller.js";
import UsersController from "./users/user-controller.js";
import LikesController from "./likes/likes-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import FollowsController from "./follows/follows-controller.js";

import SessionController from "./session-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    // changed autoIndex to true, added useCreateIndex
    // autoIndex: false,
    // useCreateIndex: true,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb://localhost:27017/webdev_project_team5', options)

const app = express();

app.use(cors({
                 credentials: true,
                 origin: 'http://localhost:3000'
             }))

app.use(session({
                    secret: 'should be an environment variable',
                    resave: false,
                    saveUninitialized: true,
                    cookie: { secure: false }
                }))


app.use(express.json())
LikesController(app)
UsersController(app)
ReviewsController(app)
DrinksController(app)
FollowsController(app)
SessionController(app)
TriedController(app)


app.listen(4000)


