import express from "express";
import cors from "cors";
import router from "./router/index.js";

const app = express();

app.use(express.json());

app.use(cors());

const PORT = 5000;


app.use("/", router);

app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`);
})