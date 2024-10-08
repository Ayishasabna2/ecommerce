const CartItem = require("../models/cartItem.model");
const userService = require("../services/user.serviece.js");
//const { findUserCart } = require("./cart.service.js");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
    try {
        const item = await findCartItemById(cartItemId);

        if (!item) {
            throw new Error("cart item not found : ", cartItemId)
        }

        const user = await userService.findUserById(item.userId);

        if (!user) {
            throw new Error("user not found : ", userId)
        }

        if (user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedprice = item.quantity * item.product.discountedprice;
            const updatedCartItem = await item.save();
            return updatedCartItem;
        }
        else {
            throw new Error("you can't update this cart item");
        }

    } catch (error) {
        throw new Error("error.message")
    }
}

const removeCartItem = async (userId, cartItemId) => {
    try {
        const cartItem = await findCartItemById(cartItemId);
        const user = await userService.findUserById(userId);

        if (user._id.toString() === cartItem.userId.toString()) {
            await CartItem.findByIdAndDelete(cartItemId)
        }
        else {
            throw new Error("you can't remove another user's item");
        }
    } catch (error) {
        throw new Error("error.message")
    }
}

const findCartItemById = async (cartItemId) => {
    try {
        const cartItem = await findCartItemById(cartItemId);

        if (cartItem) {
            return cartItem
        }
        else {
            throw new Error("cartItem not found with id ", cartItemId)
        }

    } catch (error) {
        throw new Error("error.message")
    }
}

module.exports = { updateCartItem, removeCartItem, findCartItemById }