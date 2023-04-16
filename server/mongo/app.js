const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/login", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });
        
        if (check && check.password == password) {
            res.json("exist");
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

app.listen(8000, () => {
    console.log("Port Connected");
});
