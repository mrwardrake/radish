import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leaderboard — RADSHRIMP',
  description: 'Live global leaderboard for RADSHRIMP.',
};

// Disable caching so the leaderboard is fresh on every request.
export const revalidate = 30;

const DREAMLO_PUBLIC = '69aa56978f40bc1a145049e8';
const DREAMLO_URL = `https://dreamlo.com/lb/${DREAMLO_PUBLIC}/json/0/100`;

type DreamloEntry = {
  name: string;
  score: string | number;
  seconds: string | number;
  text: string;
  date: string;
};

type DreamloResponse = {
  dreamlo?: {
    leaderboard?: {
      entry?: DreamloEntry | DreamloEntry[];
    };
  };
};

async function fetchEntries(): Promise<DreamloEntry[]> {
  try {
    const res = await fetch(DREAMLO_URL, { next: { revalidate: 30 } });
    if (!res.ok) return [];
    const data: DreamloResponse = await res.json();
    const entry = data?.dreamlo?.leaderboard?.entry;
    if (!entry) return [];
    return Array.isArray(entry) ? entry : [entry];
  } catch {
    return [];
  }
}

export default async function Leaderboard() {
  const entries = await fetchEntries();

  return (
    <article className="max-w-3xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-rad-accent text-4xl font-bold tracking-widest">LEADERBOARD</h1>
        <p className="text-rad-dim text-sm mt-2 tracking-wider">TOP 100 GLOBAL — UPDATED EVERY 30s</p>
      </header>

      {entries.length === 0 ? (
        <div className="text-center py-16 text-rad-dim border border-rad-border rounded-lg">
          No scores yet. Be the first.
        </div>
      ) : (
        <div className="bg-black/40 border border-rad-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-rad-border text-rad-dim text-xs tracking-wider">
                <th className="text-left p-3 w-16">RANK</th>
                <th className="text-left p-3">NAME</th>
                <th className="text-right p-3 w-24">LEVEL</th>
                <th className="text-right p-3 w-32">SCORE</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e, i) => {
                const { name, level } = parseDreamloName(e.name);
                return (
                  <tr
                    key={`${i}-${name}`}
                    className={`border-b border-rad-border/50 ${i === 0 ? 'text-rad-accent' : 'text-rad-text'}`}
                  >
                    <td className="p-3 font-mono">{i + 1}</td>
                    <td className="p-3 font-mono">{name}</td>
                    <td className="p-3 text-right font-mono">{level || '—'}</td>
                    <td className="p-3 text-right font-mono">{Number(e.score).toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <p className="text-center text-xs text-rad-dim mt-6">
        Submitted via RADSHRIMP. Want yours removed? See the{' '}
        <a href="/privacy">privacy policy</a>.
      </p>
    </article>
  );
}

// The game submits scores via dreamlo URL: add/{name|level|date}/{score}
// dreamlo stores the whole pipe-separated string as the name. Parse it back.
function parseDreamloName(raw: string | number): { name: string; level: string } {
  const parts = String(raw).split('|');
  return {
    name: parts[0] || '',
    level: parts[1] || '',
  };
}
