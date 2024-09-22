const express = require('express')
const app = express()
const cors = require("cors");
const { connectDb } = require("./config/db");
const authRouters = require("./routes/auth.route.js");
const userRouters = require("./routes/user.route.js");
const productRouter = require("./routes/product.routes.js");
const adminProductRouter = require("./routes/adminProduct.routes.js");
const cartRouter = require("./routes/cart.routes.js");
const cartItemRouter = require("./routes/cartItem.routes.js");
const orderRouter = require("./routes/order.routes.js");
const adminOrderRouter = require("./routes/adminOrder.routes.js");
const reviewRouter = require("./routes/review.routes.js");
const ratingRouter = require("./routes/rating.routes.js");

const PORT = 5454

app.use(express.json())
app.use(cors())
app.use("/auth", authRouters);
app.use("/api/users", userRouters);
app.use("/api/products", productRouter);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items", cartItemRouter);
app.use("/api/orders", orderRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/ratings", ratingRouter);


app.get("/", (req, res) => {
    return res.status(200).send("Hello!")
})

app.listen(PORT, () => {
    console.log("ecommerce api listing on PORT : ", PORT);
    connectDb();
    console.log("Connect DB");

})

module.exports = app;