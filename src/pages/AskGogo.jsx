import { useEffect, useRef, useState } from "react";
import GogoVoicePlayer from "../components/GogoVoicePlayer";

function AskGogo() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "gogo",
      text: "Ah, my child. 🌿 Welcome to Wombs of Wisdom. What would you like to ask Gogo today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Scroll to the newest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function handleSubmit(e) {
    e.preventDefault();

    const userMessage = message.trim();

    if (!userMessage || loading) {
      return;
    }

    // Add user's message immediately
    const userMessageObject = {
      id: Date.now(),
      role: "user",
      text: userMessage,
    };

    setMessages((previousMessages) => [...previousMessages, userMessageObject]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/gogo/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          language: "English",
        }),
      });

      if (!response.ok) {
        throw new Error("Gogo could not be reached.");
      }

      const data = await response.json();

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          id: Date.now() + 1,
          role: "gogo",
          text:
            data.response ||
            "My child, I could not find the words to answer you right now.",
        },
      ]);
    } catch (error) {
      console.error("Gogo error:", error);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          id: Date.now() + 2,
          role: "gogo",
          text: "My child, I am having trouble connecting right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <main className="min-h-screen bg-[#173B2B] px-4 py-6 text-[#173B2B] sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-5xl flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[#173B2B] shadow-[0_25px_80px_rgba(8,26,20,0.45)]">
        {/* HEADER */}
        <header className="border-b border-white/10 bg-[#173B2B] px-5 py-6 sm:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#DCEBDD] text-2xl ring-2 ring-white/15">
              👵🏾
            </div>

            <div>
              <h1 className="text-2xl font-semibold text-white">Ask Gogo</h1>

              <p className="text-sm text-white/70">
                Her voice. Her wisdom. Her legacy.
              </p>
            </div>
          </div>
        </header>

        {/* CHAT */}
        <section className="flex-1 bg-[#173B2B] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-3xl rounded-[28px] border border-white/10 bg-[#F3F7F4] p-4 shadow-inner sm:p-6">
            <div className="space-y-6">
              {messages.map((item) => {
                const isUser = item.role === "user";

                return (
                  <div
                    key={item.id}
                    className={`flex w-full ${
                      isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex max-w-[90%] gap-3 sm:max-w-[75%] ${
                        isUser ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                          isUser
                            ? "bg-[#DCEBDD] text-[#173B2B]"
                            : "bg-[#B8D8C2] text-[#173B2B]"
                        }`}
                      >
                        {isUser ? "You" : "👵🏾"}
                      </div>

                      {isUser ? (
                        <div className="rounded-2xl rounded-tr-sm bg-white px-5 py-4 text-sm leading-7 text-[#173B2B] shadow-sm sm:text-base">
                          <p className="whitespace-pre-wrap break-words text-[#111827]">
                            {item.text}
                          </p>
                        </div>
                      ) : (
                        <div className="w-full max-w-[90%] sm:max-w-[75%]">
                          <GogoVoicePlayer text={item.text} />

                          <div className="rounded-2xl rounded-tl-sm border border-[#1F6B45]/10 bg-white px-5 py-4 text-sm leading-7 text-[#173B2B] shadow-sm sm:text-base">
                            <p className="whitespace-pre-wrap break-words text-[#111827]">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[75%] items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B8D8C2]">
                      👵🏾
                    </div>

                    <div className="rounded-2xl rounded-tl-sm border border-[#1F6B45]/10 bg-white px-5 py-4 text-sm text-[#173B2B] shadow-sm">
                      Gogo is thinking...
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </section>

        {/* INPUT AREA */}
        <div className="border-t border-white/10 bg-[#173B2B] px-4 pb-5 pt-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-full max-w-3xl items-end gap-3 rounded-2xl border border-[#1F6B45]/20 bg-white p-3 shadow-sm"
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask Gogo something..."
              disabled={loading}
              className="max-h-32 min-h-12 flex-1 resize-none bg-transparent px-3 py-3 text-sm text-[#173B2B] outline-none placeholder:text-[#173B2B]/45 sm:text-base"
            />

            <button
              type="submit"
              disabled={!message.trim() || loading}
              className="shrink-0 rounded-xl bg-[#1F6B45] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#185638] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? "..." : "Send"}
            </button>
          </form>

          <p className="mx-auto mt-2 max-w-3xl text-center text-xs text-white/60">
            Gogo shares preserved traditional knowledge and distinguishes it
            from scientific evidence.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AskGogo;
