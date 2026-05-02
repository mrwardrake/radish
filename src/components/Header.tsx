import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-rad-border">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-rad-accent text-xl font-bold tracking-widest no-underline hover:no-underline">
          RADSHRIMP
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/leaderboard" className="text-rad-text hover:text-rad-accent no-underline">
            Leaderboard
          </Link>
          <Link href="/privacy" className="text-rad-text hover:text-rad-accent no-underline">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
