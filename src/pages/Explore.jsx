import { useEffect, useState } from "react"
import { getKnowledge } from "../service/api"

function Explore() {
  const [knowledge, setKnowledge] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function loadKnowledge() {
      try {
        const data = await getKnowledge()

        setKnowledge(data)
      } catch (err) {
        console.error(err)
        setError("Unable to load wisdom.")
      } finally {
        setLoading(false)
      }
    }

    loadKnowledge()
  }, [])

  if (loading) {
    return <p>Loading wisdom...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="min-h-screen bg-wisdom-cream px-6 py-12">
      <h1 className="mb-8 text-4xl font-semibold text-wisdom-dark">
        Explore Wisdom
      </h1>

      {knowledge.length === 0 ? (
        <p className="text-wisdom-dark/70">
          No wisdom has been shared yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {knowledge.map((item) => (
            <article
              key={item.contribution_id}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <p className="mb-2 text-sm text-wisdom-orange">
                {item.category}
              </p>

              <h2 className="mb-3 text-xl font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-600">
                {item.transcript}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default Explore