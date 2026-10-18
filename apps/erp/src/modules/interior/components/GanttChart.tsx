"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock3,
  Flag,
} from "lucide-react";

export type GanttTaskStatus =
  | "not-started"
  | "in-progress"
  | "completed"
  | "delayed"
  | "cancelled";

export interface GanttTask {
  id: string;
  name: string;
  startDate: string | Date;
  endDate: string | Date;
  status?: GanttTaskStatus;
  progress?: number;
  color?: string;
  parentId?: string;
}

interface GanttChartProps {
  tasks?: GanttTask[];
  projectStartDate?: string | Date;
  projectEndDate?: string | Date;
  onTaskClick?: (task: GanttTask) => void;
  className?: string;
}

const defaultTasks: GanttTask[] = [
  {
    id: "task-1",
    name: "Site Measurement",
    startDate: "2026-01-05",
    endDate: "2026-01-08",
    status: "completed",
    progress: 100,
  },
  {
    id: "task-2",
    name: "Design & Planning",
    startDate: "2026-01-09",
    endDate: "2026-01-20",
    status: "completed",
    progress: 100,
  },
  {
    id: "task-3",
    name: "Client Approval",
    startDate: "2026-01-21",
    endDate: "2026-01-25",
    status: "completed",
    progress: 100,
  },
  {
    id: "task-4",
    name: "Civil & Electrical Work",
    startDate: "2026-01-26",
    endDate: "2026-02-10",
    status: "in-progress",
    progress: 65,
  },
  {
    id: "task-5",
    name: "Carpentry & Furniture",
    startDate: "2026-02-05",
    endDate: "2026-02-22",
    status: "in-progress",
    progress: 40,
  },
  {
    id: "task-6",
    name: "Painting & Finishing",
    startDate: "2026-02-18",
    endDate: "2026-02-27",
    status: "not-started",
    progress: 0,
  },
  {
    id: "task-7",
    name: "Final Inspection & Handover",
    startDate: "2026-02-28",
    endDate: "2026-03-03",
    status: "not-started",
    progress: 0,
  },
];

const DAY_WIDTH = 34;
const ROW_HEIGHT = 48;
const LABEL_WIDTH = 220;

function toDate(value: string | Date) {
  const date = value instanceof Date ? new Date(value) : new Date(`${value}T00:00:00`);

  return date;
}

function startOfDay(date: Date) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

function differenceInDays(start: Date, end: Date) {
  return Math.max(
    0,
    Math.round(
      (startOfDay(end).getTime() - startOfDay(start).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );
}

function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
}

function formatMonth(date: Date) {
  return date.toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
}

function getStatusStyles(status: GanttTaskStatus) {
  switch (status) {
    case "completed":
      return {
        bar: "bg-emerald-500",
        progress: "bg-emerald-700",
        text: "text-emerald-700",
        label: "Completed",
      };

    case "in-progress":
      return {
        bar: "bg-blue-500",
        progress: "bg-blue-700",
        text: "text-blue-700",
        label: "In Progress",
      };

    case "delayed":
      return {
        bar: "bg-red-500",
        progress: "bg-red-700",
        text: "text-red-700",
        label: "Delayed",
      };

    case "cancelled":
      return {
        bar: "bg-slate-400",
        progress: "bg-slate-500",
        text: "text-slate-500",
        label: "Cancelled",
      };

    default:
      return {
        bar: "bg-slate-300",
        progress: "bg-slate-500",
        text: "text-slate-500",
        label: "Not Started",
      };
  }
}

function clampProgress(progress?: number) {
  return Math.min(100, Math.max(0, progress ?? 0));
}

export default function GanttChart({
  tasks = defaultTasks,
  projectStartDate,
  projectEndDate,
  onTaskClick,
  className = "",
}: GanttChartProps) {
  const [viewStart, setViewStart] = useState<Date>(() => {
    if (projectStartDate) {
      return startOfDay(toDate(projectStartDate));
    }

    if (tasks.length > 0) {
      return startOfDay(
        tasks.reduce(
          (earliest, task) => {
            const date = toDate(task.startDate);
            return date < earliest ? date : earliest;
          },
          toDate(tasks[0].startDate)
        )
      );
    }

    return startOfDay(new Date());
  });

  const range = useMemo(() => {
    let start = startOfDay(viewStart);
    let end: Date;

    if (projectEndDate) {
      end = startOfDay(toDate(projectEndDate));
    } else if (tasks.length > 0) {
      end = tasks.reduce(
        (latest, task) => {
          const date = toDate(task.endDate);
          return date > latest ? date : latest;
        },
        toDate(tasks[0].endDate)
      );
      end = startOfDay(end);
    } else {
      end = addDays(start, 30);
    }

    if (end <= start) {
      end = addDays(start, 30);
    }

    return {
      start,
      end,
      days: differenceInDays(start, end) + 1,
    };
  }, [viewStart, projectEndDate, tasks]);

  const days = useMemo(
    () =>
      Array.from({ length: range.days }, (_, index) =>
        addDays(range.start, index)
      ),
    [range.start, range.days]
  );

  const months = useMemo(() => {
    const result: {
      label: string;
      startIndex: number;
      days: number;
    }[] = [];

    days.forEach((day, index) => {
      const label = formatMonth(day);
      const existing = result[result.length - 1];

      if (existing?.label === label) {
        existing.days += 1;
      } else {
        result.push({
          label,
          startIndex: index,
          days: 1,
        });
      }
    });

    return result;
  }, [days]);

  const today = startOfDay(new Date());

  const todayIndex = differenceInDays(range.start, today);
  const showToday =
    today >= range.start && today <= range.end;

  const moveTimeline = (amount: number) => {
    setViewStart((current) => addDays(current, amount));
  };

  const goToToday = () => {
    setViewStart(addDays(today, -Math.floor(range.days / 3)));
  };

  const taskPosition = (task: GanttTask) => {
    const start = toDate(task.startDate);
    const end = toDate(task.endDate);

    const startOffset = differenceInDays(range.start, start);
    const duration = Math.max(1, differenceInDays(start, end) + 1);

    return {
      left: Math.max(0, startOffset) * DAY_WIDTH,
      width: Math.max(DAY_WIDTH, duration * DAY_WIDTH),
    };
  };

  return (
    <section
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Project Timeline
          </h2>

          <p className="mt-0.5 text-xs text-slate-500">
            Track project activities, milestones and progress
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={goToToday}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
          >
            Today
          </button>

          <button
            type="button"
            onClick={() => moveTimeline(-14)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
            title="Previous period"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            onClick={() => moveTimeline(14)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
            title="Next period"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 border-b border-slate-100 px-5 py-3">
        {(
          [
            ["completed", "Completed"],
            ["in-progress", "In Progress"],
            ["not-started", "Not Started"],
            ["delayed", "Delayed"],
          ] as [GanttTaskStatus, string][]
        ).map(([status, label]) => {
          const styles = getStatusStyles(status);

          return (
            <div
              key={status}
              className="flex items-center gap-1.5"
            >
              <Circle
                size={9}
                fill="currentColor"
                className={styles.text}
              />
              <span className="text-[11px] text-slate-500">
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-5 py-16 text-center">
          <Flag size={28} className="text-slate-300" />

          <p className="mt-3 text-sm font-semibold text-slate-700">
            No project tasks
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Add project tasks to display the timeline.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div
            className="relative"
            style={{
              minWidth: LABEL_WIDTH + days.length * DAY_WIDTH,
            }}
          >
            {/* Timeline header */}
            <div
              className="sticky top-0 z-20 flex border-b border-slate-200 bg-white"
              style={{ height: 72 }}
            >
              <div
                className="sticky left-0 z-30 flex shrink-0 items-end border-r border-slate-200 bg-white px-4 pb-2"
                style={{ width: LABEL_WIDTH }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Task
                </span>
              </div>

              <div className="relative flex-1">
                {/* Months */}
                <div className="absolute left-0 right-0 top-0 flex h-8 border-b border-slate-100">
                  {months.map((month) => (
                    <div
                      key={`${month.label}-${month.startIndex}`}
                      className="border-r border-slate-100 px-2 py-2 text-[10px] font-semibold text-slate-500"
                      style={{
                        width: month.days * DAY_WIDTH,
                      }}
                    >
                      {month.label}
                    </div>
                  ))}
                </div>

                {/* Days */}
                <div className="absolute bottom-0 left-0 flex h-9">
                  {days.map((day) => {
                    const weekend =
                      day.getDay() === 0 ||
                      day.getDay() === 6;

                    return (
                      <div
                        key={day.toISOString()}
                        className={`flex shrink-0 items-center justify-center border-r border-slate-100 text-[9px] ${
                          weekend
                            ? "bg-slate-50 text-slate-400"
                            : "text-slate-500"
                        }`}
                        style={{ width: DAY_WIDTH }}
                      >
                        {day.getDate()}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Rows */}
            <div className="relative">
              {tasks.map((task) => {
                const position = taskPosition(task);
                const progress = clampProgress(task.progress);
                const status = task.status || "not-started";
                const styles = getStatusStyles(status);

                return (
                  <div
                    key={task.id}
                    className="flex border-b border-slate-100"
                    style={{ height: ROW_HEIGHT }}
                  >
                    {/* Task name */}
                    <button
                      type="button"
                      onClick={() => onTaskClick?.(task)}
                      className="sticky left-0 z-10 flex shrink-0 items-center gap-2 border-r border-slate-200 bg-white px-4 text-left transition hover:bg-slate-50"
                      style={{ width: LABEL_WIDTH }}
                    >
                      <Clock3
                        size={14}
                        className="shrink-0 text-slate-400"
                      />

                      <span className="truncate text-xs font-medium text-slate-700">
                        {task.name}
                      </span>
                    </button>

                    {/* Timeline row */}
                    <div
                      className="relative shrink-0"
                      style={{
                        width: days.length * DAY_WIDTH,
                      }}
                    >
                      {/* Day grid */}
                      <div className="absolute inset-0 flex">
                        {days.map((day) => {
                          const weekend =
                            day.getDay() === 0 ||
                            day.getDay() === 6;

                          return (
                            <div
                              key={day.toISOString()}
                              className={`h-full shrink-0 border-r border-slate-100 ${
                                weekend ? "bg-slate-50/70" : ""
                              }`}
                              style={{ width: DAY_WIDTH }}
                            />
                          );
                        })}
                      </div>

                      {/* Task bar */}
                      <button
                        type="button"
                        onClick={() => onTaskClick?.(task)}
                        className={`absolute top-1/2 z-10 h-6 -translate-y-1/2 overflow-hidden rounded-md text-left shadow-sm transition hover:brightness-95 ${styles.bar}`}
                        style={{
                          left: position.left,
                          width: position.width,
                        }}
                        title={`${task.name}: ${progress}%`}
                      >
                        <span
                          className={`absolute inset-y-0 left-0 ${styles.progress} opacity-60`}
                          style={{ width: `${progress}%` }}
                        />

                        <span className="relative z-10 flex h-full items-center px-2 text-[10px] font-semibold text-white">
                          {position.width >= 100
                            ? `${task.name} (${progress}%)`
                            : `${progress}%`}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Today marker */}
              {showToday && (
                <div
                  className="pointer-events-none absolute bottom-0 top-0 z-20 border-l-2 border-red-400"
                  style={{
                    left:
                      LABEL_WIDTH +
                      todayIndex * DAY_WIDTH +
                      DAY_WIDTH / 2,
                  }}
                >
                  <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-red-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-col gap-2 border-t border-slate-100 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <Flag size={13} className="text-slate-400" />
          <span>
            {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
          </span>
        </div>

        <div className="text-[11px] text-slate-400">
          Timeline: {formatDate(range.start)} - {formatDate(range.end)}
        </div>
      </div>
    </section>
  );
}