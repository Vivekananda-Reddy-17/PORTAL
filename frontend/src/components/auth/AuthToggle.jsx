import { UserRound, UserPlus } from "lucide-react";

function AuthToggle({ mode, onChange }) {
  return (
    <div className="mb-8 flex rounded-2xl border border-[var(--border)] bg-[var(--card)] p-1">

      <button
        type="button"
        onClick={() => onChange("login")}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
          mode === "login"
            ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
      >
        <UserRound size={18} />
        Sign In
      </button>

      <button
        type="button"
        onClick={() => onChange("register")}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
          mode === "register"
            ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
      >
        <UserPlus size={18} />
        Sign Up
      </button>

    </div>
  );
}

export default AuthToggle;