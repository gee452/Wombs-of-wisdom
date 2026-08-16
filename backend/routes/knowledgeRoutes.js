import express from "express"

import {
  getAllKnowledge,
  getKnowledgeById,
  searchKnowledge,
  createKnowledge
} from "../models/Knowledge.js"

const router = express.Router()


// GET all knowledge
router.get("/", async (req, res) => {
  try {
    const knowledge = await getAllKnowledge()

    res.json(knowledge)
  } catch (error) {
    console.error("Error retrieving knowledge:", error)

    res.status(500).json({
      message: "Failed to retrieve knowledge."
    })
  }
})


// SEARCH knowledge
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query

    if (!q) {
      return res.status(400).json({
        message: "Search term is required."
      })
    }

    const results = await searchKnowledge(q)

    res.json(results)
  } catch (error) {
    console.error("Error searching knowledge:", error)

    res.status(500).json({
      message: "Failed to search knowledge."
    })
  }
})


// GET one knowledge contribution
router.get("/:id", async (req, res) => {
  try {
    const knowledge = await getKnowledgeById(req.params.id)

    if (!knowledge) {
      return res.status(404).json({
        message: "Knowledge contribution not found."
      })
    }

    res.json(knowledge)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Failed to retrieve knowledge."
    })
  }
})


// CREATE knowledge contribution
router.post("/", async (req, res) => {
  try {
    const contributionId = await createKnowledge(req.body)

    res.status(201).json({
      message: "Knowledge contribution created successfully.",
      contribution_id: contributionId
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Failed to create knowledge contribution.",
      error: error.message
    })
  }
})


export default router