import {
  MessageSquare,
  Video,
  ShieldCheck,
  Cpu,
  Database,
  Globe,
} from "lucide-react";

import CapabilityCard from "./CapabilityCard";

const capabilities = [
  {
    icon: MessageSquare,
    title: "Real-Time Messaging",
    description:
      "Instant messaging powered by Socket.IO with typing indicators and online presence.",
  },
  {
    icon: Video,
    title: "Video Communication",
    description:
      "Peer-to-peer HD video and audio calling using WebRTC.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "JWT authentication, protected routes, and role-based authorization.",
  },
  {
    icon: Database,
    title: "Scalable Backend",
    description:
      "RESTful APIs with Express.js and MongoDB designed for growth.",
  },
  {
    icon: Cpu,
    title: "Modern Architecture",
    description:
      "Built using reusable React components and modular backend services.",
  },
  {
    icon: Globe,
    title: "Responsive Experience",
    description:
      "Optimized for desktop, tablet, and mobile devices.",
  },
];

function Capabilities() {
  return (
    <section className="relative bg-[var(--background)] py-32">

      <div className="mx-auto max-w-[1700px] px-8 lg:px-16">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-[var(--primary-border)] bg-[var(--primary-soft)] px-4 py-2 text-sm text-[var(--primary)]">
            CORE CAPABILITIES
          </span>

          <h2 className="mt-6 text-4xl font-black text-[var(--foreground)] md:text-5xl">
            Engineered for Modern Communication
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            PORTAL combines real-time communication, scalable backend
            architecture, and modern frontend technologies into one
            full-stack application.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {capabilities.map((capability) => (
            <CapabilityCard
              key={capability.title}
              {...capability}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Capabilities;