import { Request, Response, NextFunction } from "express";
import texts from "../statics/texts";

// This file contains handlers and response output related to errors.

export const errorSyntaxErrorHandler = (err: any, _: Request, res: Response, next: NextFunction) => {
    const status = err.status || 0;
    if (err instanceof SyntaxError && status === 400 && 'body' in err) {
        return responseInvalidJson(res);
    }
    next();
}

export const responseInvalidJson = (res: Response): Response => {
    return res.writeHead(400, {
        "content-type": "application/json",
    }).end(JSON.stringify({
        error: texts.ERROR_INVALID_JSON,
    }));
}

export default {
    errorSyntaxErrorHandler,
}
