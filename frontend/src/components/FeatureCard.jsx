function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group card-hover-shadow rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary-border)] hover:bg-[var(--surface-hover)]">

      {/* Icon */}

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--primary-border)] bg-[var(--primary-soft)] transition-all duration-300 group-hover:scale-105">

        <Icon
          size={30}
          className="text-[var(--primary)]"
        />

      </div>

      {/* Title */}

      <h3 className="mb-3 text-2xl font-bold tracking-tight text-[var(--foreground)]">
        {title}
      </h3>

      {/* Description */}

      <p className="leading-7 text-[var(--muted)]">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;