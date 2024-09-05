const ratingService = require("../services/rating.service.js");

const createRating = async (req, res) => {
    const user = req.user;
    try {
        const rating = await reviewServie.createRating(req.body, user);
        return res.status(201).send(rating);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

const getAllRatings = async (req, res) => {
    const productId = req.params.productId;
    const user = req.user;
    try {
        const ratings = await reviewServie.getAllRatings(productId);
        return res.status(201).send(ratings);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

module.exports = { createRating, getAllRatings }