import express from "express";
import * as dotenv from 'dotenv';
import appointmentSchema from "../mongo/models/appointment.js";
import { getUUID } from "../exports.js";

dotenv.config();

const router = express.Router();



router.route('/').post(async (req, res) => {
    // console.log(req.body)
    if (req.body.type == "create") {
        const { status, doctorName, patientName, aptDate, aptTime, aptNotes } = req.body;

        const data = {
            userId: getUUID(),
            doctorName: doctorName,
            patientName: patientName,
            aptDate: aptDate,
            aptTime: aptTime,
            aptNotes: aptNotes,
        };

        console.log(data)
        try {
            await appointmentSchema.insertMany([data]); 
            res.json({ data: data})
        } catch (e) {
            console.log(e)
        }
    } else if (req.body.type == "calendar") {
        try {
            let appointments = await appointmentSchema.find({ userId: getUUID()})
            console.log(appointments, getUUID())
            res.json({ data: appointments})
        } catch {

        }
    }
})

export default router; 
