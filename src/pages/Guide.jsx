import { Link } from 'react-router-dom'

function Section({ icon, title, children }) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-6">
      <h2 className="text-xl font-bold text-text-primary flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      <div className="text-text-secondary leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  )
}

function Feature({ icon, name, children }) {
  return (
    <div className="border-l-4 border-accent/40 bg-accent/5 rounded-r-lg p-4">
      <div className="flex gap-3">
        <span className="text-lg flex-shrink-0">{icon}</span>
        <div>
          <span className="font-semibold text-text-primary">{name}</span>
          <p className="mt-1 text-text-secondary text-sm">{children}</p>
        </div>
      </div>
    </div>
  )
}

function Guide() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-text-primary">
          How to Use This Site
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          A quick guide to getting the most out of Claude Code Academy and its learning features.
        </p>
      </div>

      {/* How the site works */}
      <Section icon="🗺️" title="How the Site Works">
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <span className="text-text-primary font-medium">Organized by category</span> — modules are grouped into topics with a recommended order, but you can explore however you like.
          </li>
          <li>
            <span className="text-text-primary font-medium">Short lessons</span> — each module is a focused 3–8 minute read followed by a quiz.
          </li>
          <li>
            <span className="text-text-primary font-medium">Prerequisites are suggestions</span> — some modules suggest prior reading, but nothing is locked. Jump around if you want!
          </li>
        </ul>
      </Section>

      {/* Learning features */}
      <Section icon="🧰" title="Learning Features">
        <p className="mb-4">
          The site includes several evidence-based learning tools. Here's what each one does and why it matters.
        </p>
        <div className="space-y-4">
          <Feature icon="🔍" name="Pre-tests">
            Before each new module, you get a quick diagnostic quiz. Don't stress about getting these wrong — research shows that testing yourself <em>before</em> learning actually improves how well you retain the material. It primes your brain to pay attention to what matters.
          </Feature>

          <Feature icon="✅" name="Quizzes">
            After each module, test what you just learned. You get immediate feedback with explanations for each answer, so you learn even from mistakes.
          </Feature>

          <Feature icon="🎯" name="Confidence Rating">
            After selecting your answer, you rate how confident you are. This trains metacognition — knowing what you know and what you don't. Check your calibration score on the <Link to="/progress" className="text-accent hover:text-accent-hover underline">Progress page</Link> to see how accurate your self-assessment is.
          </Feature>

          <Feature icon="🔄" name="Spaced Repetition Review">
            Questions you answer in quizzes get added to a review queue. Come back regularly to review — the system schedules questions at optimal intervals so you remember long-term. This is the single most effective technique for durable learning.
          </Feature>

          <Feature icon="🎲" name="Mixed Quiz">
            Once you've completed a few modules, try the <Link to="/quiz/mixed" className="text-accent hover:text-accent-hover underline">Mixed Quiz</Link> from the dashboard. It pulls questions from across all your completed modules — this interleaving dramatically improves retention by forcing your brain to distinguish between similar concepts.
          </Feature>

          <Feature icon="🔥" name="Streaks">
            The app tracks your daily learning streak. Even a quick 5-minute review session counts. Try to keep it going — consistency beats intensity.
          </Feature>

          <Feature icon="🏆" name="Achievements">
            Earn badges for meaningful learning milestones — not just showing up, but actually mastering content and building good habits. Check them on your <Link to="/progress" className="text-accent hover:text-accent-hover underline">Progress page</Link>.
          </Feature>

          <Feature icon="⚠️" name="Trouble Spots">
            The system detects questions that keep tripping you up (called "leeches") and suggests you revisit the relevant module. These are golden opportunities — they point directly at your knowledge gaps.
          </Feature>
        </div>
      </Section>

      {/* Recommended workflow */}
      <Section icon="📋" title="Recommended Learning Workflow">
        <ol className="space-y-3 list-decimal list-inside">
          <li>
            <span className="text-text-primary font-medium">Start with Getting Started</span> — the first category gives you a solid foundation.
          </li>
          <li>
            <span className="text-text-primary font-medium">Do 1–3 modules per session</span> — don't binge! Spacing your learning across days is far more effective.
          </li>
          <li>
            <span className="text-text-primary font-medium">Always take the quiz</span> — even if you feel confident. Testing yourself is how memories solidify.
          </li>
          <li>
            <span className="text-text-primary font-medium">Come back daily for review</span> — even just 5 minutes of spaced repetition review goes a long way.
          </li>
          <li>
            <span className="text-text-primary font-medium">Try a mixed quiz once a week</span> — interleaving strengthens the connections between concepts.
          </li>
          <li>
            <span className="text-text-primary font-medium">Check your Progress page</span> — see weak areas, calibration accuracy, and trouble spots.
          </li>
          <li>
            <span className="text-text-primary font-medium">Revisit flagged modules</span> — if something is marked as a trouble spot, go back and re-read it.
          </li>
        </ol>
      </Section>

      {/* Tips */}
      <Section icon="💡" title="Tips for Making It Stick">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-surface rounded-lg p-4 border border-dark-border">
            <p className="text-text-primary font-medium mb-1">Space it out</p>
            <p className="text-sm">20 minutes a day beats 3 hours once a week. Your brain needs sleep between sessions to consolidate memories.</p>
          </div>
          <div className="bg-dark-surface rounded-lg p-4 border border-dark-border">
            <p className="text-text-primary font-medium mb-1">Pre-tests aren't a test of you</p>
            <p className="text-sm">They prime your brain for learning. Getting them wrong is actually the point — it creates curiosity that makes the lesson stick.</p>
          </div>
          <div className="bg-dark-surface rounded-lg p-4 border border-dark-border">
            <p className="text-text-primary font-medium mb-1">Calibration is a superpower</p>
            <p className="text-sm">If your confidence calibration is off, that's great — it means you're learning where your blind spots are. That awareness is itself a skill.</p>
          </div>
          <div className="bg-dark-surface rounded-lg p-4 border border-dark-border">
            <p className="text-text-primary font-medium mb-1">Review is the #1 thing</p>
            <p className="text-sm">Review sessions are the most important thing you can do. Even when it feels easy, that's the spaced repetition working — it means you're remembering.</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="text-center py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Start Learning →
        </Link>
      </div>
    </div>
  )
}

export default Guide
