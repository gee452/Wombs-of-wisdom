import { useState } from "react"

function MyLibrary() {
  const [activeTab, setActiveTab] = useState("Wisdom")

  const savedWisdom = [
    {
      title: "Listening to the rhythms of your body",
      category: "Women's Wellness",
      elder: "Gogo Placeholder",
      language: "isiXhosa",
      icon: "🌿",
    },
    {
      title: "A story from generations ago",
      category: "Culture & Stories",
      elder: "Gogo Placeholder",
      language: "Sesotho",
      icon: "🌍",
    },
    {
      title: "What our elders taught us about love",
      category: "Relationships",
      elder: "Gogo Placeholder",
      language: "Setswana",
      icon: "♡",
    },
  ]

  const savedBooks = [
    {
      title: "Book Recommendation",
      author: "Author Placeholder",
    },
    {
      title: "African Women's Wisdom",
      author: "Author Placeholder",
    },
  ]

  return (
    <main className="min-h-screen bg-wisdom-cream">

      {/* Header */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-wisdom-rust">
            Your Space
          </p>

          <h1 className="mt-3 font-display text-5xl font-semibold text-wisdom-green">
            My Library
          </h1>

          <p className="mt-4 max-w-xl font-body leading-7 text-wisdom-black/55">
            Keep the stories, wisdom and resources you want to
            return to.
          </p>

        </div>

      </section>


      {/* Tabs */}
      <section className="border-y border-wisdom-beige bg-wisdom-cream">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex gap-8">

            {["Wisdom", "Books", "Conversations"].map((tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border-b-2 py-5 font-body text-sm font-semibold ${
                  activeTab === tab
                    ? "border-wisdom-rust text-wisdom-rust"
                    : "border-transparent text-wisdom-green/50"
                }`}
              >
                {tab}
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {activeTab === "Wisdom" && (
          <>

            <div className="flex items-end justify-between">

              <div>
                <p className="font-body text-sm text-wisdom-black/40">
                  {savedWisdom.length} saved
                </p>

                <h2 className="mt-1 font-display text-3xl font-semibold text-wisdom-green">
                  Saved wisdom
                </h2>
              </div>

              <button className="hidden rounded-full border border-wisdom-beige bg-white px-5 py-2.5 font-body text-sm font-medium text-wisdom-green sm:block">
                Sort
              </button>

            </div>


            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {savedWisdom.map((item) => (

                <article
                  key={item.title}
                  className="overflow-hidden rounded-3xl border border-wisdom-beige bg-white"
                >

                  <div className="flex aspect-video items-center justify-center bg-wisdom-beige text-4xl">
                    {item.icon}
                  </div>

                  <div className="p-6">

                    <span className="rounded-full bg-wisdom-cream px-3 py-1 font-body text-xs font-semibold text-wisdom-rust">
                      {item.category}
                    </span>

                    <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-wisdom-green">
                      {item.title}
                    </h3>

                    <div className="mt-5 flex items-center justify-between border-t border-wisdom-beige pt-4">

                      <p className="font-body text-xs text-wisdom-black/45">
                        {item.elder}
                      </p>

                      <p className="font-body text-xs text-wisdom-black/45">
                        {item.language}
                      </p>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </>
        )}


        {activeTab === "Books" && (
          <>

            <div>

              <p className="font-body text-sm text-wisdom-black/40">
                {savedBooks.length} saved
              </p>

              <h2 className="mt-1 font-display text-3xl font-semibold text-wisdom-green">
                Saved books
              </h2>

            </div>


            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {savedBooks.map((book) => (

                <article key={book.title}>

                  <div className="flex aspect-3/4 items-center justify-center rounded-2xl bg-white">

                    <div className="text-center">

                      <div className="text-4xl">
                        📖
                      </div>

                      <p className="mt-2 font-body text-xs text-wisdom-green/40">
                        Book Cover
                      </p>

                    </div>

                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold text-wisdom-green">
                    {book.title}
                  </h3>

                  <p className="mt-1 font-body text-sm text-wisdom-black/50">
                    {book.author}
                  </p>

                </article>

              ))}

            </div>

          </>
        )}


        {activeTab === "Conversations" && (
          <>

            <div>

              <p className="font-body text-sm text-wisdom-black/40">
                Your conversations with Gogo
              </p>

              <h2 className="mt-1 font-display text-3xl font-semibold text-wisdom-green">
                Conversation history
              </h2>

            </div>


            <div className="mt-8 space-y-4">

              {[1, 2, 3].map((conversation) => (

                <button
                  key={conversation}
                  className="flex w-full items-center justify-between rounded-2xl border border-wisdom-beige bg-white p-5 text-left transition-colors hover:bg-wisdom-cream"
                >

                  <div>

                    <p className="font-body text-xs text-wisdom-rust">
                      Ask Gogo
                    </p>

                    <h3 className="mt-1 font-body text-sm font-semibold text-wisdom-green">
                      What did our grandmothers teach us about caring for ourselves?
                    </h3>

                    <p className="mt-2 font-body text-xs text-wisdom-black/40">
                      Yesterday · 8 messages
                    </p>

                  </div>

                  <span className="text-wisdom-green">
                    →
                  </span>

                </button>

              ))}

            </div>

          </>
        )}

      </section>


      {/* Empty state / CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        <div className="rounded-4xl bg-wisdom-beige p-8 text-center md:p-12">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl">
            ✦
          </div>

          <h2 className="mt-5 font-display text-3xl font-semibold text-wisdom-green">
            Keep discovering.
          </h2>

          <p className="mx-auto mt-3 max-w-lg font-body text-sm leading-6 text-wisdom-black/55">
            Your library grows as you explore the knowledge,
            stories and voices preserved on Wombs of Wisdom.
          </p>

          <button className="mt-6 rounded-full bg-wisdom-rust px-7 py-3 font-body text-sm font-semibold text-white">
            Explore Wisdom
          </button>

        </div>

      </section>

    </main>
  )
}

export default MyLibrary