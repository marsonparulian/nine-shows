import express, { Request, Response } from "express";
import indexRouter from "./routers/index.router";

// This file produces express' application object

let app = express();

// Set routers
app.use("/", indexRouter);

// Simple request handler for testing
app.get("/", (req: Request, res: Response) => {
    res.send("Nine shows response")
});
export default app;
