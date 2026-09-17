import { useState, forwardRef } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const PasswordInput = forwardRef(function PasswordInput(
  {
    label = "Password",
    value,
    onChange,
    error,
    placeholder = "Enter your password",
    required = false,
    autoComplete = "current-password",
    ...props
  },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-5">

      <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
        {label}
        {required && (
          <span className="ml-1 text-[var(--danger)]">*</span>
        )}
      </label>

      <div
        className={`flex items-center rounded-xl border bg-[var(--card)] px-4 transition-all duration-200 ${
          error
            ? "border-[var(--danger)]"
            : "border-[var(--border)] focus-within:border-[var(--primary)]"
        }`}
      >
        <Lock
          size={18}
          className="mr-3 text-[var(--muted)]"
        />

        <input
          ref={ref}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full bg-transparent py-3.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
          {...props}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="ml-3 text-[var(--muted)] transition hover:text-[var(--primary)]"
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-[var(--danger)]">
          {error}
        </p>
      )}

    </div>
  );
});

export default PasswordInput;