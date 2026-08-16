import pool from "../config/db.js"

export async function getAllKnowledge() {
  const [rows] = await pool.query(`
    SELECT
      kc.*,
      e.name AS elder_name,
      e.community,
      e.country,
      e.language
    FROM knowledge_contributions kc
    JOIN elders e
      ON kc.elder_id = e.elder_id
    ORDER BY kc.created_at DESC
  `)

  return rows
}

export async function getKnowledgeById(contributionId) {
  const [rows] = await pool.query(
    `
    SELECT
      kc.*,
      e.name AS elder_name,
      e.community,
      e.country,
      e.language
    FROM knowledge_contributions kc
    JOIN elders e
      ON kc.elder_id = e.elder_id
    WHERE kc.contribution_id = ?
    `,
    [contributionId]
  )

  return rows[0]
}

export async function createKnowledge(contribution) {
  const {
    elder_id,
    title,
    content,
    category,
    language,
    source_type
  } = contribution

  const [result] = await pool.query(
    `
    INSERT INTO knowledge_contributions
    (
      elder_id,
      title,
      content,
      category,
      language,
      source_type
    )
    VALUES (?, ?, ?, ?, ?, ?)
    `,
    [
      elder_id,
      title,
      content,
      category,
      language,
      source_type
    ]
  )

  return result.insertId
}