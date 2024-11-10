const jwtProvider = require('../config/jwtProvider.js');
const userService = require("../services/user.serviece.js");

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(404).send({ error: "tocken not found..." });
        }
        const userId = await jwtProvider.getUserIdFromToken(token);
        const user = await userService.findUserById(userId);
        req.user = user;

        console.log(user,userId);   
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
    next();
}

module.exports = authenticate;
    