import pool from "../config/db.js"

export async function getAllElders() {
  const [rows] = await pool.query(`
    SELECT *
    FROM elders
    ORDER BY created_at DESC
  `)

  return rows
}

export async function getElderById(elderId) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM elders
    WHERE elder_id = ?
    `,
    [elderId]
  )

  return rows[0]
}

export async function createElder(elder) {
  const {
    name,
    community,
    country,
    language,
    biography,
    profile_image_url,
    consent_status,
    contribution_permission
  } = elder

  const [result] = await pool.query(
    `
    INSERT INTO elders
    (
      name,
      community,
      country,
      language,
      biography,
      profile_image_url,
      consent_status,
      contribution_permission
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      name,
      community,
      country,
      language,
      biography,
      profile_image_url,
      consent_status,
      contribution_permission
    ]
  )

  return result.insertId
}