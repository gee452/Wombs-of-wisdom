import Button from "../components/Button"

import { Link } from "react-router-dom";

import heroImage from "../assets/gran-daughter.jpeg";
import forEldersImage from "../assets/gogo-recording.png";
import book1Image from "../assets/health-book.jpg";
import book2Image from "../assets/roots-book.png";
import book3Image from "../assets/practices-book.jpg";
import book4Image from "../assets/healers-book.png";

function Landing() {
  return (
    <main>

      {/* HERO */}
      <section className="overflow-hidden bg-wisdom-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:px-8">

          <div className="max-w-2xl">

            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.25em] text-wisdom-rust">
              Her Voice. Her Wisdom. Her Legacy.
            </p>

            <h1 className="font-display text-5xl font-semibold leading-[1.08] text-wisdom-green sm:text-6xl lg:text-7xl">
              What if the wisdom of our grandmothers could live on?
            </h1>

            <p className="mt-7 max-w-xl font-body text-lg leading-8 text-wisdom-black/70">
              Wombs of Wisdom uses AI to preserve the voices, stories,
              traditions and knowledge of African women and make them
              accessible to generations to come.
            </p>

           <div className="mt-9 flex flex-col gap-3 sm:flex-row">

  <Link to="/Explore">
    <Button size="lg">
      Explore Wisdom
    </Button>
  </Link>

  <Link to="/Contribute">
    <Button
      variant="secondary"
      size="lg"
    >
      Share Your Wisdom
    </Button>
  </Link>

</div>

          </div>

 {/* Hero Image */}
<div className="relative">
  <div className="aspect-4/5 overflow-hidden rounded-4xl">
    <img
      src={heroImage}
      alt="Grandmother and granddaughter sharing wisdom"
      className="h-full w-full object-cover"
    />
  </div>
</div>

        </div>
      </section>


      {/* PROBLEM */}
      <section
        id="story"
        className="bg-white px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-wisdom-rust">
            The Problem
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-wisdom-green md:text-5xl">
            When wisdom disappears, generations lose more than stories.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl font-body text-lg leading-8 text-wisdom-black/65">
            For generations, knowledge about healing, food, motherhood,
            relationships, resilience and culture has been passed from
            grandmother to mother to daughter.
          </p>

          <p className="mx-auto mt-5 max-w-3xl font-body text-lg leading-8 text-wisdom-black/65">
            But migration, urbanisation and changing lifestyles are
            creating distance between generations. Knowledge that once
            lived in conversations is at risk of being forgotten.
          </p>

        </div>
      </section>


      {/* SOLUTION */}
      <section
        id="how-it-works"
        className="bg-wisdom-green px-6 py-20 text-white md:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-wisdom-orange">
              Our Solution
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Turning generations of wisdom into a living digital legacy.
            </h2>

            <p className="mt-6 font-body text-base leading-8 text-white/70">
              Wombs of Wisdom connects elder knowledge with younger
              generations through AI, voice, language and conversation.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Preserve",
                text: "Elders can record stories, traditions and knowledge in their own voices and languages.",
              },
              {
                number: "02",
                title: "Connect",
                text: "Young women can ask questions and discover knowledge through a conversational experience.",
              },
              {
                number: "03",
                title: "Continue",
                text: "Knowledge can be translated, explored and passed forward to future generations.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >

                <span className="font-body text-sm font-semibold text-wisdom-orange">
                  {item.number}
                </span>

                <h3 className="mt-8 font-display text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 font-body text-sm leading-7 text-white/65">
                  {item.text}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ASK GOGO */}
      <section className="bg-wisdom-cream px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>

            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-wisdom-rust">
              Meet Ask Gogo
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold text-wisdom-green md:text-5xl">
              Ask the questions you wish you could ask her.
            </h2>

            <p className="mt-6 font-body text-base leading-8 text-wisdom-black/65">
              Ask questions about traditions, food, stories, relationships,
              women's wellbeing and everyday life. Wombs of Wisdom brings
              preserved knowledge into a conversational experience.
            </p>

            <div className="mt-8">
             <Link to="/AskGogo">
             <Button size="lg">
                Meet Ask Gogo
              </Button>
              </Link> 
            </div>


          </div>


          {/* Chat Placeholder */}
          <div className="rounded-4xl bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center gap-4 border-b border-wisdom-beige pb-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wisdom-beige text-2xl">
                👵🏿
              </div>

              <div>
                <p className="font-body font-semibold text-wisdom-green">
                  Gogo
                </p>

                <p className="font-body text-xs text-wisdom-black/50">
                  Your digital elder
                </p>
              </div>

            </div>


            <div className="space-y-5">

              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-wisdom-beige p-4">
                <p className="font-body text-sm leading-6 text-wisdom-black">
                  Gogo, what wisdom did our grandmothers pass down about
                  caring for ourselves?
                </p>
              </div>

              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-wisdom-green p-4 text-white">
                <p className="font-body text-sm leading-6">
                  Ah, my child. There is much our mothers taught us.
                  Let me share what was passed down through generations...
                </p>
              </div>

            </div>


            <div className="mt-6 flex items-center gap-3 border-t border-wisdom-beige pt-5">

              <div className="flex-1 rounded-full bg-wisdom-cream px-5 py-3 font-body text-sm text-wisdom-black/40">
                Ask Gogo anything...
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-wisdom-rust text-white">
                →
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* EXPLORE */}
      <section
        id="explore"
        className="bg-white px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-wisdom-rust">
                Explore Wisdom
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold text-wisdom-green md:text-5xl">
                Knowledge worth passing on.
              </h2>
            </div>

            <a
              href="#"
              className="font-body text-sm font-semibold text-wisdom-rust"
            >
              View all wisdom →
            </a>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              ["🌿", "Healing & Wellness"],
              ["🍲", "Food & Nutrition"],
              ["🤱🏿", "Motherhood"],
              ["♡", "Relationships & Life"],
              ["🌍", "Culture & Stories"],
              ["✦", "Traditional Beauty Tips"],
            ].map(([icon, title]) => (
              <article
                key={title}
                className="group cursor-pointer rounded-3xl border border-wisdom-beige bg-wisdom-cream p-7 transition-transform duration-200 hover:-translate-y-1"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wisdom-beige text-xl">
                  {icon}
                </div>

                <h3 className="mt-7 font-display text-2xl font-semibold text-wisdom-green">
                  {title}
                </h3>

                <p className="mt-3 font-body text-sm leading-6 text-wisdom-black/55">
                  Discover stories, practices and knowledge about your beauty.
                </p>
 <Link to="/Explore">
                <span className="mt-6 inline-block font-body text-sm font-semibold text-wisdom-rust">
                  Explore →
                </span>
</Link>
              </article>
            ))}

          </div>

        </div>
      </section>


      {/* CONTRIBUTE */}
     <section
  id="elders"
  className="bg-wisdom-beige px-6 py-20 md:py-28"
>
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

    <div className="order-2 lg:order-1">
      <div className="aspect-4/3 overflow-hidden rounded-4xl">
        <img
          src={forEldersImage}
          alt="Grandmother sharing her wisdom"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    <div className="order-1 lg:order-2">

      <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-wisdom-rust">
        For Elders
      </p>

      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-wisdom-green md:text-5xl">
        Your voice could become someone's inheritance.
      </h2>

      <p className="mt-6 font-body text-base leading-8 text-wisdom-black/65">
        Share the stories, lessons, traditions and knowledge that
        have been passed down to you.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
         <Link to="/AskGogo">
        <Button size="lg">
          Share Your Wisdom
        </Button>
</Link>
      </div>

    </div>

  </div>
</section>

      {/* BOOKS */}
      <section className="bg-wisdom-cream px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-wisdom-rust">
              Continue Learning
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold text-wisdom-green md:text-5xl">
              Wisdom doesn't end with a conversation.
            </h2>

            <p className="mt-5 font-body leading-7 text-wisdom-black/60">
              Discover books and resources recommended around the topics
              you're exploring.
            </p>

          </div>

<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

  {[
    {
      image: book1Image,
      title: "WOMENS HEALTHCARE PRACTICES",
      author: "Zipho Zwane",
    },
    {
      image: book2Image,
      title: "ROOTS OF HEALING",
      author: "Mampho Mokoena",
    },
    {
      image: book3Image,
      title: "WOMENS CARE HEALTH PRACTICES",
      author: "Ashley Hlongwane",
    },
    {
      image: book4Image,
      title: "THE HEALERS DAUGHTER",
      author: "Sibongile Dladla",
    },
  ].map((book) => (
    <article key={book.title}>

      <div className="aspect-4/4 overflow-hidden rounded-2xl">
        <img
          src={book.image}
          alt={`${book.title} book cover`}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-wisdom-green">
        {book.title}
      </h3>

      <p className="mt-1 font-body text-sm text-wisdom-black/50">
        {book.author}
      </p>

    </article>
  ))}

</div>

        </div>
      </section>



      {/* FINAL CTA */}
      <section className="bg-wisdom-rust px-6 py-20 text-center text-white md:py-24">

        <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
          The Legacy Continues
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold md:text-6xl">
          What wisdom will you carry forward?
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-body text-base leading-7 text-white/80">
          Discover, preserve and share the knowledge that connects
          generations of women.
        </p>

        <div className="mt-8">
           <Link to="/Contribute">
          <Button
            variant="secondary"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-wisdom-rust"
          >
            Get Started
          </Button>
          </Link>
        </div>

      </section>

    </main>
  )
}

export default Landing