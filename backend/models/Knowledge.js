import pool from "../config/db.js"

// Get all knowledge contributions
export async function getAllKnowledge() {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM knowledge_contributions
    ORDER BY contribution_id DESC
    `
  )

  return rows
}

// Get one knowledge contribution
export async function getKnowledgeById(contributionId) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM knowledge_contributions
    WHERE contribution_id = ?
    `,
    [contributionId]
  )

  return rows[0]
}

// Search knowledge contributions
export async function searchKnowledge(searchTerm) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM knowledge_contributions
    WHERE
      title LIKE ?
      OR category LIKE ?
      OR transcript LIKE ?
      OR traditional_use LIKE ?
      OR cultural_context LIKE ?
    ORDER BY contribution_id DESC
    LIMIT 10
    `,
    [
      `%${searchTerm}%`,
      `%${searchTerm}%`,
      `%${searchTerm}%`,
      `%${searchTerm}%`,
      `%${searchTerm}%`
    ]
  )

  return rows
}

// Create a knowledge contribution
export async function createKnowledge(data) {
  const {
    elder_id,
    title,
    category,
    original_language,
    audio_url,
    transcript,
    translated_text,
    cultural_context,
    traditional_use,
    status,
    visibility
  } = data

  const [result] = await pool.query(
    `
    INSERT INTO knowledge_contributions (
      elder_id,
      title,
      category,
      original_language,
      audio_url,
      transcript,
      translated_text,
      cultural_context,
      traditional_use,
      status,
      visibility
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      elder_id,
      title,
      category,
      original_language,
      audio_url,
      transcript,
      translated_text,
      cultural_context,
      traditional_use,
      status,
      visibility
    ]
  )

  return result.insertId
}