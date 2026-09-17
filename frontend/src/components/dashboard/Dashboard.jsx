import {
  Bell,
  Settings,
  Video,
  Users,
  ShieldCheck,
} from "lucide-react";

import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import StatusBadge from "./StatusBadge";

function Dashboard() {
  return (
    <div className="relative mx-auto w-full max-w-xl">

      {/* Warm ambient light */}

      <div className="absolute -inset-8 rounded-[40px] bg-orange-500/10 blur-[120px]" />

      <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_25px_60px_rgba(0,0,0,0.55)] transition duration-300 hover:-translate-y-1">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-5">

          <div className="flex items-center gap-3">

            <div className="h-3 w-3 rounded-full bg-green-500" />

            <h2 className="text-lg font-bold tracking-wide text-[var(--foreground)]">
              PORTAL
            </h2>

          </div>

          <div className="flex items-center gap-4 text-[var(--muted)]">

            <Bell
              size={18}
              className="cursor-pointer transition hover:text-[var(--primary)]"
            />

            <Settings
              size={18}
              className="cursor-pointer transition hover:rotate-90 hover:text-[var(--primary)]"
            />

          </div>

        </div>

        {/* Chat */}

        <div className="space-y-5 p-6">

          <ChatBubble
            sender="Nandu"
            message="Hey! Ready for today's meeting?"
            time="12:43"
            isOwn
          />

          <ChatBubble
            sender="Alex"
            message="Yep! Joining in 2 minutes 🚀"
            time="12:44"
          />

          <TypingIndicator user="Alex" />

        </div>

        <div className="mx-6 border-t border-[var(--border)]" />

        {/* Status */}

        <div className="space-y-3 p-6">

          <StatusBadge
            icon={Video}
            title="Video Call Connected"
            color="text-orange-400"
          />

          <StatusBadge
            icon={Users}
            title="23 Members Online"
            color="text-amber-400"
          />

          <StatusBadge
            icon={ShieldCheck}
            title="End-to-End Encrypted"
            color="text-green-400"
          />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;