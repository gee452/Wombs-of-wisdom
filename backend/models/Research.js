import pool from "../config/db.js"

// Get all research evidence
export async function getAllResearch() {
  const [rows] = await pool.query(`
    SELECT *
    FROM research_evidence
    ORDER BY evidence_id DESC
  `)

  return rows
}

// Get research connected to a claim
export async function getResearchByClaim(claimId) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM research_evidence
    WHERE claim_id = ?
    ORDER BY evidence_id DESC
    `,
    [claimId]
  )

  return rows
}

// Get one research record
export async function getResearchById(evidenceId) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM research_evidence
    WHERE evidence_id = ?
    `,
    [evidenceId]
  )

  return rows[0]
}