"use strict";

import { Response, Request, NextFunction } from "express";

export const getApi = (req: Request, res: Response) => {
    res.render("api/v1/index", {
        title: "API Work pretty!"
    });
};