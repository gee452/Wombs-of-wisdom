import { useState } from "react"

function Explore() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = [
    "All",
    "Women's Wellness",
    "Food & Nutrition",
    "Motherhood",
    "Relationships",
    "Culture & Stories",
    "Healing Traditions",
  ]

  const wisdom = [
    {
      category: "Women's Wellness",
      title: "Listening to the rhythms of your body",
      elder: "Author",
      language: "isiXhosa",
      duration: "6 min",
      icon: "🌿",
    },
    {
      category: "Food & Nutrition",
      title: "Foods our mothers prepared for strength",
      elder: "Author",
      language: "Sesotho",
      duration: "8 min",
      icon: "🍲",
    },
    {
      category: "Motherhood",
      title: "Lessons passed from mother to daughter",
      elder: "Author",
      language: "isiZulu",
      duration: "10 min",
      icon: "🤱🏿",
    },
    {
      category: "Life Advice",
      title: "What our elders taught us about love",
      elder: "Author",
      language: "Setswana",
      duration: "5 min",
      icon: "♡",
    },
    {
      category: "Culture & Stories",
      title: "A story from generations ago",
      elder: "Author",
      language: "English",
      duration: "12 min",
      icon: "🌍",
    },
    {
      category: "Healing Traditions",
      title: "Traditional knowledge and everyday wellbeing",
      elder: "Author",
      language: "Sesotho",
      duration: "7 min",
      icon: "🌱",
    },
  ]

  const filteredWisdom =
    activeCategory === "All"
      ? wisdom
      : wisdom.filter((item) => item.category === activeCategory)

  return (
    <main className="min-h-screen bg-wisdom-cream">

      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

          <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-wisdom-rust">
            The Library
          </p>

          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight text-wisdom-green md:text-6xl">
            Explore wisdom worth passing on.
          </h1>

          <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-wisdom-black/60">
            Discover stories, traditions, experiences and knowledge
            shared by African women across generations.
          </p>

        </div>
      </section>


      {/* Search */}
      <section className="border-y border-wisdom-beige bg-wisdom-cream">

        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">

          <div className="flex flex-col gap-4 md:flex-row">

            <div className="flex flex-1 items-center rounded-full border border-wisdom-beige bg-white px-5">

              <span className="mr-3 text-lg text-wisdom-green">
                ⌕
              </span>

              <input
                type="text"
                placeholder="Search stories, traditions or topics..."
                className="w-full bg-transparent py-3 font-body text-sm outline-none placeholder:text-wisdom-black/35"
              />

            </div>

            <button className="rounded-full bg-wisdom-green px-7 py-3 font-body text-sm font-semibold text-white">
              Search
            </button>

          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">

        <div className="flex gap-2 overflow-x-auto pb-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-5 py-2.5 font-body text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-wisdom-green text-white"
                  : "bg-white text-wisdom-green hover:bg-wisdom-beige"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </section>


      {/* Results */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="mb-7 flex items-center justify-between">

          <div>
            <p className="font-body text-sm text-wisdom-black/45">
              {filteredWisdom.length} stories
            </p>

            <h2 className="mt-1 font-display text-3xl font-semibold text-wisdom-green">
              Featured wisdom
            </h2>
          </div>

          <select className="rounded-full border border-wisdom-beige bg-white px-4 py-2 font-body text-sm text-wisdom-green outline-none">
            <option>Newest</option>
            <option>Most Popular</option>
            <option>Most Saved</option>
          </select>

        </div>


        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredWisdom.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-wisdom-beige bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Image placeholder */}
              <div className="flex aspect-16/10 items-center justify-center bg-wisdom-beige">

                <div className="text-center">

                  <div className="text-4xl">
                    {item.icon}
                  </div>

                  <p className="mt-2 font-body text-xs text-wisdom-green/45">
                    Image Placeholder
                  </p>

                </div>

              </div>


              {/* Content */}
              <div className="p-6">

                <div className="flex items-center justify-between gap-3">

                  <span className="rounded-full bg-wisdom-cream px-3 py-1 font-body text-xs font-semibold text-wisdom-rust">
                    {item.category}
                  </span>

                  <button
                    className="text-lg text-wisdom-green/50 hover:text-wisdom-rust"
                    aria-label="Save wisdom"
                  >
                    ♡
                  </button>

                </div>


                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-wisdom-green">
                  {item.title}
                </h3>


                <div className="mt-5 flex items-center justify-between border-t border-wisdom-beige pt-5">

                  <div>
                    <p className="font-body text-xs text-wisdom-black/40">
                      Shared by
                    </p>

                    <p className="mt-1 font-body text-sm font-semibold text-wisdom-green">
                      {item.elder}
                    </p>
                  </div>

                  <div className="text-right">

                    <p className="font-body text-xs text-wisdom-black/40">
                      {item.language}
                    </p>

                    <p className="mt-1 font-body text-xs text-wisdom-black/50">
                      {item.duration}
                    </p>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* Translation */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        <div className="rounded-4xl bg-wisdom-green p-8 text-white md:p-12">

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

            <div>

              <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-wisdom-orange">
                Knowledge Without Language Barriers
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                Discover wisdom in the language that feels like home.
              </h2>

              <p className="mt-5 max-w-2xl font-body text-sm leading-7 text-white/65">
                Wombs of Wisdom can help translate preserved knowledge
                between languages while keeping the original recording
                and context accessible.
              </p>

            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-3xl">
              文
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Explore