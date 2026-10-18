"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Cloud,
  CloudOff,
  Loader2,
  RefreshCw,
  Wifi,
  WifiOff,
} from "lucide-react";

export type SyncStatus =
  | "synced"
  | "syncing"
  | "offline"
  | "error"
  | "pending";

interface SyncStatusIndicatorProps {
  status?: SyncStatus;
  lastSyncedAt?: Date | string | null;
  onSync?: () => void | Promise<void>;
  showLabel?: boolean;
  compact?: boolean;
  className?: string;
}

function formatLastSynced(value?: Date | string | null) {
  if (!value) return "Never synced";

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  const diff = Date.now() - date.getTime();

  if (diff < 60_000) {
    return "Just now";
  }

  if (diff < 3_600_000) {
    return `${Math.floor(diff / 60_000)} min ago`;
  }

  if (diff < 86_400_000) {
    return `${Math.floor(diff / 3_600_000)} hr ago`;
  }

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const statusConfig: Record<
  SyncStatus,
  {
    label: string;
    description: string;
    badge: string;
    icon: typeof Cloud;
  }
> = {
  synced: {
    label: "Synced",
    description: "All data is up to date",
    badge: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    icon: CheckCircle2,
  },
  syncing: {
    label: "Syncing",
    description: "Synchronizing data...",
    badge: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    icon: RefreshCw,
  },
  offline: {
    label: "Offline",
    description: "Changes will sync when online",
    badge: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
    icon: WifiOff,
  },
  error: {
    label: "Sync error",
    description: "Unable to synchronize data",
    badge: "bg-red-50 text-red-700 ring-1 ring-red-200",
    icon: CloudOff,
  },
  pending: {
    label: "Pending",
    description: "Changes are waiting to sync",
    badge: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    icon: Cloud,
  },
};

export default function SyncStatusIndicator({
  status: controlledStatus,
  lastSyncedAt,
  onSync,
  showLabel = true,
  compact = false,
  className = "",
}: SyncStatusIndicatorProps) {
  const [online, setOnline] = useState(true);
  const [internalStatus, setInternalStatus] =
    useState<SyncStatus>("synced");
  const [syncing, setSyncing] = useState(false);
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    setOnline(navigator.onLine);

    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(Date.now());
    }, 30_000);

    return () => window.clearInterval(timer);
  }, []);

  const status: SyncStatus =
    controlledStatus ||
    (!online ? "offline" : internalStatus);

  const config = statusConfig[status];
  const Icon = config.icon;

  const handleSync = async () => {
    if (!onSync || syncing || !online) return;

    setSyncing(true);
    setInternalStatus("syncing");

    try {
      await onSync();
      setInternalStatus("synced");
    } catch (error) {
      console.error("Sync failed:", error);
      setInternalStatus("error");
    } finally {
      setSyncing(false);
    }
  };

  const lastSyncedText = formatLastSynced(lastSyncedAt);

  // Keeps the relative time display updating without requiring
  // a page refresh.
  void currentTime;

  if (compact) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div
          title={`${config.label}: ${config.description}`}
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${config.badge}`}
        >
          <Icon
            size={16}
            className={status === "syncing" ? "animate-spin" : ""}
          />
        </div>

        {onSync && status !== "syncing" && (
          <button
            type="button"
            onClick={handleSync}
            disabled={!online || syncing}
            title="Sync now"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <RefreshCw size={15} />
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm ${className}`}
    >
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${config.badge}`}
      >
        <Icon
          size={16}
          className={status === "syncing" ? "animate-spin" : ""}
        />
      </div>

      {showLabel && (
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-800">
              {config.label}
            </span>

            {online ? (
              <Wifi size={11} className="text-emerald-500" />
            ) : (
              <WifiOff size={11} className="text-slate-400" />
            )}
          </div>

          <p className="text-[10px] text-slate-500">
            {status === "synced"
              ? `Last synced ${lastSyncedText}`
              : config.description}
          </p>
        </div>
      )}

      {onSync && (
        <button
          type="button"
          onClick={handleSync}
          disabled={!online || syncing || status === "syncing"}
          title="Sync now"
          className="ml-1 flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {syncing || status === "syncing" ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <RefreshCw size={14} />
          )}
        </button>
      )}
    </div>
  );
}

export function SyncStatusBadge({
  status,
  className = "",
}: {
  status: SyncStatus;
  className?: string;
}) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${config.badge} ${className}`}
    >
      <Icon
        size={13}
        className={status === "syncing" ? "animate-spin" : ""}
      />
      {config.label}
    </span>
  );
}