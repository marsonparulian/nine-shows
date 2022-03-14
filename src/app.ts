import express, { NextFunction, Request, Response } from "express";
import indexRouter from "./routers/index.router";
import { errorSyntaxErrorHandler } from "./middlewares/errors.middleware";
import texts from "./statics/texts";

// This file produces express' application object

let app = express();
app.use(express.json());

// Use `SyntaxError` handler
app.use(errorSyntaxErrorHandler);

// Set routers
app.use("/", indexRouter);

// Landing page
app.get("/", (_, res) => {
    res.status(200).send("Welcome to nine show web service");
});

export default app;
