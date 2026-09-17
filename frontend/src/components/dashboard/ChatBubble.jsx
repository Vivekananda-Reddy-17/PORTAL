function ChatBubble({ sender, message, time, isOwn = false }) {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 transition-all duration-200 hover:-translate-y-0.5
        ${
          isOwn
            ? "primary-shadow bg-[var(--primary)] text-[var(--primary-foreground)]"
            : "border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
        }`}
      >
        <div className="mb-2 flex items-center justify-between gap-6">
          <span
            className={`text-xs font-semibold ${
              isOwn
                ? "text-[var(--primary-foreground)]"
                : "text-[var(--primary)]"
            }`}
          >
            {sender}
          </span>

          <span
            className={`text-[10px] ${
              isOwn ? "opacity-70" : "text-[var(--muted)]"
            }`}
          >
            {time}
          </span>
        </div>

        <p
          className={`text-sm leading-6 ${
            isOwn
              ? "text-[var(--primary-foreground)]"
              : "text-[var(--foreground)]"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default ChatBubble;
