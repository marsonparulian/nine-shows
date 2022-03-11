import { Request, Response } from "express";
import showHelper from "../helpers/show.helper";
import { IShow, IShowCompact, RequestWithShow } from "../types/show";

// This file contains request handlers related to `shows` (list of show)

/**
 * Response list of `show` with criteria `drm` === true && `episodeCount` > 0
 * @param req Express Request containing list of `show` from JSON
 * @param res Express Response
 */
const filterJson = (req: RequestWithShow, res: Response) => {
    // Filter the `shows`
    const filteredShows: IShowCompact[] = req.body.payload
        .filter((show: IShow) => show.drm === true && show.episodeCount > 0)
        .map((show: IShow) => showHelper.toShowCompact(show));

    res.json({
        response: filteredShows,
    });
};

export default {
    filterJson,
}
