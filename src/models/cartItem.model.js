const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cart",
        require:true,
    },
    product:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        require:true,
    }],
    size:{
        type:String,
        require:true,
    },
    quantity:{
        type:Number,
        require:true, 
        default:1,
    },
    price:{
        type:Number,
        require:true,
    },
    discountedPrice:{
        type:Number,
        require:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        require:true,
    }

})

const CartItem = mongoose.model("cartItem", cartItemSchema);

module.exports = CartItem;