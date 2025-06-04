import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prismaClient = new PrismaClient();


app.get("/", async (req, res) => {
    const data = await prismaClient.user.findMany();
    res.json({
        message: "Hello World! Get endpoint",
        data    
    });
});

app.post("/", async (req, res) => {
    await prismaClient.user.create({
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