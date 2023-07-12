import { Router } from "express";
import upload from "./upload/upload.routes.js";

const router = Router()
router.post("/upload", upload)


export default router