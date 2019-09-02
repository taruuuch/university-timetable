import express from "express";
import bodyParser from "body-parser";
import mongo from "connect-mongo";

const app = express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Server is working!'));

export default app;