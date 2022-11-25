import * as placeDao from './places-dao.js'
import {createPlace} from "./places-dao.js";

export let places = [
    {
        _id: '123',
        title: 'Austin'
    },
    {
        _id: '234',
        title: 'Boston'
    },
    {
        _id: '345',
        title: 'Colorado'
    },
    {
        _id: '456',
        title: 'Nevada'
    },
]

export const getPlaces = () => places;

const PlacesController = (app) => {
    const createPlace = async (req,res) => {
        const place = req.body
        // place["_id"] = (new Date()).getTime() + ''
        // place["likes"] = 0
        // place["liked"] = false
        // places.push(place)
        const actualPlace = await placeDao.createPlace(place)
        res.send(actualPlace)
    }

    const findAllMovies = async (req, res) => {
        const placesInDatabase = await placeDao.findAllPlaces()
        res.send(placesInDatabase)
    }

    const updatePlace = (req,res) => {
        const pid = req.params['pid']
        const placeUpdates = req.body
        const placeIndex = places.findIndex(
            (p) => p._id === pid)
        places[placeIndex] = {
                ...places[placeIndex],
                ...placeUpdates
        }
        res.send(200)
    }

    // restart the server after making each each
    // use: node .\app.js

    const deletePlace = async (req,res) => {
        const pid = req.params['pid']
        const status = await placeDao.deletePlace(pid)
        // places = places.filter(
        //     (p) => p._id !== pid)
        res.send(status)

    }

    app.post  ('/places', createPlace)
    app.get   ('/places', findAllPlaces)
    app.put   ('/places/:pid', updatePlace)
    app.delete('/places/:pid', deletePlace)
}

export default PlacesController;

