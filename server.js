
import minimist from 'minimist';
import express from "express";
import { roll } from "./lib/roll.js";


const app = express();

const args = minimist(process.argv.slice(2));
var port = args.port || 5000;

app.use(express.urlencoded({extended: true}));



app.get("/app", (req, res) => {

    res.send("200 OK");

});

app.get("/app/*", (req, res) => {

    res.send("404 NOT FOUND");

});

app.get("/app/roll", (req, res) => {

    res.send(roll(6,2,1));

});

app.get("/app/roll/", (req, res) => {

    res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)));

});


app.get("/app/roll/:sides", (req, res) => {

    const sides = parseInt(req.params.sides);
    res.send(roll(sides,2,1));

});

app.get("/app/roll/:sides/:dice", (req, res) => {

    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    res.send(roll(sides,dice,1));

});

app.get("/app/roll/:sides/:dice/:rolls", (req, res) => {

    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    const rolls = rparseInt(eq.params.rolls);
    res.send(roll(sides,dice,rolls));

});

app.listen(port, () => console.log("API sevrer is running on port " + port));




