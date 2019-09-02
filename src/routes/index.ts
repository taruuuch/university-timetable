import express from "express";
import { groups } from "../controllers";

const router = express.Router();

router.get('/groups', groups.getGroups);

export default router;