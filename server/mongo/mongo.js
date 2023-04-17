require('dotenv').config({path: '../.env'});


const mongoose = require("mongoose");
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("connection failed");
    });

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    doctorName: {
        type: String,
        required: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    aptDate: {
        type: String,
        required: true,
    },
    aptTime: {
        type: String,
        required: true,
    },
    aptNotes: {
        type: String,
    },
});


const collection = mongoose.model("collection", userSchema);
const appointCollection = mongoose.model("appointments", appointmentSchema);

module.exports = {collection, appointCollection};
