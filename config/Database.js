const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb+srv://ayushpatel34079:a17421742@data-db.xg2q7nh.mongodb.net/");
    console.log("Data base is connected");
}

module.exports = db;
