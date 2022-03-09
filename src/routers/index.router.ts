import { Router } from "express";
import showsController from "../controllers/shows.controller";

// This file contains  routes to `shos` controllers

const router = Router();
router.post("/", showsController.filterJson);

export default router;

