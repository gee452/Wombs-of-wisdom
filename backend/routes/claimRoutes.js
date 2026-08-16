import express from "express"

import {
  getAllElders,
  getElderById
} from "../models/Elder.js"

const router = express.Router()

// Get all elders
router.get("/", async (req, res) => {
  try {
    const elders = await getAllElders()

    res.json(elders)
  } catch (error) {
    console.error("Error fetching elders:", error)

    res.status(500).json({
      message: "Failed to retrieve elders."
    })
  }
})

// Get one elder
router.get("/:id", async (req, res) => {
  try {
    const elder = await getElderById(req.params.id)

    if (!elder) {
      return res.status(404).json({
        message: "Elder not found."
      })
    }

    res.json(elder)
  } catch (error) {
    console.error("Error fetching elder:", error)

    res.status(500).json({
      message: "Failed to retrieve elder."
    })
  }
})

export default router