// import * as dao from "./reviews-dao.js"
// import {findReviewsByAuthor, findReviewsByDrink} from "./reviews-dao.js";
//
// const ReviewsController = (app) => {
//     const createReview = async (req, res) => {
//         const review = req.body
//         const currentUser = req.session['currentUser']
//         review.author = currentUser._id
//         const actualReview = await dao.createReview(review)
//         res.json(actualReview)
//     }
//     const findReviewsByDrink = async (req, res) => {
//         const drinkID = req.params.drinkID
//         const reviews = await dao.findReviewsByDrink(drinkID)
//         res.json(reviews)
//     }
//     const findReviewsByAuthor = async (req, res) => {
//         const author = req.params.author
//         const reviews = await dao.findReviewsByAuthor(author)
//         res.json(reviews)
//     }
//     app.post('/api/reviews', createReview)
//     app.get('/api/movies/:drinkID/reviews', findReviewsByDrink)
//     app.get('/api/users/:author/reviews', findReviewsByAuthor)
// }
// export default ReviewsController