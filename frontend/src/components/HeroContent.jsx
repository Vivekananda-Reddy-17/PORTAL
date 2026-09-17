import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <div className="flex flex-col justify-center">
      {/* Tag */}

      <div className="mb-6 w-fit rounded-full border border-[var(--primary-border)] bg-[var(--primary-soft)] px-4 py-2 text-sm font-medium text-[var(--primary)]">
        Built for Conversations
      </div>

      {/* Heading */}

      <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-[var(--foreground)] md:text-6xl xl:text-7xl">
        Every Conversation
        <br />
        Starts Somewhere.
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">
        PORTAL brings messaging, communities and collaboration together in one
        modern platform designed for people, not just technology.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">
        <button className="group flex items-center gap-3 rounded-xl bg-[var(--primary)] px-7 py-3.5 font-semibold text-[var(--primary-foreground)] transition-all duration-200 hover:-translate-y-1 hover:bg-[var(--primary-hover)]">
          <Link to={"/auth"}>Get Started</Link>
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>

        <button className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-7 py-3.5 font-medium text-[var(--foreground)] transition-all duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)]">
          <PlayCircle size={18} />
          Watch Demo
        </button>
      </div>

      {/* Highlights */}

      <div className="mt-14 flex flex-wrap gap-8">
        <div>
          <h3 className="text-2xl font-bold text-[var(--primary)]">Chat</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Real-time messaging
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-400">Calls</h3>
          <p className="mt-1 text-sm text-neutral-500">HD video meetings</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-400">Communities</h3>
          <p className="mt-1 text-sm text-neutral-500">Connect together</p>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
