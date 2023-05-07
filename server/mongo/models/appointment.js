import mongoose from "mongoose";

const Appointment = new mongoose.Schema({
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

const appointmentSchema = mongoose.model("Appointment", Appointment);

export default appointmentSchema;