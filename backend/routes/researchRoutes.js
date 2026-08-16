import express from "express"

import {
  getAllResearch,
  getResearchByClaim,
  getResearchById
} from "../models/Research.js"

const router = express.Router()

// Get all research evidence
router.get("/", async (req, res) => {
  try {
    const research = await getAllResearch()

    res.json(research)
  } catch (error) {
    console.error("Error fetching research:", error)

    res.status(500).json({
      message: "Failed to retrieve research evidence."
    })
  }
})

// Get research connected to a claim
router.get("/claim/:claimId", async (req, res) => {
  try {
    const research = await getResearchByClaim(
      req.params.claimId
    )

    res.json(research)
  } catch (error) {
    console.error("Error fetching research for claim:", error)

    res.status(500).json({
      message: "Failed to retrieve research evidence."
    })
  }
})

// Get one research record
router.get("/:id", async (req, res) => {
  try {
    const research = await getResearchById(req.params.id)

    if (!research) {
      return res.status(404).json({
        message: "Research evidence not found."
      })
    }

    res.json(research)
  } catch (error) {
    console.error("Error fetching research:", error)

    res.status(500).json({
      message: "Failed to retrieve research evidence."
    })
  }
})

export default router