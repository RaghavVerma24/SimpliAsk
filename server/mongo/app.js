const express = require("express");
const {collection, appointCollection} = require("./mongo.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var UUID;

app.get("/login", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });
        
        if (check && check.password == password) {
            res.json("exist");
            UUID = (check._id).toString();
            console.log(req.body, UUID)
        } else {
            res.json("nonexist");
        }
    } catch (error) {
        res.json("nonexist");
    }
});

app.get("/signup", cors(), (req, res) => {});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const data = {
        email: email,
        password: password,
    };
    console.log(req.body)

    try {
        const check = await collection.findOne({ email: email });
        
        if (check) {
            res.json("exist");
        } else {
            res.json("nonexist");
            await collection.insertMany([data]);
        }
    } catch (error) {
        res.json("nonexist");
    }
});

app.get("/appointments", cors(), (req, res) => {});

app.post("/appointments", async (req, res) => {
    if (req.body.type == "create") {
        const { status, doctorName, patientName, aptDate, aptTime, aptNotes } = req.body;

        const data = {
            userId: UUID,
            doctorName: doctorName,
            patientName: patientName,
            aptDate: aptDate,
            aptTime: aptTime,
            aptNotes: aptNotes,
        };

        try {
            await appointCollection.insertMany([data]); 
            res.json({ data: data})
        } catch (e) {
            console.log(e)
        }
    } else if (req.body.type == "calendar") {
        try {
            let appointments = await appointCollection.find({ userId: UUID})
            console.log(appointments, UUID)
            res.json({ data: appointments})
        } catch {

        }
    }
});


app.listen(8000, () => {
    console.log("Port Connected");
});
