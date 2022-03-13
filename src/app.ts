import express, { NextFunction, Request, Response } from "express";
import indexRouter from "./routers/index.router";
import texts from "./statics/texts";

// This file produces express' application object

let app = express();
app.use(express.json());

// Handle `SyntaxError`
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    // Note : below is to be used after this code is working
    // if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    if (err instanceof SyntaxError && "body" in err) {
        return res.writeHead(400, {
            "content-type": "application/json",
        }).end(JSON.stringify({
            message: texts.ERROR_INVALID_JSON,
        }));
    }
    next();
});

// Set routers
app.use("/", indexRouter);

// Landing page
app.get("/", (_, res) => {
    res.status(200).send("Welcome to nine show web service");
});

export default app;
