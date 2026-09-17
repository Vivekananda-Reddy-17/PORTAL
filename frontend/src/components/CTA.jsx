import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function CTA() {
  return (
    <section className="bg-[var(--background)] py-32">

      <div className="mx-auto max-w-7xl px-8">

        <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-12 lg:p-20">

          {/* Warm ambient light */}

          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[var(--primary-soft)] blur-[120px]" />

          <div className="relative mx-auto max-w-3xl text-center">

            <span className="rounded-full border border-[var(--primary-border)] bg-[var(--primary-soft)] px-5 py-2 text-sm font-medium tracking-wide text-[var(--primary)]">
              START TODAY
            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-[var(--foreground)] md:text-6xl">
              Build Better
              <br />
              Conversations.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Experience messaging, video calls and collaboration in one
              modern platform designed to keep people connected.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <button className="group flex items-center gap-3 rounded-xl bg-[var(--primary)] px-8 py-4 font-semibold text-[var(--primary-foreground)] transition duration-200 hover:-translate-y-1 hover:bg-[var(--primary-hover)]">

                Launch PORTAL

                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>

              <button className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-8 py-4 text-[var(--foreground)] transition duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)]">

                <FaGithub size={20} />

                View Source

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;