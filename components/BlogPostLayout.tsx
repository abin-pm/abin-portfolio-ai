import Link from 'next/link';
import type { BlogPost } from '@/lib/data';
import { identity } from '@/lib/data';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const articleBodies: Record<string, React.ReactNode> = {
  'how-to-hire-react-developer-india': (
    <>
      <h2>Introduction</h2>
      <p>
        Hiring a senior React developer from India sounds straightforward until you&apos;ve done it
        wrong twice. The talent pool is enormous, the rates look attractive, and many profiles
        claim 5–8 years of React experience. But the quality gap between candidates is just as
        large. Here are the mistakes companies make — and how to avoid them.
      </p>
      <h2>The 3 Most Common Hiring Mistakes</h2>
      <h3>1. Optimizing for hourly rate, not value per hour</h3>
      <p>
        A developer at $25/hour who takes three weeks to deliver a feature that a $50/hour
        developer ships in four days is not a bargain. Add the back-and-forth review cycles,
        QA fixes, and rework cost, and the cheaper option ends up costing more. Look for
        senior engineers who have delivered production systems at scale — not just built
        side projects.
      </p>
      <h3>2. Skipping the architecture conversation</h3>
      <p>
        Most hiring processes test syntax and algorithms but skip the only question that matters
        for senior roles: &ldquo;How would you architect this feature given these constraints?&rdquo;
        A senior React developer should be able to talk about micro-frontend trade-offs, state
        management strategies, API design, and performance budgets — not just write a hook
        from memory.
      </p>
      <h3>3. Ignoring client communication track record</h3>
      <p>
        Technical skill alone does not ship products. Ask for evidence of async collaboration
        with US or UK stakeholders, Agile/Scrum participation, and written communication quality.
        Working across time zones requires over-communication by default — not silence until
        the PR is ready.
      </p>
      <h2>What to Actually Look For</h2>
      <p>
        The best senior React developers from India combine deep React and Node.js experience
        with cloud exposure (AWS or GCP), microservices familiarity, and increasingly — genuine
        AI tooling fluency. The combination of enterprise track record, AI-native workflow,
        and timezone flexibility is rare and worth paying for.
      </p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>Evaluate value per hour, not hourly rate in isolation.</li>
        <li>Test architecture thinking, not just coding ability.</li>
        <li>Verify async communication and real client collaboration history.</li>
        <li>Prefer engineers with AI tooling experience — it multiplies delivery speed.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        India produces world-class React developers who have built production systems for Fortune
        500 companies. The key is knowing how to find them. Focus on verified enterprise
        experience, architecture reasoning, and communication quality — and you&apos;ll find an
        engineer who delivers at the same standard as anyone in the US or UK.
      </p>
    </>
  ),
  'ai-native-workflow-cursor-copilot-claude': (
    <>
      <h2>Introduction</h2>
      <p>
        The term &ldquo;AI-assisted development&rdquo; gets thrown around a lot in 2024–2025.
        What it actually looks like in enterprise production is rarely described in detail.
        This is a first-person account of using Cursor AI, GitHub Copilot, and Claude daily
        at IBM while working on production React and Node.js systems for a Fortune 500 client
        in the US.
      </p>
      <h2>How Each Tool Fits into the Workflow</h2>
      <h3>Cursor AI — Primary IDE</h3>
      <p>
        Cursor replaced VS Code as my primary development environment in September 2024.
        The main advantage is not autocomplete — it is the ability to ask architectural
        questions directly in context. &ldquo;What is the best way to refactor this service to
        use a repository pattern?&rdquo; or &ldquo;Identify the bug in this async flow&rdquo; with
        the actual code selected. The answers are immediately actionable because Cursor has
        the full file and project context.
      </p>
      <h3>GitHub Copilot — Inline Completion</h3>
      <p>
        Copilot handles the mechanical parts: boilerplate, test scaffolding, repetitive
        API call patterns. Where it shines is completing well-typed TypeScript — when the
        types are tight, Copilot&apos;s suggestions are accurate enough to accept with minimal
        review. Where it fails: anything that requires understanding across multiple files
        or business domain knowledge.
      </p>
      <h3>Claude — Architecture and Review</h3>
      <p>
        Claude is my second set of eyes on anything complex. Before submitting a PR that
        touches shared infrastructure, I run the diff through Claude with the question:
        &ldquo;What are the edge cases and failure modes in this change?&rdquo; It catches things
        that unit tests miss — race conditions, implicit coupling, missing error boundaries.
      </p>
      <h2>What AI Tools Cannot Do</h2>
      <p>
        They cannot replace senior engineering judgment. Every AI suggestion requires
        evaluation against business requirements, architectural constraints, and production
        reliability standards. The skill is not prompting — it is knowing when to accept,
        reject, or refactor what the tool generates.
      </p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>Cursor AI is most powerful for in-context architectural reasoning.</li>
        <li>Copilot excels at typed boilerplate — not cross-file logic.</li>
        <li>Claude is a senior reviewer for complex changes.</li>
        <li>AI tools multiply output; senior judgment determines quality.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        An AI-native developer is not someone who lets AI write their code. It is someone
        who uses AI as a force multiplier while applying the same enterprise-grade engineering
        judgment that ensures the output meets production standards.
      </p>
    </>
  ),
  'sas-to-react-national-grid-modernization': (
    <>
      <h2>Introduction</h2>
      <p>
        The National Grid MDS Consolidation EPO Tracking Application was built on SAS — a
        legacy desktop system that had served its purpose but no longer met the scalability,
        accessibility, or user experience requirements of a modern enterprise. The project
        goal was to migrate it to a React.js + .NET Core web platform. What made this
        different from a typical modernization was the use of GenAI-assisted code generation
        as the initial development baseline.
      </p>
      <h2>The Migration Approach</h2>
      <h3>Phase 1 — GenAI baseline generation</h3>
      <p>
        Using AI-assisted code generation tools, an initial codebase was scaffolded from
        the SAS system specifications and business logic documentation. This accelerated
        the starting point significantly compared to writing from scratch. The generated
        code covered the primary data models, API contracts, and frontend component
        structures.
      </p>
      <h3>Phase 2 — Stabilization and hardening</h3>
      <p>
        This is where the real work happens — and where most AI-generated code fails in
        enterprise contexts. The generated baseline contained architectural misalignments,
        performance anti-patterns, incomplete error handling, and business logic
        discrepancies. Each module was reviewed, corrected, and refactored to meet
        enterprise coding standards and production reliability thresholds.
      </p>
      <h3>Phase 3 — Integration and deployment</h3>
      <p>
        The React.js frontend was integrated with the .NET Core API backend and deployed
        to Azure. Cross-functional collaboration with US-based National Grid stakeholders
        ensured the final product met user needs and performance standards.
      </p>
      <h2>Results</h2>
      <p>
        The platform replaced the legacy SAS system with a modern, accessible web
        application that improved user experience, scalability, and maintainability.
        The AI-assisted approach reduced initial development time while the stabilization
        process ensured the output was production-ready.
      </p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>GenAI can dramatically accelerate initial scaffolding.</li>
        <li>Stabilization requires senior engineering judgment — it is not optional.</li>
        <li>The combination of AI speed + senior review = faster AND reliable delivery.</li>
        <li>Legacy modernization is an ideal use case for AI-assisted development.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        The National Grid project demonstrated that GenAI-assisted development is not
        about replacing engineers — it is about using AI to handle the scaffolding while
        senior engineers focus on the judgment-intensive work: architecture, edge cases,
        integration, and production reliability.
      </p>
    </>
  ),
  'genai-code-stabilization-enterprise': (
    <>
      <h2>Introduction</h2>
      <p>
        GenAI writes code faster than any human. That is not in question. The question
        is: fast toward what? Production-ready code has requirements that go beyond
        &ldquo;compiles and passes the happy path tests.&rdquo; Understanding when GenAI output
        is safe to ship — and what needs to happen before it is — is one of the most
        valuable skills in enterprise software right now.
      </p>
      <h2>The Stabilization Process</h2>
      <h3>Step 1 — Architecture review</h3>
      <p>
        Before touching individual lines, evaluate whether the AI-generated structure
        matches your system&apos;s architecture. Does it follow the same patterns as the
        surrounding codebase? Does it respect service boundaries? Is state managed
        consistently? Architecture mismatches at this stage compound into maintenance
        problems later.
      </p>
      <h3>Step 2 — Business logic verification</h3>
      <p>
        AI tools generate code against specifications — and specifications are often
        incomplete. Walk through the business logic against the actual requirements,
        not just the prompt you gave the AI. Edge cases, error states, and data
        validation often need to be added manually.
      </p>
      <h3>Step 3 — Security and error handling</h3>
      <p>
        AI-generated code frequently omits input validation, error boundaries, and
        security controls. In an enterprise context, this is not optional. Review
        every API boundary, every data transformation, every external call.
      </p>
      <h3>Step 4 — Testing</h3>
      <p>
        Write tests that the AI did not generate — specifically for the edge cases and
        failure modes identified in the previous steps. AI-generated tests tend to test
        the happy path only.
      </p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>GenAI code always needs architecture and business logic review before production.</li>
        <li>Security and error handling are consistently undergenerated.</li>
        <li>The goal of stabilization is matching the quality of hand-written enterprise code.</li>
        <li>This process is a skill — it takes senior engineering experience to do well.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        GenAI is a powerful tool. Stabilization is the process that makes it safe for
        production. The engineers who can do both — use AI for velocity and apply senior
        judgment for reliability — are the ones who deliver the most value in 2025 and beyond.
      </p>
    </>
  ),
  'llm-integration-existing-react-app': (
    <>
      <h2>Introduction</h2>
      <p>
        Adding LLM capabilities to an existing React + Node.js application does not require
        a ground-up rewrite. Most production applications can add AI features incrementally,
        starting with low-risk surfaces and expanding from there. This guide covers the
        integration patterns that work in practice — not the ones that look clean in demos.
      </p>
      <h2>Backend Integration Patterns</h2>
      <h3>API abstraction layer</h3>
      <p>
        Never call the LLM API directly from your frontend. Create a Node.js service layer
        that handles authentication, rate limiting, prompt construction, and response
        transformation. This keeps your API keys secure, gives you a single place to switch
        providers, and lets you log and monitor AI interactions independently.
      </p>
      <h3>Streaming responses</h3>
      <p>
        For chat and generation features, use streaming from the start. Users expect instant
        feedback — a 10-second wait for a full response before anything appears feels broken.
        Node.js handles SSE (Server-Sent Events) or WebSocket streaming cleanly, and the
        React frontend can consume streams with minimal added complexity.
      </p>
      <h2>Frontend Integration Patterns</h2>
      <h3>Progressive enhancement</h3>
      <p>
        Add AI features as enhancements to existing workflows, not replacements. A search
        box that gains semantic understanding alongside its existing keyword search is much
        safer to ship than a wholesale replacement. This also gives you a fallback when the
        AI call fails or times out.
      </p>
      <h3>State and UX</h3>
      <p>
        AI responses are async, slow, and sometimes wrong. Design your state management to
        handle loading, error, and retry states explicitly. Do not block the UI waiting for
        AI — use optimistic updates and graceful degradation.
      </p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>Always proxy LLM calls through a backend service — never call directly from the client.</li>
        <li>Implement streaming from the start for any generation feature.</li>
        <li>Use progressive enhancement to reduce risk and maintain fallbacks.</li>
        <li>Design for async, failure, and retry states explicitly in your React components.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        LLM integration is a standard engineering problem now. The tools are mature, the
        patterns are established, and the risk is manageable with the right architecture.
        The teams that get the most value are the ones who integrate incrementally, instrument
        everything, and treat AI as one capability among many — not a magic solution.
      </p>
    </>
  ),
  'micro-frontend-architecture-react': (
    <>
      <h2>Introduction</h2>
      <p>
        Abercrombie & Fitch&apos;s frontend was a legacy Java-based monolith. Multiple teams needed
        to deploy independently, the release process was fragile, and the UI was inconsistent
        across different parts of the platform. The decision was made to migrate to React
        Micro-Frontends — and here is what we learned from doing it in production for one of
        the world&apos;s largest fashion retailers.
      </p>
      <h2>The Architecture Decision</h2>
      <h3>Why Micro-Frontends?</h3>
      <p>
        The primary driver was team independence. With multiple squads working on overlapping
        UI surfaces, a monolithic frontend meant constant merge conflicts and release
        coordination overhead. Micro-Frontends let each team own their domain completely —
        from component to deployment.
      </p>
      <h3>Technology choices</h3>
      <p>
        We used Module Federation (Webpack 5) to wire the host shell to remote applications.
        Each remote owned its routing, state, and dependencies. PrimeReact was standardized
        as the component library across remotes to ensure visual consistency without tight
        coupling.
      </p>
      <h2>What Worked</h2>
      <p>
        Parallel deployments. Once the contract between host and remotes was established,
        each team could ship independently without coordination meetings or release windows.
        The Global Configuration Hub migration to PrimeReact gave us a single source of
        truth for shared UI patterns.
      </p>
      <h2>What Did Not Work (Initially)</h2>
      <p>
        Shared state across remotes is harder than it looks. The initial approach of using
        a shared event bus created invisible coupling. The solution was to push shared state
        to the API layer and treat remotes as truly independent consumers.
      </p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>Team independence is the primary business driver — not technical elegance.</li>
        <li>Standardize component libraries early to avoid visual fragmentation.</li>
        <li>Avoid shared state across remotes — use the API as the source of truth.</li>
        <li>Module Federation works in production; plan for version management from day one.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        Micro-Frontend architecture solved the right problem for Abercrombie & Fitch: team
        autonomy and independent deployments at scale. The migration was complex but the
        outcome — parallel releases without coordination friction — was exactly what the
        business needed.
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

  return (
    <div className="min-h-screen bg-[#080810]">
      <article className="mx-auto max-w-[740px] px-6 py-20 md:px-10">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[rgba(99,102,241,0.1)] px-3 py-1 font-mono text-xs text-[#6366f1]">
              {post.category}
            </span>
            <span className="font-mono text-xs text-[#475569]">{post.readTime}</span>
          </div>
          <h1 className="mb-4 font-sans text-3xl font-bold leading-tight tracking-tight text-[#f1f5f9] md:text-4xl">
            {post.title}
          </h1>
          <div className="mb-6 font-mono text-sm text-[#475569]">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] px-5 py-4">
            <div>
              <div className="font-sans text-sm font-semibold text-[#f1f5f9]">{identity.name}</div>
              <div className="font-mono text-xs text-[#94a3b8]">{identity.title}</div>
            </div>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto font-mono text-xs text-[#6366f1] no-underline hover:underline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

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
            '[&>h2]:mb-4 [&>h2]:mt-10 [&>h2]:font-sans [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#f1f5f9]',
            '[&>h3]:mb-3 [&>h3]:mt-6 [&>h3]:font-sans [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-[#a78bfa]',
            '[&>p]:mb-5 [&>p]:text-[1.05rem] [&>p]:leading-[1.8] [&>p]:text-[#94a3b8]',
            '[&>ul]:mb-5 [&>ul]:space-y-2 [&>ul]:pl-0',
            '[&>ul>li]:relative [&>ul>li]:pl-5 [&>ul>li]:text-[0.95rem] [&>ul>li]:leading-relaxed [&>ul>li]:text-[#94a3b8]',
            '[&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:text-[#6366f1] [&>ul>li::before]:content-["▸"]',
          ].join(' ')}
        >
          {body ?? (
            <p className="text-[#94a3b8]">
              Full article coming soon. Subscribe or follow on LinkedIn for updates.
            </p>
          )}
        </div>

        {/* End CTA */}
        <div className="mt-16 rounded-xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.04)] p-8 text-center">
          <p className="mb-4 font-sans text-lg font-semibold text-[#f1f5f9]">
            Working on something similar?
          </p>
          <p className="mb-6 text-sm text-[#94a3b8]">
            Let&apos;s talk about your project — React, Node.js, cloud architecture, or AI integration.
          </p>
          <a
            href="/hire-me"
            className="inline-flex rounded-xl bg-[#6366f1] px-7 py-3.5 font-sans font-semibold text-white no-underline transition hover:opacity-90"
          >
            Let&apos;s talk →
          </a>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-sans text-xl font-bold text-[#f1f5f9]">Related articles</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedPosts.map((rp) => (
                <a
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] p-6 no-underline transition hover:border-[rgba(99,102,241,0.35)]"
                >
                  <div className="mb-2 font-mono text-[10px] text-[#6366f1]">{rp.category}</div>
                  <div className="font-sans text-sm font-semibold leading-snug text-[#f1f5f9] transition group-hover:text-[#6366f1]">
                    {rp.title}
                  </div>
                  <div className="mt-2 font-mono text-[10px] text-[#475569]">{rp.readTime}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
