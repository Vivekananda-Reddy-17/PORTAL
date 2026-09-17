import { forwardRef } from "react";

const AuthInput = forwardRef(function AuthInput(
  {
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    icon: Icon,
    error,
    required = false,
    autoComplete,
    ...props
  },
  ref
) {
  return (
    <div className="mb-5">

      <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
        {label}
        {required && (
          <span className="ml-1 text-[var(--danger)]">*</span>
        )}
      </label>

      <div
        className={`flex items-center gap-3 rounded-xl border bg-[var(--card)] px-4 transition-all duration-200
        ${
          error
            ? "border-[var(--danger)]"
            : "border-[var(--border)] focus-within:border-[var(--primary)]"
        }`}
      >

        {Icon && (
          <Icon
            size={18}
            className="text-[var(--muted)]"
          />
        )}

        <input
          ref={ref}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autoComplete}
          className="w-full bg-transparent py-3.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
          {...props}
        />

      </div>

      {error && (
        <p className="mt-2 text-sm text-[var(--danger)]">
          {error}
        </p>
      )}

    </div>
  );
});

export default AuthInput;