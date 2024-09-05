const reviewServie = require("../services/review.service.js");

const createReview = async (req, res) => {
    const user = req.user;
    try {
        const review = await reviewServie.createReview(req.body, user);
        return res.status(201).send(review);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

const getAllReview = async (req, res) => {
    const productId = req.params.productId;
    const user = req.user;
    try {
        const reviews = await reviewServie.getAllReview(productId);
        return res.status(201).send(reviews);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

module.exports = { createReview, getAllReview }