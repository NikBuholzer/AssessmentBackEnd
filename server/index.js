const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getLuckyNum, getSign, getTrys } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/nums", getLuckyNum);
app.get("/api/signs", getSign);
app.get("/api/trys", getTrys)

app.listen(4000, () => console.log("Server running on 4000"));
