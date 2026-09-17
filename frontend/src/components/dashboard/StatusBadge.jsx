function StatusBadge({
  icon: Icon,
  title,
  color = "text-orange-400",
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 transition-all duration-200 hover:border-[var(--primary-border)] hover:bg-[var(--surface-hover)]">
      <Icon className={color} size={20} />

      <span className="text-sm font-medium text-[var(--foreground)]">
        {title}
      </span>
    </div>
  );
}

export default StatusBadge;