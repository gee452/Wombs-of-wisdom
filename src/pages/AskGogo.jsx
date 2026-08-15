import { useState } from "react"

function AskGogo() {
  const [message, setMessage] = useState("")

  const languages = [
    "English",
    "isiXhosa",
    "isiZulu",
    "Sesotho",
    "Setswana",
  ]

  const suggestedQuestions = [
    "What did our grandmothers teach about caring for ourselves?",
    "Tell me a traditional story from my culture.",
    "What foods were traditionally used for nourishment?",
    "What wisdom did elders share about relationships?",
  ]

  return (
    <main className="min-h-screen bg-wisdom-cream">

      {/* Header */}
      <section className="border-b border-wisdom-beige bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-wisdom-beige text-2xl">
              👵🏿
            </div>

            <div>
              <p className="font-body text-sm text-wisdom-black/50">
                Your digital elder
              </p>

              <h1 className="font-display text-3xl font-semibold text-wisdom-green">
                Ask Gogo
              </h1>
            </div>

          </div>

        </div>
      </section>


      {/* Chat area */}
      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">

        <div className="rounded-4xl border border-wisdom-beige bg-white shadow-sm">

          {/* Chat header */}
          <div className="flex flex-col gap-4 border-b border-wisdom-beige p-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-body text-sm font-semibold text-wisdom-green">
                Conversation
              </p>

              <p className="mt-1 font-body text-xs text-wisdom-black/45">
                Ask questions and explore preserved wisdom.
              </p>
            </div>


            {/* Language */}
            <div className="flex items-center gap-3">

              <span className="font-body text-xs text-wisdom-black/50">
                Language
              </span>

              <select
                className="rounded-full border border-wisdom-beige bg-wisdom-cream px-4 py-2 font-body text-sm text-wisdom-green outline-none"
                defaultValue="English"
              >
                {languages.map((language) => (
                  <option key={language}>
                    {language}
                  </option>
                ))}
              </select>

            </div>

          </div>


          {/* Messages */}
          <div className="min-h-120 space-y-6 p-6 md:p-8">

            {/* Gogo */}
            <div className="flex gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wisdom-beige">
                👵🏿
              </div>

              <div className="max-w-xl">

                <p className="mb-2 font-body text-xs font-semibold text-wisdom-rust">
                  Gogo
                </p>

                <div className="rounded-2xl rounded-tl-sm bg-wisdom-beige p-5">

                  <p className="font-body text-sm leading-7 text-wisdom-black">
                    Hello, my child. What would you like to know today?
                    You can ask me about stories, traditions, food,
                    relationships, culture or the wisdom passed down
                    through generations.
                  </p>

                </div>

              </div>

            </div>


            {/* Example User Message */}
            <div className="flex justify-end">

              <div className="max-w-xl rounded-2xl rounded-tr-sm bg-wisdom-green p-5 text-white">

                <p className="font-body text-sm leading-7">
                  What wisdom did our grandmothers share about
                  taking care of ourselves?
                </p>

              </div>

            </div>


            {/* Example Gogo Response */}
            <div className="flex gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wisdom-beige">
                👵🏿
              </div>

              <div className="max-w-xl">

                <p className="mb-2 font-body text-xs font-semibold text-wisdom-rust">
                  Gogo
                </p>

                <div className="rounded-2xl rounded-tl-sm bg-wisdom-beige p-5">

                  <p className="font-body text-sm leading-7 text-wisdom-black">
                    Our mothers taught us that caring for yourself was
                    not selfish. Rest, nourishing food, community and
                    listening to your body were all part of keeping
                    yourself strong.
                  </p>

                  <p className="mt-4 font-body text-xs leading-5 text-wisdom-black/50">
                    This response reflects preserved cultural knowledge.
                    Traditional practices should not replace professional
                    medical advice.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Suggested questions */}
          <div className="border-t border-wisdom-beige px-6 py-5">

            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-wider text-wisdom-black/45">
              Try asking
            </p>

            <div className="flex gap-2 overflow-x-auto pb-2">

              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => setMessage(question)}
                  className="shrink-0 rounded-full border border-wisdom-beige bg-wisdom-cream px-4 py-2 text-left font-body text-xs text-wisdom-green transition-colors hover:bg-wisdom-beige"
                >
                  {question}
                </button>
              ))}

            </div>

          </div>


          {/* Input */}
          <div className="border-t border-wisdom-beige p-5">

            <div className="flex items-end gap-3">

              {/* Voice */}
              <button
                type="button"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-wisdom-beige text-lg text-wisdom-green"
                aria-label="Voice input"
              >
                🎙
              </button>


              {/* Text */}
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Ask Gogo anything..."
                rows={1}
                className="min-h-12 flex-1 resize-none rounded-2xl border border-wisdom-beige bg-wisdom-cream px-5 py-3 font-body text-sm text-wisdom-black outline-none placeholder:text-wisdom-black/35 focus:border-wisdom-rust"
              />


              {/* Send */}
              <button
                type="button"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-wisdom-rust text-lg text-white transition-transform hover:scale-105"
                aria-label="Send message"
              >
                →
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default AskGogo