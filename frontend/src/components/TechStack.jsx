import {
  Atom,
  Database,
  Server,
  Globe,
} from "lucide-react";

const techStack = [
  {
    icon: Atom,
    title: "React",
    description: "Modern component-based frontend built with Vite.",
  },
  {
    icon: Server,
    title: "Node & Express",
    description: "Fast REST APIs and scalable backend architecture.",
  },
  {
    icon: Database,
    title: "MongoDB",
    description: "Flexible NoSQL database for real-time applications.",
  },
  {
    icon: Globe,
    title: "Socket.IO",
    description: "Real-time messaging with low-latency communication.",
  },
];

function TechStack() {
  return (
    <section className="bg-[var(--background)] py-32">
      <div className="mx-auto max-w-[1700px] px-8 lg:px-16">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-[var(--primary-border)] bg-[var(--primary-soft)] px-5 py-2 text-sm font-medium tracking-wide text-[var(--primary)]">
            TECHNOLOGY
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[var(--foreground)] md:text-5xl">
            Built With Modern Technologies
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            A carefully selected stack that delivers fast performance,
            scalability, and a seamless real-time communication experience.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">

          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.title}
                className="group card-hover-shadow rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary-border)] hover:bg-[var(--surface-hover)]"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--primary-border)] bg-[var(--primary-soft)]">

                  <Icon
                    className="text-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
                    size={30}
                  />

                </div>

                <h3 className="mb-3 text-2xl font-bold tracking-tight text-[var(--foreground)]">
                  {tech.title}
                </h3>

                <p className="leading-7 text-[var(--muted)]">
                  {tech.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default TechStack;