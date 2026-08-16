import {
  getAllElders,
  getElderById,
  createElder
} from "../models/Elder.js"

export async function getElders(req, res) {
  try {
    const elders = await getAllElders()

    res.json(elders)
  } catch (error) {
    console.error("Error fetching elders:", error)

    res.status(500).json({
      message: "Failed to retrieve elders."
    })
  }
}

export async function getElder(req, res) {
  try {
    const elderId = req.params.id

    const elder = await getElderById(elderId)

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
}

export async function addElder(req, res) {
  try {
    const elderId = await createElder(req.body)

    res.status(201).json({
      message: "Elder created successfully.",
      elder_id: elderId
    })
  } catch (error) {
    console.error("Error creating elder:", error)

    res.status(500).json({
      message: "Failed to create elder."
    })
  }
}