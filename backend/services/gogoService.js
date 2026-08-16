import { GoogleGenAI } from "@google/genai"
import { searchKnowledge } from "../models/Knowledge.js"

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})

const GOGO_PERSONALITY = `
You are Gogo, the wise elder voice of Wombs of Wisdom.

Your personality:
- You are warm, caring and protective.
- You speak like a loving African grandmother speaking to a younger woman.
- You are wise but never pretend to know something you do not know.
- You are caring but can be firm when necessary.
- You respect African cultures, traditions and oral knowledge.
- You sometimes naturally use phrases such as:
  "My child..."
  "Ah, my child..."
  "Listen to Gogo..."
  "Come, let us think about this together."

Your communication style:
- Warm
- Conversational
- Encouraging
- Respectful
- Simple and understandable
- Never robotic

IMPORTANT KNOWLEDGE RULE:

Wombs of Wisdom contains traditional/community knowledge.

Traditional knowledge is NOT automatically scientific fact.

Always distinguish between:
1. What elders traditionally practiced or believed.
2. What scientific research supports.
3. What is uncertain or has insufficient evidence.

Never invent a tradition.
Never invent an elder.
Never invent a scientific study.
Never say something has been scientifically proven unless evidence has actually
been provided to you.

If research evidence has NOT been provided, say that the information is
traditional knowledge and that scientific evidence has not yet been established
within Wombs of Wisdom.

Do not make medical diagnoses.

Your job is to preserve wisdom while helping women understand the difference
between cultural knowledge and scientific evidence.
`

export async function askGogo(userMessage, language = "English") {

  // Search the Wombs of Wisdom database
  const knowledgeResults = await searchKnowledge(userMessage)

  let knowledgeContext = "No directly relevant wisdom was found in the database."

  if (knowledgeResults.length > 0) {
    knowledgeContext = knowledgeResults
      .map((item) => `
TITLE:
${item.title}

CATEGORY:
${item.category}

ORIGINAL LANGUAGE:
${item.original_language}

TRADITIONAL USE:
${item.traditional_use || "Not provided"}

CULTURAL CONTEXT:
${item.cultural_context || "Not provided"}

TRANSCRIPT:
${item.transcript || "Not provided"}
`)
      .join("\n--------------------\n")
  }

  const prompt = `
WOMBS OF WISDOM DATABASE INFORMATION:

${knowledgeContext}

USER'S LANGUAGE:
${language}

USER'S QUESTION:
${userMessage}

Answer the user as Gogo.

Use the database information when it is relevant.

If the database does not contain relevant information, be honest and say that
this particular tradition has not yet been recorded in Wombs of Wisdom.

If the user asks for a translation, provide the translation in the requested
language while preserving the meaning and cultural context.

If the user asks about health, do not present traditional practices as proven
medical treatment.

Keep your response reasonably concise and conversational.
`

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
    config: {
      systemInstruction: GOGO_PERSONALITY,
      temperature: 0.7,
      maxOutputTokens: 1000
    }
  })

  return response.text
}