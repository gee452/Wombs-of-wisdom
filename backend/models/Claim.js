import pool from "../config/db.js"

// Get all knowledge claims
export async function getAllClaims() {
  const [rows] = await pool.query(`
    SELECT *
    FROM knowledge_claims
    ORDER BY claim_id DESC
  `)

  return rows
}

// Get claims belonging to a contribution
export async function getClaimsByContribution(contributionId) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM knowledge_claims
    WHERE contribution_id = ?
    ORDER BY claim_id DESC
    `,
    [contributionId]
  )

  return rows
}

// Get one claim
export async function getClaimById(claimId) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM knowledge_claims
    WHERE claim_id = ?
    `,
    [claimId]
  )

  return rows[0]
}