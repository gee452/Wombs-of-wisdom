import { useState } from "react"

function Contribute() {
  const [activeType, setActiveType] = useState("voice")

  const contributionTypes = [
    {
      id: "voice",
      icon: "🎙",
      title: "Tell your story",
      description:
        "Record yourself sharing a story, tradition, lesson or piece of knowledge.",
    },
    {
      id: "text",
      icon: "✍🏿",
      title: "Write your wisdom",
      description:
        "Share your knowledge by writing it down in your own words.",
    },
    {
      id: "tradition",
      icon: "🌿",
      title: "Share a tradition",
      description:
        "Tell future generations about a practice or tradition from your community.",
    },
  ]

  return (
    <main className="min-h-screen bg-wisdom-cream">

      {/* Hero */}
      <section className="bg-wisdom-green px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">

          <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-wisdom-orange">
            For Elders
          </p>

          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight md:text-6xl">
            Your voice carries a story worth remembering.
          </h1>

          <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-white/70">
            Share the knowledge, stories and traditions that were passed
            down to you so that future generations can hear them too.
          </p>

        </div>
      </section>


      {/* Contribution Types */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="max-w-2xl">

          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-wisdom-rust">
            Choose how you want to share
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-wisdom-green">
            Your knowledge. Your way.
          </h2>

        </div>


        <div className="mt-8 grid gap-5 md:grid-cols-3">

          {contributionTypes.map((type) => (

            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={`rounded-3xl border p-7 text-left transition-all ${
                activeType === type.id
                  ? "border-wisdom-green bg-white shadow-md"
                  : "border-wisdom-beige bg-white hover:-translate-y-1"
              }`}
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-wisdom-beige text-2xl">
                {type.icon}
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold text-wisdom-green">
                {type.title}
              </h3>

              <p className="mt-3 font-body text-sm leading-6 text-wisdom-black/55">
                {type.description}
              </p>

            </button>

          ))}

        </div>

      </section>


      {/* Recording Area */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">

          {/* Main contribution */}
          <div className="rounded-2rem border border-wisdom-beige bg-white p-7 md:p-10">

            {activeType === "voice" && (
              <>
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wisdom-beige text-xl">
                    🎙
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-semibold text-wisdom-green">
                      Tell us your story
                    </h2>

                    <p className="font-body text-sm text-wisdom-black/45">
                      Record in the language you are most comfortable speaking.
                    </p>
                  </div>

                </div>


                {/* Recording Placeholder */}
                <div className="mt-10 rounded-3xl bg-wisdom-cream p-10 text-center">

                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-wisdom-beige text-4xl">
                    🎙
                  </div>

                  <h3 className="mt-7 font-display text-2xl font-semibold text-wisdom-green">
                    Ready when you are
                  </h3>

                  <p className="mx-auto mt-3 max-w-md font-body text-sm leading-6 text-wisdom-black/50">
                    Press record and speak naturally. You don't need
                    to prepare a script.
                  </p>

                  <button className="mt-7 rounded-full bg-wisdom-rust px-8 py-3 font-body text-sm font-semibold text-white">
                    Start Recording
                  </button>

                </div>


                {/* Recording options */}
                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-wisdom-cream p-5">

                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-wisdom-black/40">
                      Language
                    </p>

                    <select className="mt-3 w-full rounded-xl border border-wisdom-beige bg-white px-4 py-3 font-body text-sm text-wisdom-green outline-none">
                      <option>isiXhosa</option>
                      <option>isiZulu</option>
                      <option>Sesotho</option>
                      <option>Setswana</option>
                      <option>English</option>
                    </select>

                  </div>


                  <div className="rounded-2xl bg-wisdom-cream p-5">

                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-wisdom-black/40">
                      Topic
                    </p>

                    <select className="mt-3 w-full rounded-xl border border-wisdom-beige bg-white px-4 py-3 font-body text-sm text-wisdom-green outline-none">
                      <option>Women's Wisdom</option>
                      <option>Food & Nutrition</option>
                      <option>Motherhood</option>
                      <option>Culture & Stories</option>
                      <option>Healing Traditions</option>
                    </select>

                  </div>

                </div>
              </>
            )}


            {activeType === "text" && (
              <>

                <h2 className="font-display text-2xl font-semibold text-wisdom-green">
                  Write your wisdom
                </h2>

                <p className="mt-2 font-body text-sm text-wisdom-black/50">
                  Write naturally. Your story can be translated later.
                </p>

                <input
                  type="text"
                  placeholder="Give your story a title..."
                  className="mt-8 w-full rounded-2xl border border-wisdom-beige bg-wisdom-cream px-5 py-4 font-body text-sm outline-none"
                />

                <textarea
                  rows="10"
                  placeholder="Tell us what you know..."
                  className="mt-4 w-full resize-none rounded-2xl border border-wisdom-beige bg-wisdom-cream px-5 py-4 font-body text-sm leading-7 outline-none"
                />

                <button className="mt-5 rounded-full bg-wisdom-rust px-7 py-3 font-body text-sm font-semibold text-white">
                  Save Wisdom
                </button>

              </>
            )}


            {activeType === "tradition" && (
              <>

                <h2 className="font-display text-2xl font-semibold text-wisdom-green">
                  Share a tradition
                </h2>

                <p className="mt-2 font-body text-sm text-wisdom-black/50">
                  Help future generations understand where the tradition
                  came from and what it means to your community.
                </p>

                <div className="mt-8 space-y-4">

                  <input
                    type="text"
                    placeholder="What is the tradition called?"
                    className="w-full rounded-2xl border border-wisdom-beige bg-wisdom-cream px-5 py-4 font-body text-sm outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Which community or culture is it from?"
                    className="w-full rounded-2xl border border-wisdom-beige bg-wisdom-cream px-5 py-4 font-body text-sm outline-none"
                  />

                  <textarea
                    rows="8"
                    placeholder="Tell us about the tradition..."
                    className="w-full resize-none rounded-2xl border border-wisdom-beige bg-wisdom-cream px-5 py-4 font-body text-sm leading-7 outline-none"
                  />

                  <button className="rounded-full bg-wisdom-rust px-7 py-3 font-body text-sm font-semibold text-white">
                    Submit Tradition
                  </button>

                </div>

              </>
            )}

          </div>


          {/* Information */}
          <aside className="space-y-5">

            <div className="rounded-3xl bg-wisdom-beige p-7">

              <div className="text-2xl">
                ♡
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold text-wisdom-green">
                Your knowledge belongs to you.
              </h3>

              <p className="mt-3 font-body text-sm leading-7 text-wisdom-black/60">
                Wombs of Wisdom is designed around community ownership.
                Contributors should understand how their knowledge is
                stored, used and shared.
              </p>

            </div>


            <div className="rounded-3xl border border-wisdom-beige bg-white p-7">

              <p className="font-body text-xs font-semibold uppercase tracking-wider text-wisdom-rust">
                What happens next?
              </p>

              <div className="mt-6 space-y-6">

                {[
                  ["01", "You share", "Tell your story in your own voice."],
                  ["02", "We preserve", "Your contribution is stored with its context."],
                  ["03", "We review", "Contributions can be reviewed for safety and accuracy."],
                  ["04", "Generations discover", "Future users can learn from your wisdom."],
                ].map(([number, title, text]) => (

                  <div key={number} className="flex gap-4">

                    <span className="font-body text-sm font-semibold text-wisdom-rust">
                      {number}
                    </span>

                    <div>
                      <h4 className="font-body text-sm font-semibold text-wisdom-green">
                        {title}
                      </h4>

                      <p className="mt-1 font-body text-xs leading-5 text-wisdom-black/50">
                        {text}
                      </p>
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </aside>

        </div>

      </section>

    </main>
  )
}

export default Contribute