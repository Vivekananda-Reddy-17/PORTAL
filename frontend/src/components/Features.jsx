import {
  MessageSquare,
  Video,
  Users,
  ShieldCheck,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: MessageSquare,
    title: "Real-Time Chat",
    description:
      "Send and receive messages instantly with a fast, reliable chat experience.",
  },
  {
    icon: Video,
    title: "HD Video Calls",
    description:
      "Connect face-to-face with crystal-clear video meetings and screen sharing.",
  },
  {
    icon: Users,
    title: "Communities",
    description:
      "Create groups, collaborate with teams, and stay connected effortlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Built with modern security practices to keep your conversations private.",
  },
];

function Features() {
  return (
    <section className="relative bg-[var(--background)] py-32">
      <div className="mx-auto max-w-[1700px] px-8 lg:px-16">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-[var(--primary-border)] bg-[var(--primary-soft)] px-5 py-2 text-sm font-medium tracking-wide text-[var(--primary)]">
            FEATURES
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[var(--foreground)] md:text-5xl">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Powerful communication tools designed to help you connect,
            collaborate, and stay productive.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;