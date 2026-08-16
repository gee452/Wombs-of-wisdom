import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import pool from "./config/db.js"

import elderRoutes from "./routes/elderRoutes.js"
import knowledgeRoutes from "./routes/knowledgeRoutes.js"
import claimRoutes from "./routes/claimRoutes.js"
import researchRoutes from "./routes/researchRoutes.js"
import translationRoutes from "./routes/translationRoutes.js"
import conversationRoutes from "./routes/conversationRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import gogoRoutes from "./routes/gogoRoutes.js"


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// API routes
app.use("/api/elders", elderRoutes)
app.use("/api/knowledge", knowledgeRoutes)
app.use("/api/claims", claimRoutes)
app.use("/api/research", researchRoutes)
app.use("/api/translations", translationRoutes)
app.use("/api/conversations", conversationRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)
app.use("/api/gogo", gogoRoutes)

// Test backend
app.get("/", (req, res) => {
  res.json({
    message: "Wombs of Wisdom backend is running 🌿"
  })
})

// API information
app.get("/api", (req, res) => {
  res.json({
    name: "Wombs of Wisdom API",
    version: "1.0.0",
    status: "running",
    endpoints: {
      users: "/api/users",
      elders: "/api/elders",
      knowledge: "/api/knowledge",
      claims: "/api/claims",
      research: "/api/research",
      translations: "/api/translations",
      conversations: "/api/conversations",
      messages: "/api/messages"
    }
  })
})

// Test database
app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 AS result")

    res.json({
      message: "Database connection successful!",
      result: rows
    })
  } catch (error) {
    console.error("Database connection error:", error)

    res.status(500).json({
      message: "Database connection failed.",
      error: error.message
    })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(
    `Wombs of Wisdom backend running on http://localhost:${PORT}`
  )
})