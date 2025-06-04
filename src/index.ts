import express from "express";
import { PrismaClient } from "./generated/prisma";

const app = express();
const primsaClient = new PrismaClient();

app.get("/", async (req, res) => {
    const data = await primsaClient.user.findMany();
    res.json({
        message: "Hello World! Get endpoint",
        data
    });
});

app.post("/", async (req, res) => {
    await primsaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        } 
    })
    res.json({
        message: "Hello World! Post endpoint"
    });
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});

//01:06:10