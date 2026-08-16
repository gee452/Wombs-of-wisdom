import express from "express"

import {
  getAllUsers,
  getUserById
} from "../models/User.js"

const router = express.Router()

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers()

    res.json(users)
  } catch (error) {
    console.error("Error fetching users:", error)

    res.status(500).json({
      message: "Failed to retrieve users."
    })
  }
})

// Get one user
router.get("/:id", async (req, res) => {
  try {
    const user = await getUserById(req.params.id)

    if (!user) {
      return res.status(404).json({
        message: "User not found."
      })
    }

    res.json(user)
  } catch (error) {
    console.error("Error fetching user:", error)

    res.status(500).json({
      message: "Failed to retrieve user."
    })
  }
})

export default router