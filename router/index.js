import express from "express";
import user from "./user.js";
import products from "./products.js";

const router = express.Router();


router.use("/user", user);
router.use("/products", products);

export default router;