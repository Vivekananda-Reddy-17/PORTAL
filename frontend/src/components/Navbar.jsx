import { useContext, useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  LogOut,
  Menu,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);
  const navigate = useNavigate();

  const {
    isAuthenticated,
    userData,
    handleLogout,
  } = useContext(AuthContext);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleUserLogout = () => {
    handleLogout();

    setProfileOpen(false);
    setIsOpen(false);

    navigate("/");
  };

  return (
    <header className="navbar-bg fixed left-0 top-0 z-50 w-full border-b border-[var(--primary-border)]">
      <nav className="mx-auto flex max-w-[1700px] items-center justify-between px-8 py-4 lg:px-16">

        {/* ========================= */}
        {/* LOGO */}
        {/* ========================= */}

        <Link
          to={isAuthenticated ? "/home" : "/"}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--primary-border)] bg-[var(--surface)]">
            <div className="h-5 w-5 rounded-full border-2 border-[var(--primary)]" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
              PORTAL
            </h1>

            <p className="text-xs text-[var(--muted)]">
              Connect Beyond Limits
            </p>
          </div>
        </Link>

        {/* ========================= */}
        {/* DESKTOP MENU */}
        {/* ========================= */}

        <div className="hidden items-center gap-8 md:flex">

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* LOGGED OUT */}
          {!isAuthenticated && (
            <>
              <Link
                to="/guest"
                className="font-medium text-[var(--muted)] transition hover:text-[var(--primary)]"
              >
                Guest
              </Link>

              <Link
                to="/auth"
                className="font-medium text-[var(--muted)] transition hover:text-[var(--primary)]"
              >
                Register
              </Link>

              <Link
                to="/auth"
                className="rounded-xl bg-[var(--primary)] px-6 py-3 font-semibold text-[var(--primary-foreground)] transition duration-200 hover:bg-[var(--primary-hover)]"
              >
                Login
              </Link>
            </>
          )}

          {/* LOGGED IN */}
          {isAuthenticated && (
            <div
              ref={profileRef}
              className="relative"
            >
              {/* Profile Button */}
              <button
                type="button"
                onClick={() =>
                  setProfileOpen((prev) => !prev)
                }
                className="flex items-center gap-3 rounded-xl border border-[var(--primary-border)] bg-[var(--surface)] px-3 py-2 transition hover:border-[var(--primary)]"
              >

                {/* Avatar */}
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)]">
                  <User
                    size={18}
                    className="text-[var(--primary-foreground)]"
                  />
                </div>

                {/* User Name */}
                <div className="hidden text-left sm:block">
                  <p className="max-w-[140px] truncate text-sm font-semibold text-[var(--foreground)]">
                    {userData?.name || "User"}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronDown
                  size={17}
                  className={`text-[var(--muted)] transition-transform duration-200 ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />

              </button>

              {/* ========================= */}
              {/* PROFILE DROPDOWN */}
              {/* ========================= */}

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

                  {/* User Info */}
                  <div className="border-b border-[var(--border)] px-3 py-3">

                    <p className="truncate font-semibold text-[var(--foreground)]">
                      {userData?.name || "User"}
                    </p>

                    {userData?.username && (
                      <p className="mt-1 truncate text-sm text-[var(--muted)]">
                        @{userData.username}
                      </p>
                    )}

                  </div>

                  {/* Profile */}
                  <Link
                    to="/profile"
                    onClick={() =>
                      setProfileOpen(false)
                    }
                    className="mt-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--background)]"
                  >
                    <User
                      size={18}
                      className="text-[var(--muted)]"
                    />

                    Profile
                  </Link>

                  {/* Logout */}
                  <button
                    type="button"
                    onClick={handleUserLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-[var(--foreground)] transition hover:bg-red-500/10 hover:text-red-500"
                  >
                    <LogOut size={18} />

                    Logout
                  </button>

                </div>
              )}
            </div>
          )}

        </div>

        {/* ========================= */}
        {/* MOBILE MENU BUTTON */}
        {/* ========================= */}

        <button
          type="button"
          onClick={() =>
            setIsOpen((prev) => !prev)
          }
          className="rounded-lg p-2 text-[var(--foreground)] transition hover:bg-[var(--surface)] md:hidden"
        >
          <Menu size={24} />
        </button>

      </nav>

      {/* ========================= */}
      {/* MOBILE MENU */}
      {/* ========================= */}

      {isOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">

          <div className="flex flex-col gap-5 p-6">

            {!isAuthenticated && (
              <>
                <Link
                  to="/guest"
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--muted)] transition hover:text-[var(--primary)]"
                >
                  Guest
                </Link>

                <Link
                  to="/auth"
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--muted)] transition hover:text-[var(--primary)]"
                >
                  Register
                </Link>

                <Link
                  to="/auth"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-[var(--primary)] py-3 text-center font-semibold text-[var(--primary-foreground)] transition hover:bg-[var(--primary-hover)]"
                >
                  Login
                </Link>
              </>
            )}

            {isAuthenticated && (
              <>
                {/* Mobile User */}
                <div className="flex items-center gap-3 border-b border-[var(--border)] pb-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]">
                    <User
                      size={19}
                      className="text-[var(--primary-foreground)]"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-[var(--foreground)]">
                      {userData?.name || "User"}
                    </p>

                    {userData?.username && (
                      <p className="text-sm text-[var(--muted)]">
                        @{userData.username}
                      </p>
                    )}
                  </div>

                </div>

                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-[var(--muted)] transition hover:text-[var(--primary)]"
                >
                  <User size={19} />
                  Profile
                </Link>

                <button
                  type="button"
                  onClick={handleUserLogout}
                  className="flex items-center gap-3 text-left text-[var(--muted)] transition hover:text-red-500"
                >
                  <LogOut size={19} />
                  Logout
                </button>
              </>
            )}

            <div className="border-t border-[var(--border)] pt-4">
              <ThemeToggle />
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar; 