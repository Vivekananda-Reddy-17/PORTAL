import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Video,
  History,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Navbar from "../Components/Navbar";
import AuthContext from "../context/AuthContext";

function Home() {
  const navigate = useNavigate();

  const { userData } = useContext(AuthContext);

  const [meetingCode, setMeetingCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleJoinVideoCall = async (e) => {
    e.preventDefault();

    const code = meetingCode.trim();

    if (!code) {
      return;
    }

    try {
      setLoading(true);

      navigate(`/${code}`);
    } catch (err) {
      console.error("Unable to join meeting:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="mx-auto flex min-h-screen max-w-[1700px] items-center px-8 pb-12 pt-32 lg:px-16">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* ========================= */}
          {/* LEFT SECTION */}
          {/* ========================= */}

          <section>

            {/* Welcome */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary-border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">

              <Sparkles
                size={16}
                className="text-[var(--primary)]"
              />

              <span>
                Welcome back
                {userData?.name
                  ? `, ${userData.name}`
                  : ""}
              </span>

            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">

              Connect.

              <br />

              <span className="text-[var(--primary)]">
                Communicate.
              </span>

              <br />

              Collaborate.

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              Start a conversation instantly. Enter a
              meeting code below to join a video call
              with your team, friends, or classmates.
            </p>

            {/* ========================= */}
            {/* MEETING FORM */}
            {/* ========================= */}

            <form
              onSubmit={handleJoinVideoCall}
              className="mt-10 max-w-xl"
            >

              <label
                htmlFor="meetingCode"
                className="mb-2 block text-sm font-medium text-[var(--foreground)]"
              >
                Meeting Code
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">

                {/* Input */}
                <div className="flex flex-1 items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 transition-all focus-within:border-[var(--primary)]">

                  <Video
                    size={20}
                    className="mr-3 shrink-0 text-[var(--muted)]"
                  />

                  <input
                    id="meetingCode"
                    type="text"
                    value={meetingCode}
                    onChange={(e) =>
                      setMeetingCode(e.target.value)
                    }
                    placeholder="Enter meeting code"
                    className="w-full bg-transparent py-3.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
                  />

                </div>

                {/* Join */}
                <button
                  type="submit"
                  disabled={
                    loading || !meetingCode.trim()
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-7 py-3.5 font-semibold text-[var(--primary-foreground)] transition-all hover:bg-[var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-50"
                >

                  {loading
                    ? "Joining..."
                    : "Join Meeting"}

                  {!loading && (
                    <ArrowRight size={18} />
                  )}

                </button>

              </div>

            </form>

            {/* ========================= */}
            {/* QUICK ACTION */}
            {/* ========================= */}

            <div className="mt-8">

              <button
                type="button"
                onClick={() => navigate("/history")}
                className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--primary)]"
              >

                <History size={17} />

                View meeting history

              </button>

            </div>

          </section>

          {/* ========================= */}
          {/* RIGHT SECTION */}
          {/* ========================= */}

          <section className="hidden lg:block">

            <div className="relative mx-auto max-w-lg">

              {/* Glow */}
              <div className="absolute inset-0 -z-10 rounded-full bg-[var(--primary)] opacity-10 blur-3xl" />

              {/* Card */}
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

                {/* Card Header */}
                <div className="mb-6 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-[var(--muted)]">
                      PORTAL
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      Ready to connect?
                    </h3>

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]">

                    <Video
                      size={22}
                      className="text-[var(--primary-foreground)]"
                    />

                  </div>

                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-2 gap-3">

                  {["A", "B", "C", "D"].map(
                    (letter) => (
                      <div
                        key={letter}
                        className="flex aspect-video items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)]"
                      >

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold text-[var(--primary-foreground)]">
                          {letter}
                        </div>

                      </div>
                    )
                  )}

                </div>

                {/* Status */}
                <div className="mt-5 flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">

                  <div className="flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                    <span className="text-sm text-[var(--muted)]">
                      Secure connection
                    </span>

                  </div>

                  <span className="text-xs text-[var(--muted)]">
                    PORTAL
                  </span>

                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Home;