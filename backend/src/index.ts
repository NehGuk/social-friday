import "dotenv/config"
import express from "express"
import prisma from "./prisma"

const app = express()
app.use(express.json())

app.get("/", async (req, res) => {
  const users = await prisma.players.findMany()
  res.json(users)
})

app.listen(3000, () => console.log("Running on http://localhost:3000"))
