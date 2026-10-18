"use client";

import { useMemo, useState } from "react";

type ChecklistStatus =
  | "Not Started"
  | "In Progress"
  | "Completed"
  | "Blocked";

type ChecklistItem = {
  id: string;
  category: string;
  task: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  status: ChecklistStatus;
  priority: "Low" | "Medium" | "High";
  notes: string;
};

const initialChecklist: ChecklistItem[] = [
  {
    id: "CHK-001",
    category: "Design",
    task: "Client requirements finalized",
    description:
      "Confirm room requirements, preferred style, colors and functional needs.",
    assignedTo: "Priya Sharma",
    dueDate: "2026-10-04",
    status: "Completed",
    priority: "High",
    notes: "Requirements approved by client.",
  },
  {
    id: "CHK-002",
    category: "Design",
    task: "Floor plan prepared",
    description:
      "Prepare and finalize the floor plan according to client requirements.",
    assignedTo: "Anjali Rao",
    dueDate: "2026-10-07",
    status: "Completed",
    priority: "High",
    notes: "Final floor plan shared with client.",
  },
  {
    id: "CHK-003",
    category: "Design",
    task: "3D design completed",
    description:
      "Complete 3D visualization for all major rooms.",
    assignedTo: "Anjali Rao",
    dueDate: "2026-10-10",
    status: "In Progress",
    priority: "High",
    notes: "Living room and kitchen completed.",
  },
  {
    id: "CHK-004",
    category: "Materials",
    task: "Material selection approved",
    description:
      "Get approval for plywood, laminates, fabrics, tiles and other materials.",
    assignedTo: "Rahul Kumar",
    dueDate: "2026-10-12",
    status: "In Progress",
    priority: "High",
    notes: "Waiting for bedroom laminate confirmation.",
  },
  {
    id: "CHK-005",
    category: "Procurement",
    task: "Materials ordered",
    description:
      "Place purchase orders for approved project materials.",
    assignedTo: "Suresh Babu",
    dueDate: "2026-10-15",
    status: "Not Started",
    priority: "High",
    notes: "",
  },
  {
    id: "CHK-006",
    category: "Site",
    task: "Site measurement completed",
    description:
      "Verify all room dimensions before production begins.",
    assignedTo: "Vamsi Krishna",
    dueDate: "2026-10-08",
    status: "Completed",
    priority: "Medium",
    notes: "Measurements verified on site.",
  },
  {
    id: "CHK-007",
    category: "Site",
    task: "Electrical work completed",
    description:
      "Complete electrical points, wiring and required provisions.",
    assignedTo: "Vamsi Krishna",
    dueDate: "2026-10-20",
    status: "Not Started",
    priority: "Medium",
    notes: "",
  },
  {
    id: "CHK-008",
    category: "Production",
    task: "Furniture production started",
    description:
      "Start manufacturing approved modular furniture.",
    assignedTo: "Ravi Kumar",
    dueDate: "2026-10-22",
    status: "Not Started",
    priority: "High",
    notes: "",
  },
  {
    id: "CHK-009",
    category: "Installation",
    task: "Kitchen installation",
    description:
      "Install kitchen cabinets, shutters, hardware and accessories.",
    assignedTo: "Ravi Kumar",
    dueDate: "2026-10-28",
    status: "Not Started",
    priority: "High",
    notes: "",
  },
  {
    id: "CHK-010",
    category: "Installation",
    task: "Bedroom furniture installation",
    description:
      "Install wardrobes, beds, side tables and related furniture.",
    assignedTo: "Ravi Kumar",
    dueDate: "2026-10-30",
    status: "Not Started",
    priority: "Medium",
    notes: "",
  },
  {
    id: "CHK-011",
    category: "Quality",
    task: "Quality inspection",
    description:
      "Check finishing, alignment, hardware and overall workmanship.",
    assignedTo: "Arjun Reddy",
    dueDate: "2026-11-02",
    status: "Not Started",
    priority: "High",
    notes: "",
  },
  {
    id: "CHK-012",
    category: "Handover",
    task: "Final client inspection",
    description:
      "Walk through the completed project with the client.",
    assignedTo: "Arjun Reddy",
    dueDate: "2026-11-05",
    status: "Not Started",
    priority: "High",
    notes: "",
  },
  {
    id: "CHK-013",
    category: "Handover",
    task: "Project handover completed",
    description:
      "Hand over keys, documents, warranty details and final project.",
    assignedTo: "Arjun Reddy",
    dueDate: "2026-11-07",
    status: "Not Started",
    priority: "Medium",
    notes: "",
  },
];

const categories = [
  "All Categories",
  "Design",
  "Materials",
  "Procurement",
  "Site",
  "Production",
  "Installation",
  "Quality",
  "Handover",
];

const statuses = [
  "All Status",
  "Not Started",
  "In Progress",
  "Completed",
  "Blocked",
];

const priorities = [
  "All Priorities",
  "High",
  "Medium",
  "Low",
];

const teamMembers = [
  "Priya Sharma",
  "Anjali Rao",
  "Rahul Kumar",
  "Suresh Babu",
  "Vamsi Krishna",
  "Ravi Kumar",
  "Arjun Reddy",
];

function formatDate(date: string) {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function statusClass(status: ChecklistStatus) {
  switch (status) {
    case "Completed":
      return "border-green-200 bg-green-50 text-green-700";

    case "In Progress":
      return "border-blue-200 bg-blue-50 text-blue-700";

    case "Blocked":
      return "border-red-200 bg-red-50 text-red-700";

    default:
      return "border-gray-200 bg-gray-50 text-gray-600";
  }
}

function priorityClass(priority: ChecklistItem["priority"]) {
  switch (priority) {
    case "High":
      return "bg-red-50 text-red-700";

    case "Medium":
      return "bg-yellow-50 text-yellow-700";

    default:
      return "bg-green-50 text-green-700";
  }
}

export default function ProjectChecklistPage() {
  const [checklist, setChecklist] =
    useState<ChecklistItem[]>(initialChecklist);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");
  const [priority, setPriority] = useState("All Priorities");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetails, setShowDetails] =
    useState<ChecklistItem | null>(null);

  const [newItem, setNewItem] = useState({
    category: "Design",
    task: "",
    description: "",
    assignedTo: "Anjali Rao",
    dueDate: "",
    status: "Not Started" as ChecklistStatus,
    priority: "Medium" as ChecklistItem["priority"],
    notes: "",
  });

  const filteredChecklist = useMemo(() => {
    return checklist.filter((item) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        item.task.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText) ||
        item.assignedTo.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All Categories" ||
        item.category === category;

      const matchesStatus =
        status === "All Status" || item.status === status;

      const matchesPriority =
        priority === "All Priorities" ||
        item.priority === priority;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [checklist, search, category, status, priority]);

  const completedCount = checklist.filter(
    (item) => item.status === "Completed"
  ).length;

  const inProgressCount = checklist.filter(
    (item) => item.status === "In Progress"
  ).length;

  const pendingCount = checklist.filter(
    (item) => item.status === "Not Started"
  ).length;

  const blockedCount = checklist.filter(
    (item) => item.status === "Blocked"
  ).length;

  const completionPercentage = checklist.length
    ? Math.round((completedCount / checklist.length) * 100)
    : 0;

  const highPriorityCount = checklist.filter(
    (item) =>
      item.priority === "High" &&
      item.status !== "Completed"
  ).length;

  function updateStatus(
    id: string,
    newStatus: ChecklistStatus
  ) {
    setChecklist((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              status: newStatus,
            }
          : item
      )
    );

    setShowDetails(null);
  }

  function addChecklistItem() {
    if (!newItem.task.trim()) {
      alert("Please enter a task name.");
      return;
    }

    const item: ChecklistItem = {
      id: `CHK-${String(checklist.length + 1).padStart(
        3,
        "0"
      )}`,
      category: newItem.category,
      task: newItem.task,
      description: newItem.description,
      assignedTo: newItem.assignedTo,
      dueDate: newItem.dueDate,
      status: newItem.status,
      priority: newItem.priority,
      notes: newItem.notes,
    };

    setChecklist((current) => [...current, item]);

    setNewItem({
      category: "Design",
      task: "",
      description: "",
      assignedTo: "Anjali Rao",
      dueDate: "",
      status: "Not Started",
      priority: "Medium",
      notes: "",
    });

    setShowAddModal(false);
  }

  function markAllCompleted() {
    setChecklist((current) =>
      current.map((item) => ({
        ...item,
        status: "Completed",
      }))
    );
  }

  function exportChecklist() {
    const headers = [
      "ID",
      "Category",
      "Task",
      "Description",
      "Assigned To",
      "Due Date",
      "Status",
      "Priority",
      "Notes",
    ];

    const rows = filteredChecklist.map((item) => [
      item.id,
      item.category,
      item.task,
      item.description,
      item.assignedTo,
      item.dueDate,
      item.status,
      item.priority,
      item.notes,
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row
          .map((value) =>
            `"${String(value).replace(/"/g, '""')}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "akrish-project-checklist.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
      {/* Header */}
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2 text-sm text-gray-500">
                <span className="font-semibold text-[#9a5b18]">
                  Akrish
                </span>

                <span>/</span>

                <span>Interior</span>

                <span>/</span>

                <span>Projects</span>

                <span>/</span>

                <span>Checklist</span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight">
                Project Checklist
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Track every task from design to final project
                handover.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={exportChecklist}
                className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                ↓ Export
              </button>

              <button
                onClick={() => window.print()}
                className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                🖨 Print
              </button>

              <button
                onClick={() => setShowAddModal(true)}
                className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b]"
              >
                + Add Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1500px] space-y-5 px-5 py-6">
        {/* Project Info */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-bold">
                  Luxury 3 BHK Interior
                </h2>

                <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                  INT-001
                </span>

                <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                  In Progress
                </span>
              </div>

              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                <span>
                  <strong className="text-gray-700">
                    Client:
                  </strong>{" "}
                  Rahul Kumar
                </span>

                <span>
                  <strong className="text-gray-700">
                    Type:
                  </strong>{" "}
                  Residential
                </span>

                <span>
                  <strong className="text-gray-700">
                    Value:
                  </strong>{" "}
                  ₹8,50,000
                </span>

                <span>
                  <strong className="text-gray-700">
                    Designer:
                  </strong>{" "}
                  Priya Sharma
                </span>
              </div>
            </div>

            <div className="min-w-[250px]">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium">
                  Checklist Progress
                </span>

                <span className="font-bold text-[#176b5b]">
                  {completionPercentage}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#176b5b]"
                  style={{
                    width: `${completionPercentage}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-xs text-gray-500">
                {completedCount} of {checklist.length} tasks
                completed
              </p>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <SummaryCard
            title="Total Tasks"
            value={checklist.length}
            subtitle="All checklist items"
            icon="☷"
          />

          <SummaryCard
            title="Completed"
            value={completedCount}
            subtitle={`${completionPercentage}% complete`}
            icon="✓"
            iconClass="bg-green-50 text-green-700"
          />

          <SummaryCard
            title="In Progress"
            value={inProgressCount}
            subtitle="Currently active"
            icon="◷"
            iconClass="bg-blue-50 text-blue-700"
          />

          <SummaryCard
            title="Not Started"
            value={pendingCount}
            subtitle="Pending tasks"
            icon="○"
            iconClass="bg-yellow-50 text-yellow-700"
          />

          <SummaryCard
            title="Blocked"
            value={blockedCount}
            subtitle={`${highPriorityCount} high priority open`}
            icon="!"
            iconClass="bg-red-50 text-red-700"
          />
        </div>

        {/* Filters */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search checklist tasks..."
                className="w-full rounded-lg border border-[#dddcd5] bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
              />
            </div>

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={status}
              onChange={(event) =>
                setStatus(event.target.value)
              }
              className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
            >
              {statuses.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={priority}
              onChange={(event) =>
                setPriority(event.target.value)
              }
              className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
            >
              {priorities.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All Categories");
                setStatus("All Status");
                setPriority("All Priorities");
              }}
              className="rounded-lg border border-[#dddcd5] px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Clear
            </button>
          </div>
        </section>

        {/* Checklist Table */}
        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-[#e4e2da] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold">
                Project Tasks
              </h2>

              <p className="text-sm text-gray-500">
                Showing {filteredChecklist.length} of{" "}
                {checklist.length} tasks
              </p>
            </div>

            <button
              onClick={markAllCompleted}
              className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 hover:bg-green-100"
            >
              ✓ Mark All Completed
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[1250px] w-full">
              <thead className="bg-[#fafaf8]">
                <tr className="border-b border-[#e4e2da] text-left text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-5 py-3 font-semibold">
                    Task
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Category
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Assigned To
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Due Date
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Priority
                  </th>

                  <th className="px-4 py-3 font-semibold">
                    Status
                  </th>

                  <th className="px-4 py-3 text-right font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredChecklist.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      No checklist tasks found.
                    </td>
                  </tr>
                ) : (
                  filteredChecklist.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-[#eeeeea] last:border-b-0 hover:bg-[#fcfcfa]"
                    >
                      <td className="px-5 py-4">
                        <button
                          onClick={() =>
                            setShowDetails(item)
                          }
                          className="text-left"
                        >
                          <p className="font-semibold text-gray-900 hover:text-[#176b5b]">
                            {item.task}
                          </p>

                          <p className="mt-1 max-w-[420px] truncate text-xs text-gray-500">
                            {item.description}
                          </p>

                          <p className="mt-1 text-[11px] text-gray-400">
                            {item.id}
                          </p>
                        </button>
                      </td>

                      <td className="px-4 py-4">
                        <span className="rounded-md bg-[#f3f1eb] px-2.5 py-1 text-xs font-medium text-gray-700">
                          {item.category}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <p className="text-sm font-medium text-gray-700">
                          {item.assignedTo}
                        </p>
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-600">
                        {formatDate(item.dueDate)}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`rounded-md px-2.5 py-1 text-xs font-semibold ${priorityClass(
                            item.priority
                          )}`}
                        >
                          {item.priority}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <select
                          value={item.status}
                          onChange={(event) =>
                            updateStatus(
                              item.id,
                              event.target
                                .value as ChecklistStatus
                            )
                          }
                          className={`rounded-full border px-3 py-1.5 text-xs font-semibold outline-none ${statusClass(
                            item.status
                          )}`}
                        >
                          {statuses
                            .filter(
                              (item) =>
                                item !== "All Status"
                            )
                            .map((statusItem) => (
                              <option
                                key={statusItem}
                                value={statusItem}
                              >
                                {statusItem}
                              </option>
                            ))}
                        </select>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex justify-end gap-1">
                          <button
                            onClick={() =>
                              setShowDetails(item)
                            }
                            title="View details"
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                          >
                            👁
                          </button>

                          {item.status !== "Completed" && (
                            <button
                              onClick={() =>
                                updateStatus(
                                  item.id,
                                  "Completed"
                                )
                              }
                              title="Mark completed"
                              className="rounded-md p-2 text-green-600 hover:bg-green-50"
                            >
                              ✓
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom Analytics */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Category Progress */}
          <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <h2 className="font-semibold">
              Category Progress
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Completion status across project stages
            </p>

            <div className="mt-5 space-y-4">
              {categories
                .filter(
                  (item) => item !== "All Categories"
                )
                .map((categoryName) => {
                  const categoryItems = checklist.filter(
                    (item) =>
                      item.category === categoryName
                  );

                  if (!categoryItems.length) return null;

                  const completed = categoryItems.filter(
                    (item) =>
                      item.status === "Completed"
                  ).length;

                  const percentage = Math.round(
                    (completed /
                      categoryItems.length) *
                      100
                  );

                  return (
                    <div key={categoryName}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">
                          {categoryName}
                        </span>

                        <span className="text-xs text-gray-500">
                          {completed}/
                          {categoryItems.length} ·{" "}
                          {percentage}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-[#176b5b]"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>

          {/* Priority Overview */}
          <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <h2 className="font-semibold">
              Priority Overview
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Open tasks grouped by priority
            </p>

            <div className="mt-5 space-y-4">
              {(["High", "Medium", "Low"] as const).map(
                (priorityName) => {
                  const priorityItems =
                    checklist.filter(
                      (item) =>
                        item.priority ===
                          priorityName &&
                        item.status !== "Completed"
                    );

                  const percentage = checklist.length
                    ? Math.round(
                        (priorityItems.length /
                          checklist.length) *
                          100
                      )
                    : 0;

                  return (
                    <div key={priorityName}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span
                          className={`rounded-md px-2 py-1 text-xs font-semibold ${priorityClass(
                            priorityName
                          )}`}
                        >
                          {priorityName}
                        </span>

                        <span className="text-sm font-semibold">
                          {priorityItems.length} open
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className={`h-full rounded-full ${
                            priorityName === "High"
                              ? "bg-red-500"
                              : priorityName ===
                                "Medium"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                          style={{
                            width: `${percentage}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="mt-6 rounded-lg border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-700">
                Attention Needed
              </p>

              <p className="mt-1 text-sm text-red-600">
                {highPriorityCount} high-priority tasks are
                still open.
              </p>
            </div>
          </section>
        </div>

        {/* Status Guide */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
          <h2 className="font-semibold">
            Checklist Status Guide
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <GuideCard
              title="Not Started"
              description="Task has not been started yet."
              className="border-gray-200 bg-gray-50"
              textClass="text-gray-700"
            />

            <GuideCard
              title="In Progress"
              description="Team member is currently working on it."
              className="border-blue-100 bg-blue-50"
              textClass="text-blue-700"
            />

            <GuideCard
              title="Completed"
              description="Task has been successfully completed."
              className="border-green-100 bg-green-50"
              textClass="text-green-700"
            />

            <GuideCard
              title="Blocked"
              description="Task cannot continue because of an issue."
              className="border-red-100 bg-red-50"
              textClass="text-red-700"
            />
          </div>
        </section>
      </main>

      {/* Details Modal */}
      {showDetails && (
        <Modal
          title="Checklist Task Details"
          onClose={() => setShowDetails(null)}
        >
          <div className="flex items-start justify-between gap-4 border-b border-[#e4e2da] pb-5">
            <div>
              <p className="text-xs text-gray-500">
                {showDetails.id}
              </p>

              <h3 className="mt-1 text-xl font-bold">
                {showDetails.task}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {showDetails.category}
              </p>
            </div>

            <span
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${statusClass(
                showDetails.status
              )}`}
            >
              {showDetails.status}
            </span>
          </div>

          <div className="mt-5">
            <div className="rounded-lg bg-[#fafaf8] p-4">
              <p className="text-xs text-gray-500">
                Description
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-700">
                {showDetails.description ||
                  "No description added."}
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <DetailItem
                label="Category"
                value={showDetails.category}
              />

              <DetailItem
                label="Assigned To"
                value={showDetails.assignedTo}
              />

              <DetailItem
                label="Due Date"
                value={formatDate(
                  showDetails.dueDate
                )}
              />

              <DetailItem
                label="Priority"
                value={showDetails.priority}
              />
            </div>

            {showDetails.notes && (
              <div className="mt-4 rounded-lg border border-[#e4e2da] p-4">
                <p className="text-xs text-gray-500">
                  Notes
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  {showDetails.notes}
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 border-t border-[#e4e2da] pt-4">
            <p className="mb-3 text-sm font-semibold">
              Change Status
            </p>

            <div className="flex flex-wrap gap-2">
              {(
                [
                  "Not Started",
                  "In Progress",
                  "Completed",
                  "Blocked",
                ] as ChecklistStatus[]
              ).map((statusItem) => (
                <button
                  key={statusItem}
                  onClick={() =>
                    updateStatus(
                      showDetails.id,
                      statusItem
                    )
                  }
                  className={`rounded-lg border px-3 py-2 text-xs font-semibold ${statusClass(
                    statusItem
                  )}`}
                >
                  {statusItem}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end border-t border-[#e4e2da] pt-4">
            <button
              onClick={() => setShowDetails(null)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
            >
              Close
            </button>
          </div>
        </Modal>
      )}

      {/* Add Task Modal */}
      {showAddModal && (
        <Modal
          title="Add Checklist Task"
          onClose={() => setShowAddModal(false)}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Task Name *"
              value={newItem.task}
              onChange={(value) =>
                setNewItem({
                  ...newItem,
                  task: value,
                })
              }
              placeholder="Enter task name"
            />

            <SelectInput
              label="Category"
              value={newItem.category}
              onChange={(value) =>
                setNewItem({
                  ...newItem,
                  category: value,
                })
              }
              options={categories.filter(
                (item) => item !== "All Categories"
              )}
            />

            <SelectInput
              label="Assigned To"
              value={newItem.assignedTo}
              onChange={(value) =>
                setNewItem({
                  ...newItem,
                  assignedTo: value,
                })
              }
              options={teamMembers}
            />

            <Input
              label="Due Date"
              type="date"
              value={newItem.dueDate}
              onChange={(value) =>
                setNewItem({
                  ...newItem,
                  dueDate: value,
                })
              }
            />

            <SelectInput
              label="Priority"
              value={newItem.priority}
              onChange={(value) =>
                setNewItem({
                  ...newItem,
                  priority:
                    value as ChecklistItem["priority"],
                })
              }
              options={["High", "Medium", "Low"]}
            />

            <SelectInput
              label="Status"
              value={newItem.status}
              onChange={(value) =>
                setNewItem({
                  ...newItem,
                  status: value as ChecklistStatus,
                })
              }
              options={[
                "Not Started",
                "In Progress",
                "Completed",
                "Blocked",
              ]}
            />

            <div className="md:col-span-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-gray-700">
                  Description
                </span>

                <textarea
                  value={newItem.description}
                  onChange={(event) =>
                    setNewItem({
                      ...newItem,
                      description:
                        event.target.value,
                    })
                  }
                  rows={3}
                  placeholder="Describe the task..."
                  className="w-full resize-none rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                />
              </label>
            </div>

            <div className="md:col-span-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-gray-700">
                  Notes
                </span>

                <textarea
                  value={newItem.notes}
                  onChange={(event) =>
                    setNewItem({
                      ...newItem,
                      notes: event.target.value,
                    })
                  }
                  rows={2}
                  placeholder="Additional notes..."
                  className="w-full resize-none rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                />
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2 border-t border-[#e4e2da] pt-4">
            <button
              onClick={() => setShowAddModal(false)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
            >
              Cancel
            </button>

            <button
              onClick={addChecklistItem}
              className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#12594b]"
            >
              Add Task
            </button>
          </div>
        </Modal>
      )}

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }

          button,
          input,
          select,
          textarea {
            display: none !important;
          }

          .shadow-sm {
            box-shadow: none !important;
          }

          @page {
            size: A4 landscape;
            margin: 12mm;
          }
        }
      `}</style>
    </div>
  );
}

function SummaryCard({
  title,
  value,
  subtitle,
  icon,
  iconClass = "bg-[#f1f1ec] text-[#176b5b]",
}: {
  title: string;
  value: number;
  subtitle: string;
  icon: string;
  iconClass?: string;
}) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold">
            {value}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {subtitle}
          </p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold ${iconClass}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function GuideCard({
  title,
  description,
  className,
  textClass,
}: {
  title: string;
  description: string;
  className: string;
  textClass: string;
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${className}`}
    >
      <p className={`text-sm font-semibold ${textClass}`}>
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-gray-500">
        {description}
      </p>
    </div>
  );
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-[#fafaf8] p-3">
      <p className="text-xs text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-gray-800">
        {value}
      </p>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
      />
    </label>
  );
}

function SelectInput({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-5 py-4">
          <h2 className="text-lg font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg px-3 py-1 text-xl text-gray-500 hover:bg-gray-100"
          >
            ×
          </button>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}