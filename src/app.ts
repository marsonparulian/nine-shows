import express, { Request, Response } from "express";
import indexRouter from "./routers/index.router";

// This file produces express' application object

let app = express();
app.use(express.json());

// Set routers
app.use("/", indexRouter);

// Landing page
app.get("/", (_, res) => {
    res.status(200).send("Welcome to nine show web service");
});

export default app;
