import { useContext, useState } from "react";
import { User, UserRound, CheckCircle2, X } from "lucide-react";

import AuthToggle from "./AuthToggle";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";

import AuthContext from "../../context/AuthContext";

function AuthForm() {
  const { handleLogin, handleRegister } = useContext(AuthContext);

  const [mode, setMode] = useState("login");

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setError("");
    setSuccess("");

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (mode === "register") {
        await handleRegister(
          formData.fullName,
          formData.username,
          formData.password,
        );

        // Show success popup
        setSuccess("Account created successfully! Please log in.");

        // Switch to login
        setMode("login");

        // Keep username, clear everything else
        setFormData({
          fullName: "",
          username: formData.username,
          password: "",
        });

        // Automatically hide popup after 3 seconds
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      } else {
        await handleLogin(
          formData.username,
          formData.password,
        );
        setFormData({
          fullName: "",
          username: "",
          password: "",
        });
        console.log("User logged in succesfully!");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Success Popup */}
      {success && (
        <div className="fixed right-6 top-6 z-50 flex w-[360px] items-start gap-3 rounded-2xl border border-green-500/30 bg-[var(--surface)] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />

          <div className="flex-1">
            <p className="font-semibold text-[var(--foreground)]">
              Success
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">
              {success}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSuccess("")}
            className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
        <h2 className="mb-2 text-3xl font-bold text-[var(--foreground)]">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h2>

        <p className="mb-8 text-[var(--muted)]">
          {mode === "login"
            ? "Sign in to continue."
            : "Join PORTAL today."}
        </p>

        <AuthToggle
          mode={mode}
          onChange={(newMode) => {
            setMode(newMode);
            setError("");
            setSuccess("");
          }}
        />

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <AuthInput
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              icon={UserRound}
              placeholder="John Doe"
              required
            />
          )}

          <AuthInput
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            icon={User}
            placeholder="Enter username"
            required
          />

          <PasswordInput
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {error && (
            <div className="mb-5 rounded-xl border border-[var(--danger)] bg-red-500/10 px-4 py-3 text-sm text-[var(--danger)]">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-xl bg-[var(--primary)] py-3.5 font-semibold text-[var(--primary-foreground)] transition-all duration-200 hover:bg-[var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Please wait..."
              : mode === "login"
                ? "Sign In"
                : "Create Account"}
          </button>
        </form>
      </div>
    </>
  );
}

export default AuthForm;