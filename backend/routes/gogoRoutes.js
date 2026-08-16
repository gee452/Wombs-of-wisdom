import express from "express"
import { askGogo } from "../services/gogoService.js"

const router = express.Router()

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({
        message: "A message is required."
      })
    }

    const response = await askGogo(message)

    res.json({
      response
    })

  } catch (error) {
    console.error("Gogo error:", error)

    res.status(500).json({
      message: "Gogo was unable to respond.",
      error: error.message
    })
  }
})

export default router