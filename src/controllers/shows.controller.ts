import { Request, Response } from "express";

// This file contains request handlers related to `shows` (list of show)

const filterJson = (req: Request, res: Response) => {
    res.json({
        msg: "Nine shows",
    });
};

export default {
    filterJson,
}
