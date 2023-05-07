import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./mongo/connect.js";
import loginRoutes from "./routes/loginRoutes.js";
import signupRoutes from "./routes/signupRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config({path: '../.env'});
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/login', loginRoutes.router);
app.use('/signup', signupRoutes);
app.use('/appointments', appointmentRoutes);

const startServer = async () => {
    try {
        connectDB(process.env.MONGO_URI);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
    } catch (error) {
        console.log(error);
    }

}

startServer();