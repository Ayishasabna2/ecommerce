const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    discountedPrice:{
        type:Number,
    },
    discountedPersent:{
        type:Number,
    },
    quantity:{
        type:Number,
        require:true,
    },
    brand:{
        type:String,
    },
    color:{
        type:String,
    },
    sizes:[{
        name:{type:String},
        quantity:{type:Number}
    }],
    imageUrl:{
        type:String,
    },
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings",
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews",
    }],
    numRatings:{
        type:Number,
        default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories",
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

const Product =mongoose.model("products", productSchema);

module.exports = Product;