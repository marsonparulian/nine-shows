import { Router } from "express";
import showsController from "../controllers/shows.controller";

// This file contains  routes to `shos` controllers

const router = Router();
router.get("/", showsController.filterJson);

export default router;

