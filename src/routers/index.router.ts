import { Router } from "express";
import showsController from "../controllers/shows.controller";

// This file contains  routes to `shows` controllers

const router = Router();
router.post("/",
    showsController.validateJSON,
    showsController.filterJson,
);

export default router;

