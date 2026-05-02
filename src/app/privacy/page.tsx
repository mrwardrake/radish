import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — RADSHRIMP',
  description: 'How RADSHRIMP collects, uses, and protects your data.',
};

export default function Privacy() {
  return (
    <article className="max-w-3xl mx-auto bg-black/40 border border-rad-border rounded-lg p-8 md:p-10">
      <h1 className="text-rad-accent text-4xl font-bold tracking-widest mb-2">RADSHRIMP</h1>
      <div className="text-rad-dim text-sm mb-8 tracking-wider">PRIVACY POLICY</div>

      <p className="mb-4">
        <strong>Last updated:</strong> April 30, 2026
      </p>

      <p className="mb-6">
        This Privacy Policy describes how Wardrake Studios (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects,
        uses, and protects information when you play RADSHRIMP (&ldquo;the game&rdquo;). By playing the game, you agree to the
        collection and use of information as described in this policy.
      </p>

      <Section title="Information We Collect">
        <p>RADSHRIMP collects only the minimum information needed to operate the global leaderboard:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>Player name:</strong> A name you choose to display on the leaderboard. This is not linked to your real identity.</li>
          <li><strong>Score and game level:</strong> Your final score and the depth level reached, submitted to the leaderboard at game over.</li>
          <li><strong>Date of submission:</strong> The date your score was submitted.</li>
        </ul>
        <p className="mt-3">We do not collect your real name, email address, location, contacts, photos, or any other personal information.</p>
      </Section>

      <Section title="How Your Information Is Used">
        <p>
          The player name, score, and date are submitted to a third-party leaderboard service (DreamLo, dreamlo.com) so that
          scores can be displayed publicly on the in-game global leaderboard. This data is visible to other players within the game.
        </p>
        <p className="mt-3">
          On the Reddit version of the game, your Reddit username is used in place of a custom name and is associated with your
          score on the Reddit leaderboard. This is provided automatically by Reddit&rsquo;s Devvit platform.
        </p>
      </Section>

      <Section title="Google Play Games Services (Android only)">
        <p>
          On Android devices, the game integrates with Google Play Games Services to track achievements. If you sign in to Google
          Play Games, your achievement progress is stored by Google. We do not directly collect or store any data from this service.
          You can review Google&rsquo;s privacy practices at{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
        </p>
      </Section>

      <Section title="Data Storage and Security">
        <p>
          Leaderboard data is stored by DreamLo and is publicly accessible through their service. Reddit leaderboard data is stored
          by Reddit. Local high scores are stored only on your device.
        </p>
        <p className="mt-3">We do not operate our own servers and do not store any user data ourselves.</p>
      </Section>

      <Section title="Third-Party Services">
        <p>RADSHRIMP uses the following third-party services:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>DreamLo:</strong> Leaderboard hosting (PC, Android, iOS versions).{' '}
            <a href="https://dreamlo.com" target="_blank" rel="noopener noreferrer">dreamlo.com</a>
          </li>
          <li>
            <strong>Reddit Devvit:</strong> Game platform and leaderboard (Reddit version only).{' '}
            <a href="https://www.reddit.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
              reddit.com/policies/privacy-policy
            </a>
          </li>
          <li>
            <strong>Google Play Games Services:</strong> Achievements (Android only).{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
          </li>
        </ul>
      </Section>

      <Section title="Advertising and Analytics">
        <p>
          RADSHRIMP contains <strong>no advertisements</strong>, <strong>no analytics</strong>, and <strong>no tracking</strong>.
          We do not use cookies, tracking pixels, or any third-party analytics services.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          RADSHRIMP is suitable for players of all ages. We do not knowingly collect personal information from children under 13.
          The only player-provided data is a chosen display name, which should not contain personal information. If you believe a
          child has submitted personal information, please contact us and we will remove it.
        </p>
      </Section>

      <Section title="Your Rights">
        <p>
          If you wish to have your leaderboard entry removed, please contact us at the email below with your player name and
          approximate score. We will remove the entry from the leaderboard.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated
          &ldquo;Last updated&rdquo; date. Continued use of the game after changes constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="Contact">
        <p>For questions about this privacy policy or RADSHRIMP, please contact:</p>
        <p className="mt-3">
          <strong>Wardrake Studios</strong>
          <br />
          Email: <a href="mailto:contact@wardrakes.com">contact@wardrakes.com</a>
        </p>
      </Section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-rad-accent text-xl font-semibold border-b border-rad-border pb-2 mb-3">{title}</h2>
      {children}
    </section>
  );
}
