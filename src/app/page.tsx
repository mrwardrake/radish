import Link from 'next/link';

export default function Landing() {
  return (
    <div className="space-y-16">
      <section className="pt-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest text-rad-accent">
          RADSHRIMP
        </h1>
        <p className="mt-4 text-rad-dim text-sm tracking-wider">
          PIXEL-ART SUBMARINE ARCADE SHOOTER
        </p>
        <p className="mt-8 text-lg text-rad-text max-w-2xl mx-auto">
          Descend through irradiated depths. Blast mutant shrimp. Survive as long as you can.
          Climb the global leaderboard.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.wardrakes.radshrimp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-[60px] w-auto"
            />
          </a>
          <Link
            href="/leaderboard"
            className="px-6 py-3 border border-rad-accent text-rad-accent rounded-md font-medium hover:bg-rad-accent hover:text-black transition no-underline"
          >
            Live Leaderboard
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 pt-12 border-t border-rad-border">
        <Card title="Pixel-art arcade" body="Old-school sub-shooter. Tight controls, escalating chaos, no pay-to-win." />
        <Card title="Global leaderboard" body="Score and depth submitted to a public scoreboard. Claim your name." />
        <Card title="No ads. No tracking." body="Just the game. No advertisements, no analytics, no spyware." />
      </section>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-6 rounded-lg bg-black/40 border border-rad-border">
      <h3 className="font-semibold mb-2 text-rad-accent">{title}</h3>
      <p className="text-rad-text text-sm">{body}</p>
    </div>
  );
}
