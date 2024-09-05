const mongoose = require("mongoose");

const mondbUrl="mongodb+srv://ayishasabna808:kXNHJJdqajYAbO0J@cluster0.gt5a9oe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = () => {
    return mongoose.connect(mondbUrl);
}

module.exports = {connectDb}

