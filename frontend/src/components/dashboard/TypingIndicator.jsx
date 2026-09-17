function TypingIndicator({ user }) {
  return (
    <div className="flex items-center gap-3 px-2">
      <div className="flex gap-1">
        <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--primary)]" />

        <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--primary)] [animation-delay:150ms]" />

        <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--primary)] [animation-delay:300ms]" />
      </div>

      <p className="text-sm text-[var(--muted)]">
        {user} is typing...
      </p>
    </div>
  );
}

export default TypingIndicator;