import pool from "../config/db.js"

export async function getAllUsers() {
  const [rows] = await pool.query(`
    SELECT *
    FROM users
    ORDER BY user_id DESC
  `)

  return rows
}

export async function getUserById(userId) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM users
    WHERE user_id = ?
    `,
    [userId]
  )

  return rows[0]
}