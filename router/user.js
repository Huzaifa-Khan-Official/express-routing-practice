import express from "express";
import { USERS } from "../constants/index.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(USERS);
});

router.post("/", (req, res) => {
    USERS.push({id: USERS.length + 1, ...req.body});
    res.send({message: "user added successfully!"});
});

router.delete("/:id", (req, res) => {
    const index = USERS.findIndex(user => user.id === Number(req.params.id));

    if (index !== -1) {
        USERS.splice(index, 1);
        res.send({message: "user deleted successfully!"});
    } else {
        res.send({ error : "couldn't find user"});
    }
})


export default router;