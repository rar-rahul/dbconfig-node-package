const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("Database connected successfully with package")
    } catch (error) {
        console.log("connection errror" + error)
    }
}

module.exports = connectDB;
