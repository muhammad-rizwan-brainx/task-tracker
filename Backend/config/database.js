const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const uri = process.env.MONGO_URI;
module.exports = mongoose.connect(uri);