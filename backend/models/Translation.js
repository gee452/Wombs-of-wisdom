import pool from "../config/db.js"

// Get all translations
export async function getAllTranslations() {
  const [rows] = await pool.query(`
    SELECT *
    FROM translations
    ORDER BY translation_id DESC
  `)

  return rows
}

// Get translations for a contribution
export async function getTranslationsByContribution(contributionId) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM translations
    WHERE contribution_id = ?
    ORDER BY translation_id DESC
    `,
    [contributionId]
  )

  return rows
}