import { NextFunction, Request, Response } from "express";
import { responseInvalidJson } from "../middlewares/errors.middleware";
import showHelper from "../helpers/show.helper";
import { IShow, IShowCompact, RequestWithShow } from "../types/show";
import texts from "../statics/texts";

// This file contains request handlers related to `shows` (list of show)

/**
 *Validate JSON 
 * @param req Express Request object
 * @param res Express Response object
 */
const validateJSON = (req: Request, res: Response, next: NextFunction) => {
    let isJsonValid = true;

    let payload = req.body.payload;

    // `payload` should be an array
    if (!Array.isArray(payload)) {
        isJsonValid = false;
    }

    // If JSON valid, execute next handler
    if (isJsonValid) {
        next();
    } else {
        // Handle error
        responseInvalidJson(res);
    }

}

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

    // Response
    res.writeHead(200, {
        "content-type": "application/json",
    }).end(JSON.stringify({
        response: filteredShows,
    }));
};

export default {
    validateJSON,
    filterJson,
}
