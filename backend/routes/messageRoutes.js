import express from "express"

import {
  getConversationsByUser,
  getConversationById
} from "../models/Conversation.js"

const router = express.Router()

// Get all conversations for a user
router.get("/user/:userId", async (req, res) => {
  try {
    const conversations = await getConversationsByUser(
      req.params.userId
    )

    res.json(conversations)
  } catch (error) {
    console.error("Error fetching conversations:", error)

    res.status(500).json({
      message: "Failed to retrieve conversations."
    })
  }
})

// Get one conversation
router.get("/:id", async (req, res) => {
  try {
    const conversation = await getConversationById(
      req.params.id
    )

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found."
      })
    }

    res.json(conversation)
  } catch (error) {
    console.error("Error fetching conversation:", error)

    res.status(500).json({
      message: "Failed to retrieve conversation."
    })
  }
})

export default router