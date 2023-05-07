import express from "express";
import * as dotenv from 'dotenv';
import UserSchema from "../mongo/models/user.js";

dotenv.config();

const router = express.Router();

router.route('/').post(async (req, res) => {
    const data = {
        email: req.body.email,
        password: req.body.password,
    };

    try {
        const check = await UserSchema.findOne({ email: data.email });
        
        if (check) {
            res.json("exist");
        } else {
            await UserSchema.insertMany([data]);
            res.json("nonexist");
        }
    } catch (error) {
        console.log(error)
        res.json("nonexist");
    }
})

export default router; 
