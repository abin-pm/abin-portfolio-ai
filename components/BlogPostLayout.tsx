import Link from 'next/link';
import type { BlogPost } from '@/lib/data';
import { identity } from '@/lib/data';
import { ShareButtons } from '@/components/ShareButtons';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Table of contents for each post (H2 headings)
const tocItems: Record<string, string[]> = {
  'how-to-hire-react-developer-india': [
    'Introduction',
    'The 3 Most Common Hiring Mistakes',
    'What to Actually Look For',
    'Key Takeaways',
  ],
  'ai-native-workflow-cursor-copilot-claude': [
    'Introduction',
    'How Each Tool Fits into the Workflow',
    'What AI Tools Cannot Do',
    'Key Takeaways',
  ],
  'sas-to-react-national-grid-modernization': [
    'Introduction',
    'The Migration Approach',
    'Results',
    'Key Takeaways',
  ],
  'genai-code-stabilization-enterprise': [
    'Introduction',
    'The Stabilization Process',
    'Key Takeaways',
  ],
  'llm-integration-existing-react-app': [
    'Introduction',
    'Backend Integration Patterns',
    'Frontend Integration Patterns',
    'Key Takeaways',
  ],
  'micro-frontend-architecture-react': [
    'Introduction',
    'The Architecture Decision',
    'What Worked',
    'What Did Not Work (Initially)',
    'Key Takeaways',
  ],
};

function headingToId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const articleBodies: Record<string, React.ReactNode> = {
  'how-to-hire-react-developer-india': (
    <>
      <h2 id="introduction">Introduction</h2>
      <p>
        I&apos;ve been through a lot of React interviews in ten years, and as a team lead I&apos;ve
        reviewed and mentored the developers who got hired. The same three mistakes come up when
        companies in the US, UK, Europe or the Gulf hire React developers from India. None of
        them are about India. They&apos;re about how the hiring is done.
      </p>
      <h2 id="the-3-most-common-hiring-mistakes">The 3 Most Common Hiring Mistakes</h2>
      <h3>1. Comparing hourly rates instead of cost per feature</h3>
      <p>
        A cheaper developer who needs three rounds of review on every pull request isn&apos;t
        cheaper. Count the time your own team spends checking, fixing and re-explaining. Ask
        candidates about something they shipped that real users depend on, and what broke
        after it went live. People who have done it answer quickly and in detail.
      </p>
      <h3>2. Testing syntax instead of design</h3>
      <p>
        Plenty of interviews ask for a hook from memory and never ask how the candidate would
        structure a feature. For a senior role, the useful questions are about trade-offs:
        where state should live, when to split a frontend into micro frontends, what the API
        should look like, and what they would leave out to ship on time.
      </p>
      <h3>3. Not checking how they communicate</h3>
      <p>
        Remote work across time zones runs on writing. Look at how the candidate writes a
        status update or describes a pull request. Ask how they handled a requirement that
        changed halfway through a sprint. Someone who goes quiet until the work is &ldquo;done&rdquo;
        will cost you more than any technical gap.
      </p>
      <h2 id="what-to-actually-look-for">What to Actually Look For</h2>
      <p>
        Someone who has worked on production systems with real users, can talk through design
        decisions and their downsides, has worked directly with clients abroad, and writes
        clearly. Experience with AI coding tools is useful now too, but only if they can tell
        you when the tool was wrong and how they noticed.
      </p>
      <p>
        If you&apos;re hiring now,{' '}
        <a href="/hire-me" className="text-sage-dark hover:underline">here is how I work and what I&apos;ve built</a>
        , so you can judge me by the same checklist.
      </p>
      <h2 id="key-takeaways">Key Takeaways</h2>
      <ul>
        <li>Compare cost per shipped feature, not hourly rate.</li>
        <li>Ask senior candidates design questions, not trivia.</li>
        <li>Check written communication before you check algorithms.</li>
        <li>Value AI tool experience only when it comes with judgement about the output.</li>
      </ul>
      <h2 id="conclusion">Conclusion</h2>
      <p>
        There are very good senior React developers in India. Finding one is mostly about
        asking better questions: what have you shipped, how did you decide, and how do you
        keep people informed.
      </p>
    </>
  ),
  'ai-native-workflow-cursor-copilot-claude': (
    <>
      <h2 id="introduction">Introduction</h2>
      <p>
        Most writing about AI coding tools is either a demo or a warning. This is neither. It&apos;s
        how I use Cursor, GitHub Copilot and Claude on IBM client work in React, Next.js and
        .NET, and where each one helps or gets in the way.
      </p>
      <h2 id="how-each-tool-fits-into-the-workflow">How Each Tool Fits into the Workflow</h2>
      <h3>Cursor</h3>
      <p>
        Cursor is my main editor. Its value for me isn&apos;t autocomplete. It&apos;s being able to
        select some code and ask a question about it with the rest of the project in view:
        &ldquo;where else is this function called?&rdquo; or &ldquo;why does this effect run twice?&rdquo;.
        It&apos;s also good at mechanical refactors across many files. I read every change before
        accepting it, because it will happily rename something it shouldn&apos;t.
      </p>
      <h3>GitHub Copilot</h3>
      <p>
        Copilot does the dull parts: boilerplate, test setup, repetitive API calls. With strict
        TypeScript types its suggestions are often right. Without them, or when the logic
        depends on business rules it can&apos;t see, it guesses, and the guesses look plausible.
        That&apos;s the dangerous part.
      </p>
      <h3>Claude</h3>
      <p>
        Before I open a pull request on anything non-trivial, I paste the diff into Claude and
        ask what could go wrong. It sometimes points out an edge case, a missing error path or a
        loading state I forgot. It also suggests problems that aren&apos;t real, so I treat it like
        a colleague&apos;s review comments: worth reading, not automatically right.
      </p>
      <h2 id="what-ai-tools-cannot-do">What AI Tools Cannot Do</h2>
      <p>
        They don&apos;t know your business. On National Grid, much of my work was fixing
        GenAI-generated code that looked fine but didn&apos;t follow the rules the old SAS system
        enforced. No tool flagged that. Reading the requirement and comparing it with the code
        did. The skill isn&apos;t writing prompts. It&apos;s knowing what correct looks like.
      </p>
      <p>
        Need someone who works this way on your project?{' '}
        <a href="/hire-me" className="text-sage-dark hover:underline">See how hiring me works</a>.
      </p>
      <h2 id="key-takeaways">Key Takeaways</h2>
      <ul>
        <li>Cursor is most useful for questions and refactors with the whole project in view.</li>
        <li>Copilot is good with strict types and weak on business logic.</li>
        <li>Claude is a useful second reviewer, not a final one.</li>
        <li>The tools make you faster; your review decides whether the result is correct.</li>
      </ul>
      <h2 id="conclusion">Conclusion</h2>
      <p>
        Using AI well doesn&apos;t mean letting it write your code. It means letting it do the
        repetitive work and keeping your own judgement for everything that matters.
      </p>
    </>
  ),
  'sas-to-react-national-grid-modernization': (
    <>
      <h2 id="introduction">Introduction</h2>
      <p>
        At IBM I worked on National Grid USA&apos;s MDS Consolidation EPO Tracking application, a
        legacy SAS desktop tool that the business relied on. Six of us replaced it with a web
        platform: React.js on the frontend, .NET Core and PostgreSQL behind it, hosted on Azure.
        The unusual part was that GenAI tools generated much of the starting code.
      </p>
      <h2 id="the-migration-approach">The Migration Approach</h2>
      <h3>The generated starting point</h3>
      <p>
        Having a large first draft early on was useful. Screens, data models and API shapes
        existed from the start instead of being typed out by hand. The catch was that a draft
        is all it was.
      </p>
      <h3>Making the generated code correct</h3>
      <p>
        This is where most of my time went. Some of the logic didn&apos;t match the business
        rules the SAS tool enforced, and parts had drifted from the architecture the team had
        agreed on. I went through it module by module, compared it with the actual
        requirements, fixed what was wrong and brought it up to the client&apos;s coding
        standards. I also worked on React performance problems and on making screens usable
        on smaller devices.
      </p>
      <h3>Reviews and deployment</h3>
      <p>
        Everything went through code review before release, and deployments ran through
        Azure CI/CD. We worked with National Grid stakeholders in the US throughout, which
        mostly meant my evenings overlapped with their mornings.
      </p>
      <h2 id="results">Results</h2>
      <p>
        The web platform replaced the SAS desktop tool, and the business rules came across
        unchanged. The generated draft saved time at the start, but only because the team was
        willing to spend real effort checking it afterwards.
      </p>
      <p>
        Planning a legacy modernization?{' '}
        <a href="/hire-me" className="text-sage-dark hover:underline">Tell me about it</a>, or read the{' '}
        <a href="/projects/national-grid" className="text-sage-dark hover:underline">National Grid case study</a>.
      </p>
      <h2 id="key-takeaways">Key Takeaways</h2>
      <ul>
        <li>GenAI gives you a fast first draft, not a finished system.</li>
        <li>Budget real time for checking generated code against the business rules.</li>
        <li>Old systems hide rules that nobody wrote down; the generated code won&apos;t know them.</li>
        <li>Code review and CI/CD matter more, not less, when a tool wrote the first version.</li>
      </ul>
      <h2 id="conclusion">Conclusion</h2>
      <p>
        AI didn&apos;t replace anyone on this project. It moved the work. Less typing at the
        start, more careful reading in the middle.
      </p>
    </>
  ),
  'genai-code-stabilization-enterprise': (
    <>
      <h2 id="introduction">Introduction</h2>
      <p>
        GenAI produces code quickly. Some of it is fine to ship, and some of it is wrong in ways
        you won&apos;t notice until production. After working through a large amount of generated
        code on the National Grid project at IBM, these are the checks I use before I trust any
        of it.
      </p>
      <h2 id="the-stabilization-process">The Stabilization Process</h2>
      <h3>1. Does it fit the architecture?</h3>
      <p>
        Before reading line by line, look at the shape. Does it follow the patterns the rest of
        the codebase uses? Does it call services it shouldn&apos;t? Is state handled the way the
        team agreed? Fixing structure later costs far more than fixing it now.
      </p>
      <h3>2. Does it follow the real business rules?</h3>
      <p>
        The tool only knew what was in the prompt, and the prompt never covers everything.
        Check the logic against the actual requirements and the system you&apos;re replacing.
        Edge cases and validation are usually where it falls short.
      </p>
      <h3>3. What happens when things go wrong?</h3>
      <p>
        Generated code often skips input validation, error handling and security checks. Look
        at every API boundary, every external call and every place user data comes in.
      </p>
      <h3>4. What do the tests actually prove?</h3>
      <p>
        Generated tests tend to cover the happy path. Write your own for the edge cases and
        failures you found in the steps above.
      </p>
      <p>
        Have AI-generated code you&apos;re not sure about?{' '}
        <a href="/hire-me" className="text-sage-dark hover:underline">I can review it with you</a>.
      </p>
      <h2 id="key-takeaways">Key Takeaways</h2>
      <ul>
        <li>Review the structure before the details.</li>
        <li>Check the logic against requirements, not against the prompt.</li>
        <li>Expect missing validation, error handling and security checks.</li>
        <li>Hold generated code to the same standard as code a person wrote.</li>
      </ul>
      <h2 id="conclusion">Conclusion</h2>
      <p>
        GenAI is a fast way to get a draft. Whether that draft can ship depends on someone who
        knows the system reading it carefully.
      </p>
    </>
  ),
  'llm-integration-existing-react-app': (
    <>
      <h2 id="introduction">Introduction</h2>
      <p>
        You don&apos;t need to rebuild a React and Node.js app to add an LLM feature. Under the
        hood it is mostly ordinary backend and frontend work. These are the patterns I would use,
        and the ones I&apos;d push back on.
      </p>
      <h2 id="backend-integration-patterns">Backend Integration Patterns</h2>
      <h3>Keep the API call on the server</h3>
      <p>
        Never call the LLM provider straight from the browser. Put a small Node.js service in
        between that holds the API key, builds the prompt, applies rate limits and logs each
        request. It also gives you one place to switch providers later.
      </p>
      <h3>Stream the response</h3>
      <p>
        For anything that generates text, stream it. Waiting ten seconds for a full answer
        feels broken; seeing words appear doesn&apos;t. Node.js handles Server-Sent Events or
        WebSockets well, and React can render a stream without much extra code.
      </p>
      <h2 id="frontend-integration-patterns">Frontend Integration Patterns</h2>
      <h3>Add to what already works</h3>
      <p>
        Introduce the AI feature next to an existing workflow, not instead of it. If smarter
        search sits alongside the old keyword search, users still have something that works
        when the AI call is slow or fails.
      </p>
      <h3>Plan for slow and wrong</h3>
      <p>
        LLM responses are slow, sometimes fail and are sometimes wrong. Handle loading, error
        and retry states on purpose, never block the rest of the UI while waiting, and make it
        easy for users to tell when an answer came from the model.
      </p>
      <p>
        Want an LLM feature added to your app?{' '}
        <a href="/hire-me" className="text-sage-dark hover:underline">Tell me what you have in mind</a>.
      </p>
      <h2 id="key-takeaways">Key Takeaways</h2>
      <ul>
        <li>Route every LLM call through your own backend.</li>
        <li>Stream generated text from the start.</li>
        <li>Add AI beside existing features so there&apos;s always a fallback.</li>
        <li>Design for slow, failed and wrong responses.</li>
      </ul>
      <h2 id="conclusion">Conclusion</h2>
      <p>
        Adding an LLM to an app is now a normal engineering task. Start small, measure cost and
        quality, and treat it as one feature among many.
      </p>
    </>
  ),
  'micro-frontend-architecture-react': (
    <>
      <h2 id="introduction">Introduction</h2>
      <p>
        At IBM I worked on moving Abercrombie &amp; Fitch&apos;s storefront off a legacy Java
        frontend shared by three brands: Abercrombie &amp; Fitch, Hollister and Abercrombie Kids.
        The new frontend is a set of React micro frontends. I built the Product Catalog, Product
        Details and Wishlist pieces. This is what I took away from it.
      </p>
      <h2 id="the-architecture-decision">The Architecture Decision</h2>
      <h3>Why micro frontends</h3>
      <p>
        The main reason was team independence. With one shared frontend, every change touched
        everyone and releases had to be coordinated. With micro frontends, each part of the
        store can be built, tested and deployed on its own.
      </p>
      <h3>How the pieces fit</h3>
      <p>
        Each micro frontend owns one area of the store. They get data through a GraphQL
        Backend-for-Frontend (BFF), so the React code asks for exactly what a page needs
        instead of calling older services directly. Shared React components keep the three
        brands consistent without tying the micro frontends to each other.
      </p>
      <h2 id="what-worked">What Worked</h2>
      <p>
        Independent deployment worked as hoped. The BFF kept the frontends simpler, and the
        shared components saved a lot of repeated work across brands. Building accessibility,
        analytics, A/B tests, Jest unit tests and Playwright end-to-end tests into each micro
        frontend from the start meant they never became a separate project later. There&apos;s
        more in the{' '}
        <a href="/projects/abercrombie" className="text-sage-dark hover:underline">Abercrombie &amp; Fitch case study</a>.
      </p>
      <h2 id="what-did-not-work-initially">What Did Not Work (Initially)</h2>
      <p>
        Independence has a cost. Keeping React and shared library versions in step across
        separately deployed pieces takes deliberate effort, and anything one micro frontend
        needs from another is easy to wire up badly. My rule now is to share data through the
        API layer, not through the frontends.
      </p>
      <p>
        Planning a micro frontend migration?{' '}
        <a href="/hire-me" className="text-sage-dark hover:underline">Let&apos;s talk about it</a>.
      </p>
      <h2 id="key-takeaways">Key Takeaways</h2>
      <ul>
        <li>Do it for team independence, not because the architecture looks elegant.</li>
        <li>Agree on shared components early so brands and teams stay consistent.</li>
        <li>Share data through the API layer rather than between micro frontends.</li>
        <li>Plan dependency and version management from day one.</li>
      </ul>
      <h2 id="conclusion">Conclusion</h2>
      <p>
        Micro frontends fit this problem: several brands, several teams, and a frontend that
        made everyone wait for everyone else. They add coordination work of their own, so
        they&apos;re worth it only when that independence is what you actually need.
      </p>
    </>
  ),
};

type Props = {
  post: BlogPost;
  relatedPosts: BlogPost[];
};

export function BlogPostLayout({ post, relatedPosts }: Props) {
  const body = articleBodies[post.slug];
  const toc = tocItems[post.slug];

  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 xl:flex xl:gap-16">
        {/* Sticky ToC — desktop only */}
        {toc && toc.length > 0 && (
          <aside className="hidden xl:block xl:w-56 xl:shrink-0">
            <div className="sticky top-28">
              <div className="mb-3 text-[10px] uppercase tracking-widest text-subtle">
                Contents
              </div>
              <nav className="space-y-1">
                {toc.map((heading) => (
                  <a
                    key={heading}
                    href={`#${headingToId(heading)}`}
                    className="block text-xs leading-relaxed text-subtle no-underline transition hover:text-muted"
                  >
                    {heading}
                  </a>
                ))}
              </nav>
              <div className="mt-8 rounded-xl border border-border bg-surface p-5">
                <p className="mb-3 text-xs text-muted">
                  Hiring for a project or a role?
                </p>
                <a
                  href="/hire-me"
                  className="block rounded-lg bg-sage px-4 py-2.5 text-center text-xs font-semibold text-on-sage no-underline transition hover:opacity-90"
                >
                  Work with me →
                </a>
              </div>
            </div>
          </aside>
        )}

        <article className="min-w-0 flex-1 max-w-[740px]">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-sage-light px-3 py-1 text-xs text-sage-dark">
                {post.category}
              </span>
              <span className="text-xs text-subtle">{post.readTime}</span>
            </div>
            <h1 className="mb-4 text-3xl leading-tight text-ink md:text-4xl">
              {post.title}
            </h1>
            <div className="mb-6 text-sm text-subtle">
              Published {formatDate(post.date)}
              {post.updated && post.updated !== post.date && <> · Updated {formatDate(post.updated)}</>}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface px-5 py-4">
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-sans text-sm font-semibold text-ink">{identity.name}</div>
                  <div className="text-xs text-muted">{identity.title}</div>
                </div>
                <a
                  href={identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sage-dark no-underline hover:underline"
                >
                  LinkedIn ↗
                </a>
              </div>
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </div>

          {/* Mobile ToC */}
          {toc && toc.length > 0 && (
            <details className="mb-8 xl:hidden">
              <summary className="cursor-pointer list-none rounded-xl border border-border bg-surface px-5 py-3 text-xs text-sage-dark">
                Table of contents ▾
              </summary>
              <nav className="mt-3 space-y-2 rounded-xl border border-border bg-surface px-5 py-4">
                {toc.map((heading) => (
                  <a
                    key={heading}
                    href={`#${headingToId(heading)}`}
                    className="block text-xs text-muted no-underline hover:text-sage-dark"
                  >
                    {heading}
                  </a>
                ))}
              </nav>
            </details>
          )}

          {/* Tags */}
          <div className="mb-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>

          {/* Body */}
          <div
            className={[
              'prose-neural',
              '[&>h2]:mb-4 [&>h2]:mt-10 [&>h2]:font-serif [&>h2]:text-[1.85rem] [&>h2]:font-medium [&>h2]:text-ink',
              '[&>h3]:mb-3 [&>h3]:mt-6 [&>h3]:font-serif [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-sage-dark',
              '[&>p]:mb-5 [&>p]:text-[1.05rem] [&>p]:leading-[1.8] [&>p]:text-muted',
              '[&>ul]:mb-5 [&>ul]:space-y-2 [&>ul]:pl-0',
              '[&>ul>li]:relative [&>ul>li]:pl-5 [&>ul>li]:text-[0.95rem] [&>ul>li]:leading-relaxed [&>ul>li]:text-muted',
              '[&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:text-sage-dark [&>ul>li::before]:content-["▸"]',
            ].join(' ')}
          >
            {body ?? (
              <p className="text-muted">
                Full article coming soon. Subscribe or follow on LinkedIn for updates.
              </p>
            )}
          </div>

          {/* End CTA */}
          <div className="mt-16 rounded-xl border border-border bg-surface p-8 text-center">
            <p className="mb-4 font-serif text-2xl text-ink">
              Working on something similar?
            </p>
            <p className="mb-6 text-sm text-muted">
              Tell me about your project or role. I reply within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/hire-me"
                className="btn-primary"
              >
                Get in touch →
              </a>
              <Link
                href="/projects"
                className="btn-secondary"
              >
                View case studies →
              </Link>
            </div>
          </div>

          {/* Share footer */}
          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <Link href="/blog" className="text-xs text-subtle no-underline hover:text-muted">
              ← All articles
            </Link>
            <ShareButtons title={post.title} slug={post.slug} />
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-xl text-ink">Related articles</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {relatedPosts.map((rp) => (
                  <a
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group rounded-xl border border-border bg-surface p-6 no-underline transition hover:border-border-strong"
                  >
                    <div className="mb-2 text-[10px] text-sage-dark">{rp.category}</div>
                    <div className="font-sans text-sm font-semibold leading-snug text-ink transition group-hover:text-sage-dark">
                      {rp.title}
                    </div>
                    <div className="mt-2 text-[10px] text-subtle">{rp.readTime}</div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
