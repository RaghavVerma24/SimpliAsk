import mongoose from "mongoose";

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        data: Buffer,
        contentType: String
    }
});

const UserSchema = mongoose.model("User", User);

export default UserSchema;
