
import {
  MessageCircle,
  ShieldCheck,
  Video,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Real-Time Chat",
    description: "Instant messaging with seamless delivery.",
  },
  {
    icon: Video,
    title: "HD Calls",
    description: "Crystal-clear voice and video meetings.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    description: "Private conversations protected by encryption.",
  },
];

function AuthHero() {
  return (
    <div className="max-w-xl">

      {/* Badge */}

      <span className="inline-flex rounded-full border border-[var(--primary-border)] bg-[var(--primary-soft)] px-4 py-2 text-sm font-medium text-[var(--primary)]">
        Welcome to PORTAL
      </span>

      {/* Heading */}

      <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--foreground)] xl:text-5xl">
        Connect with
        <br />
        confidence.
      </h1>

      {/* Description */}

      <p className="mt-5 max-w-lg text-base leading-7 text-[var(--muted)]">
        Chat, collaborate, and communicate effortlessly through one
        modern platform designed for everyone.
      </p>

      {/* Features */}

      <div className="mt-10 space-y-4">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-300 hover:border-[var(--primary-border)] hover:bg-[var(--surface-hover)] card-hover-shadow"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--primary-border)] bg-[var(--primary-soft)]">

                <Icon
                  size={20}
                  className="text-[var(--primary)]"
                />

              </div>

              <div>

                <h3 className="font-semibold text-[var(--foreground)]">
                  {feature.title}
                </h3>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  {feature.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default AuthHero;

