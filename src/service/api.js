const API_URL = "http://localhost:5000/api"

export async function getKnowledge() {
  const response = await fetch(`${API_URL}/knowledge`)

  if (!response.ok) {
    throw new Error("Failed to fetch knowledge")
  }

  return response.json()
}

export async function getElders() {
  const response = await fetch(`${API_URL}/elders`)

  if (!response.ok) {
    throw new Error("Failed to fetch elders")
  }

  return response.json()
}

export async function getClaims() {
  const response = await fetch(`${API_URL}/claims`)

  if (!response.ok) {
    throw new Error("Failed to fetch claims")
  }

  return response.json()
}

export async function getResearch() {
  const response = await fetch(`${API_URL}/research`)

  if (!response.ok) {
    throw new Error("Failed to fetch research")
  }

  return response.json()
}

export async function getTranslations() {
  const response = await fetch(`${API_URL}/translations`)

  if (!response.ok) {
    throw new Error("Failed to fetch translations")
  }

  return response.json()
}