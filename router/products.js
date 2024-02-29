import express from "express";
import { PRODUCTS } from "../constants/index.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(PRODUCTS);
});

export default router;