import express, { Request, Response } from "express";

// This file produces express' application object

let app = express();

// Simple request handler for testing
app.get("/", (req: Request, res: Response) => {
    res.send("Nine shows response")
});
export default app;
