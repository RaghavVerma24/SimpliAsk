import express from "express";
import * as dotenv from 'dotenv';
import UserSchema from "../mongo/models/user.js";
import { setUUID } from "../exports.js";

dotenv.config();

const router = express.Router();

router.route('/').post(async (req, res) => {
    const { email, password } = req.body;

    console.log(req.body)

    try {
        const check = await UserSchema.findOne({ email: email });
        
        if (check && check.password == password) {
            res.json("exist");

            setUUID((check._id).toString());
        } else {
            res.json("nonexist");
        }
    } catch (error) {
        res.json("nonexist");
    }
})

export default {router}; 