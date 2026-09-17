import AuthForm from "../components/auth/AuthForm";
import AuthHero from "../components/auth/AuthHero";

function AuthPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-orange-500/8 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[200px]" />

      </div>

      {/* Content */}

      <div className="relative mx-auto flex min-h-screen max-w-[1700px] items-center px-6 py-10 lg:px-16">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Side */}

          <div className="hidden lg:block">
            <AuthHero />
          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-full max-w-md lg:ml-auto">

              {/* Mobile Logo */}

              <div className="mb-10 text-center lg:hidden">

                <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
                  PORTAL
                </h1>

                <p className="mt-2 text-[var(--muted)]">
                  Connect Beyond Limits
                </p>

              </div>

              <AuthForm />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default AuthPage;