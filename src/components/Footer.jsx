function Footer() {
  return (
    <footer className="bg-wisdom-green text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <a href="/" className="flex items-center">
  <img
    src="/wombs-of-wisdom-logo.png"
    alt="Wombs of Wisdom"
    className="h-18 w-auto object-contain"
  />
</a>
            </div>

            <p className="max-w-md font-body text-sm leading-7 text-white/70">
              Preserving the wisdom of African women and connecting generations
              through technology.
            </p>

            <p className="mt-6 font-display text-xl text-white">
              Her Voice. Her Wisdom. Her Legacy.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 font-body text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#story"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Our Story
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#explore"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Explore Wisdom
                </a>
              </li>

              <li>
                <a
                  href="#elders"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Share Your Wisdom
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 font-body text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@wombsofwisdom.com"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span aria-hidden="true">✉</span>
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span aria-hidden="true">◎</span>
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span aria-hidden="true" className="font-bold">
                    f
                  </span>
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span aria-hidden="true">▶</span>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Wombs of Wisdom. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>

            <a href="#" className="hover:text-white">
              Safety
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
