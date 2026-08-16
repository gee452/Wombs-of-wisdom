import express from "express"

import {
  getAllTranslations,
  getTranslationsByContribution
} from "../models/Translation.js"

const router = express.Router()

// Get all translations
router.get("/", async (req, res) => {
  try {
    const translations = await getAllTranslations()

    res.json(translations)
  } catch (error) {
    console.error("Error fetching translations:", error)

    res.status(500).json({
      message: "Failed to retrieve translations."
    })
  }
})

// Get translations for a contribution
router.get("/contribution/:contributionId", async (req, res) => {
  try {
    const translations = await getTranslationsByContribution(
      req.params.contributionId
    )

    res.json(translations)
  } catch (error) {
    console.error("Error fetching translations:", error)

    res.status(500).json({
      message: "Failed to retrieve translations."
    })
  }
})

export default router