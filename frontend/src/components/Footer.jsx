import { MessageCircle, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-[1700px] px-8 py-16 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--primary-border)] bg-[var(--primary-soft)]">
                <MessageCircle className="text-[var(--primary)]" size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                  PORTAL
                </h2>

                <p className="text-xs text-[var(--muted)]">
                  Connect Beyond Limits
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-[var(--muted)]">
              A modern communication platform built with React, Node.js,
              MongoDB, Socket.IO and WebRTC.
            </p>
          </div>

          {/* Links */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-[var(--foreground)]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {["Features", "Capabilities", "Live Demo", "GitHub"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[var(--muted)] transition hover:text-[var(--primary)]"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-[var(--foreground)]">
              Resources
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="https://socket.io/docs/v4/tutorial/introduction"
                  className="text-[var(--muted)] transition hover:text-[var(--primary)]"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-[var(--foreground)]">
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 transition-all duration-300 hover:border-[var(--primary)] hover:-translate-y-1"
              >
                <FaGithub
                  size={20}
                  className="text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--primary)]"
                />
              </a>

              <a
                href="#"
                className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 transition-all duration-300 hover:border-[var(--primary)] hover:-translate-y-1"
              >
                <FaLinkedin
                  size={20}
                  className="text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--primary)]"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)] md:flex-row">
          <p>© 2026 PORTAL. Built with 🧡 by SVR.</p>

          <a
            href="#"
            className="flex items-center gap-2 transition hover:text-orange-400"
          >
            Back to Top
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
