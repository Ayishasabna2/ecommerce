const express = require('express')
const app = express()
const cors =  require("cors");
const { connectDb } = require("./config/db");
const authRouters = require("./routes/auth.route.js");
const userRouters = require("./routes/user.route.js");

const PORT = 5454

app.use(express.json())
app.use(cors())
app.use("/auth",authRouters);
app.use("/api/users",userRouters);

app.get("/", (req, res) =>{
    return res.status(200).send("Hello!")
})

app.listen(PORT, async() => {
    console.log("ecommerce api listing on PORT : ",PORT); 
    await connectDb();
    console.log("Connect DB");
})

module.exports = app;



//app.listen(PORT, async()=>{ 
   // await connectDb();
    //console.log("ecommerce api listing on PORT : ",PORT); 
    //console.log("Connect DB");
//})