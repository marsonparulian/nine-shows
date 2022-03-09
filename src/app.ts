import express, { Request, Response } from "express";
import indexRouter from "./routers/index.router";

// This file produces express' application object

let app = express();
app.use(express.json());


// Set routers
app.use("/", indexRouter);

export default app;
