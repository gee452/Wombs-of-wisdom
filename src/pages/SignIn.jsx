import { useState } from "react"

function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <main className="min-h-screen bg-wisdom-cream">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Brand Side */}
        <section className="relative hidden overflow-hidden bg-wisdom-green lg:flex">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 top-20 h-80 w-80 rounded-full border-40 border-white" />
            <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full border-50 border-white" />
          </div>

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            {/* Logo */}
            <a href="/">
              <img
                src="/wombs-of-wisdom-logo.png"
                alt="Wombs of Wisdom"
                className="h-20 w-auto object-contain"
              />
            </a>


            {/* Message */}
            <div className="max-w-xl">

              <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-wisdom-orange">
                Her Voice. Her Wisdom. Her Legacy.
              </p>

              <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-white xl:text-6xl">
                Wisdom should never disappear with a generation.
              </h1>

              <p className="mt-6 max-w-lg font-body text-base leading-8 text-white/65">
                Discover the stories, traditions and knowledge passed
                down through generations of African women.
              </p>

            </div>


            {/* Quote */}
            <div className="border-l border-white/20 pl-5">

              <p className="font-display text-lg italic text-white/80">
                "What our mothers knew should not be forgotten."
              </p>

            </div>

          </div>

        </section>


        {/* Authentication */}
        <section className="flex items-center justify-center px-6 py-12">

          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="mb-10 text-center lg:hidden">

              <a href="/">
                <img
                  src="/wombs-of-wisdom-logo.png"
                  alt="Wombs of Wisdom"
                  className="mx-auto h-20 w-auto object-contain"
                />
              </a>

              <p className="mt-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-wisdom-rust">
                Her Voice. Her Wisdom. Her Legacy.
              </p>

            </div>


            {/* Heading */}
            <div className="text-center">

              <h2 className="font-display text-4xl font-semibold text-wisdom-green">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h2>

              <p className="mt-3 font-body text-sm leading-6 text-wisdom-black/50">
                {isSignUp
                  ? "Begin your journey into a living library of wisdom."
                  : "Continue exploring the wisdom of generations."}
              </p>

            </div>


            {/* Form */}
            <form className="mt-8 space-y-5">

              {isSignUp && (
                <div>

                  <label className="font-body text-sm font-semibold text-wisdom-green">
                    Full name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-wisdom-beige bg-white px-5 py-3.5 font-body text-sm outline-none transition-colors focus:border-wisdom-rust"
                  />

                </div>
              )}


              <div>

                <label className="font-body text-sm font-semibold text-wisdom-green">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-wisdom-beige bg-white px-5 py-3.5 font-body text-sm outline-none transition-colors focus:border-wisdom-rust"
                />

              </div>


              <div>

                <div className="flex items-center justify-between">

                  <label className="font-body text-sm font-semibold text-wisdom-green">
                    Password
                  </label>

                  {!isSignUp && (
                    <button
                      type="button"
                      className="font-body text-xs font-medium text-wisdom-rust hover:underline"
                    >
                      Forgot password?
                    </button>
                  )}

                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-2xl border border-wisdom-beige bg-white px-5 py-3.5 font-body text-sm outline-none transition-colors focus:border-wisdom-rust"
                />

              </div>


              {isSignUp && (
                <div>

                  <label className="font-body text-sm font-semibold text-wisdom-green">
                    Confirm password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="mt-2 w-full rounded-2xl border border-wisdom-beige bg-white px-5 py-3.5 font-body text-sm outline-none transition-colors focus:border-wisdom-rust"
                  />

                </div>
              )}


              <button
                type="submit"
                className="w-full rounded-full bg-wisdom-rust px-6 py-4 font-body text-sm font-semibold text-white transition-transform hover:scale-[1.01]"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </button>

            </form>


            {/* Divider */}
            <div className="my-7 flex items-center gap-4">

              <div className="h-px flex-1 bg-wisdom-beige" />

              <span className="font-body text-xs text-wisdom-black/35">
                OR
              </span>

              <div className="h-px flex-1 bg-wisdom-beige" />

            </div>


            {/* Google placeholder */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-full border border-wisdom-beige bg-white px-6 py-3.5 font-body text-sm font-semibold text-wisdom-green"
            >
              <span>G</span>
              Continue with Google
            </button>


            {/* Switch */}
            <div className="mt-7 text-center">

              <p className="font-body text-sm text-wisdom-black/50">

                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}

                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="ml-2 font-semibold text-wisdom-rust hover:underline"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>

              </p>

            </div>


            {/* Footer text */}
            <p className="mt-10 text-center font-body text-xs leading-5 text-wisdom-black/35">
              By continuing, you agree to our Terms of Service
              and Privacy Policy.
            </p>

          </div>

        </section>

      </div>

    </main>
  )
}

export default SignIn