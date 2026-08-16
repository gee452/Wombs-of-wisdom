import pool from "../config/db.js"

// Get all conversations for a user
export async function getConversationsByUser(userId) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM conversations
    WHERE user_id = ?
    ORDER BY conversation_id DESC
    `,
    [userId]
  )

  return rows
}

// Get one conversation
export async function getConversationById(conversationId) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM conversations
    WHERE conversation_id = ?
    `,
    [conversationId]
  )

  return rows[0]
}