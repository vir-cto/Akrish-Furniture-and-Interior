"use client";

import { useMemo, useState } from "react";

type TimelineStatus =
  | "Completed"
  | "In Progress"
  | "Upcoming"
  | "Delayed"
  | "Milestone";

type TimelineItem = {
  id: string;
  date: string;
  endDate?: string;
  title: string;
  description: string;
  category: string;
  assignedTo: string;
  status: TimelineStatus;
  progress: number;
  priority: "Low" | "Medium" | "High";
  notes: string;
};

const initialTimeline: TimelineItem[] = [
  {
    id: "TL-001",
    date: "2026-09-28",
    endDate: "2026-09-29",
    title: "Project Kickoff",
    description:
      "Initial meeting with the client to understand project requirements, budget and expectations.",
    category: "Planning",
    assignedTo: "Priya Sharma",
    status: "Completed",
    progress: 100,
    priority: "High",
    notes: "Kickoff completed successfully.",
  },
  {
    id: "TL-002",
    date: "2026-09-30",
    endDate: "2026-10-02",
    title: "Site Measurement",
    description:
      "Detailed measurements of all rooms and existing site conditions.",
    category: "Site",
    assignedTo: "Vamsi Krishna",
    status: "Completed",
    progress: 100,
    priority: "High",
    notes: "Measurements verified.",
  },
  {
    id: "TL-003",
    date: "2026-10-03",
    endDate: "2026-10-07",
    title: "Floor Plan Finalization",
    description:
      "Prepare and finalize the floor plan based on client requirements.",
    category: "Design",
    assignedTo: "Anjali Rao",
    status: "Completed",
    progress: 100,
    priority: "High",
    notes: "Client approved the final floor plan.",
  },
  {
    id: "TL-004",
    date: "2026-10-08",
    endDate: "2026-10-15",
    title: "3D Design & Visualization",
    description:
      "Create 3D designs and visualizations for living room, kitchen and bedrooms.",
    category: "Design",
    assignedTo: "Anjali Rao",
    status: "In Progress",
    progress: 65,
    priority: "High",
    notes: "Living room and kitchen are completed.",
  },
  {
    id: "TL-005",
    date: "2026-10-12",
    endDate: "2026-10-16",
    title: "Material Selection",
    description:
      "Finalize plywood, laminates, fabrics, tiles, hardware and other materials.",
    category: "Materials",
    assignedTo: "Rahul Kumar",
    status: "In Progress",
    progress: 50,
    priority: "High",
    notes: "Bedroom laminate selection is pending.",
  },
  {
    id: "TL-006",
    date: "2026-10-17",
    endDate: "2026-10-20",
    title: "Client Design Approval",
    description:
      "Present final design concepts and obtain approval from the client.",
    category: "Approval",
    assignedTo: "Priya Sharma",
    status: "Upcoming",
    progress: 0,
    priority: "High",
    notes: "",
  },
  {
    id: "TL-007",
    date: "2026-10-18",
    endDate: "2026-10-25",
    title: "Material Procurement",
    description:
      "Place purchase orders and arrange delivery of approved project materials.",
    category: "Procurement",
    assignedTo: "Suresh Babu",
    status: "Upcoming",
    progress: 0,
    priority: "High",
    notes: "",
  },
  {
    id: "TL-008",
    date: "2026-10-26",
    endDate: "2026-11-05",
    title: "Furniture Production",
    description:
      "Manufacture modular furniture according to the approved designs.",
    category: "Production",
    assignedTo: "Ravi Kumar",
    status: "Upcoming",
    progress: 0,
    priority: "High",
    notes: "",
  },
  {
    id: "TL-009",
    date: "2026-11-06",
    endDate: "2026-11-12",
    title: "Site Installation",
    description:
      "Install modular furniture, kitchen units, wardrobes and other interior elements.",
    category: "Installation",
    assignedTo: "Ravi Kumar",
    status: "Upcoming",
    progress: 0,
    priority: "High",
    notes: "",
  },
  {
    id: "TL-010",
    date: "2026-11-13",
    endDate: "2026-11-15",
    title: "Quality Inspection",
    description:
      "Inspect workmanship, alignment, finishing, hardware and project quality.",
    category: "Quality",
    assignedTo: "Arjun Reddy",
    status: "Upcoming",
    progress: 0,
    priority: "Medium",
    notes: "",
  },
  {
    id: "TL-011",
    date: "2026-11-16",
    endDate: "2026-11-17",
    title: "Final Client Inspection",
    description:
      "Conduct final walkthrough with the client and record any corrections.",
    category: "Inspection",
    assignedTo: "Arjun Reddy",
    status: "Upcoming",
    progress: 0,
    priority: "High",
    notes: "",
  },
  {
    id: "TL-012",
    date: "2026-11-18",
    title: "Project Handover",
    description:
      "Complete final handover including keys, documents, warranties and project closure.",
    category: "Handover",
    assignedTo: "Priya Sharma",
    status: "Milestone",
    progress: 0,
    priority: "High",
    notes: "",
  },
];

const categories = [
  "All Categories",
  "Planning",
  "Site",
  "Design",
  "Materials",
  "Approval",
  "Procurement",
  "Production",
  "Installation",
  "Quality",
  "Inspection",
  "Handover",
];

const statuses = [
  "All Status",
  "Completed",
  "In Progress",
  "Upcoming",
  "Delayed",
  "Milestone",
];

function formatDate(date: string) {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function statusClass(status: TimelineStatus) {
  switch (status) {
    case "Completed":
      return "border-green-200 bg-green-50 text-green-700";

    case "In Progress":
      return "border-blue-200 bg-blue-50 text-blue-700";

    case "Delayed":
      return "border-red-200 bg-red-50 text-red-700";

    case "Milestone":
      return "border-purple-200 bg-purple-50 text-purple-700";

    default:
      return "border-gray-200 bg-gray-50 text-gray-600";
  }
}

function priorityClass(priority: TimelineItem["priority"]) {
  switch (priority) {
    case "High":
      return "bg-red-50 text-red-700";

    case "Medium":
      return "bg-yellow-50 text-yellow-700";

    default:
      return "bg-green-50 text-green-700";
  }
}

export default function ProjectTimelinePage() {
  const [timeline, setTimeline] =
    useState<TimelineItem[]>(initialTimeline);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedItem, setSelectedItem] =
    useState<TimelineItem | null>(null);

  const [newItem, setNewItem] = useState({
    date: "",
    endDate: "",
    title: "",
    description: "",
    category: "Design",
    assignedTo: "Anjali Rao",
    status: "Upcoming" as TimelineStatus,
    progress: 0,
    priority: "Medium" as TimelineItem["priority"],
    notes: "",
  });

  const filteredTimeline = useMemo(() => {
    return timeline
      .filter((item) => {
        const searchText = search.toLowerCase();

        const matchesSearch =
          item.title.toLowerCase().includes(searchText) ||
          item.description
            .toLowerCase()
            .includes(searchText) ||
          item.category
            .toLowerCase()
            .includes(searchText) ||
          item.assignedTo
            .toLowerCase()
            .includes(searchText);

        const matchesCategory =
          category === "All Categories" ||
          item.category === category;

        const matchesStatus =
          status === "All Status" ||
          item.status === status;

        return (
          matchesSearch &&
          matchesCategory &&
          matchesStatus
        );
      })
      .sort(
        (a, b) =>
          new Date(a.date).getTime() -
          new Date(b.date).getTime()
      );
  }, [timeline, search, category, status]);

  const completedCount = timeline.filter(
    (item) => item.status === "Completed"
  ).length;

  const inProgressCount = timeline.filter(
    (item) => item.status === "In Progress"
  ).length;

  const upcomingCount = timeline.filter(
    (item) => item.status === "Upcoming"
  ).length;

  const delayedCount = timeline.filter(
    (item) => item.status === "Delayed"
  ).length;

  const milestoneCount = timeline.filter(
    (item) => item.status === "Milestone"
  ).length;

  const overallProgress = timeline.length
    ? Math.round(
        timeline.reduce(
          (total, item) => total + item.progress,
          0
        ) / timeline.length
      )
    : 0;

  function updateStatus(
    id: string,
    newStatus: TimelineStatus
  ) {
    setTimeline((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              status: newStatus,
              progress:
                newStatus === "Completed"
                  ? 100
                  : newStatus === "Upcoming"
                  ? 0
                  : item.progress,
            }
          : item
      )
    );

    setSelectedItem(null);
  }

  function updateProgress(
    id: string,
    progress: number
  ) {
    setTimeline((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              progress,
              status:
                progress === 100
                  ? "Completed"
                  : progress > 0
                  ? "In Progress"
                  : "Upcoming",
            }
          : item
      )
    );
  }

  function addTimelineItem() {
    if (!newItem.title.trim()) {
      alert("Please enter a timeline activity.");
      return;
    }

    if (!newItem.date) {
      alert("Please select a start date.");
      return;
    }

    const item: TimelineItem = {
      id: `TL-${String(timeline.length + 1).padStart(
        3,
        "0"
      )}`,
      date: newItem.date,
      endDate: newItem.endDate,
      title: newItem.title,
      description: newItem.description,
      category: newItem.category,
      assignedTo: newItem.assignedTo,
      status: newItem.status,
      progress: newItem.progress,
      priority: newItem.priority,
      notes: newItem.notes,
    };

    setTimeline((current) => [...current, item]);

    setNewItem({
      date: "",
      endDate: "",
      title: "",
      description: "",
      category: "Design",
      assignedTo: "Anjali Rao",
      status: "Upcoming",
      progress: 0,
      priority: "Medium",
      notes: "",
    });

    setShowAddModal(false);
  }

  function exportTimeline() {
    const headers = [
      "ID",
      "Start Date",
      "End Date",
      "Activity",
      "Description",
      "Category",
      "Assigned To",
      "Status",
      "Progress",
      "Priority",
      "Notes",
    ];

    const rows = filteredTimeline.map((item) => [
      item.id,
      item.date,
      item.endDate || "",
      item.title,
      item.description,
      item.category,
      item.assignedTo,
      item.status,
      `${item.progress}%`,
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
    link.download = "akrish-project-timeline.csv";
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
              <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <span className="font-semibold text-[#9a5b18]">
                  Akrish
                </span>
                <span>/</span>
                <span>Interior</span>
                <span>/</span>
                <span>Projects</span>
                <span>/</span>
                <span>Timeline</span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight">
                Project Timeline
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Track the complete project journey from
                kickoff to final handover.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={exportTimeline}
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
                + Add Activity
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
                    Project Value:
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

            <div className="min-w-[260px]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">
                  Overall Progress
                </span>

                <span className="text-lg font-bold text-[#176b5b]">
                  {overallProgress}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#176b5b]"
                  style={{
                    width: `${overallProgress}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-xs text-gray-500">
                {completedCount} completed ·{" "}
                {inProgressCount} active ·{" "}
                {upcomingCount} upcoming
              </p>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <SummaryCard
            title="Total Activities"
            value={timeline.length}
            subtitle="Project timeline"
            icon="☷"
          />

          <SummaryCard
            title="Completed"
            value={completedCount}
            subtitle="Finished activities"
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
            title="Upcoming"
            value={upcomingCount}
            subtitle="Future activities"
            icon="→"
            iconClass="bg-yellow-50 text-yellow-700"
          />

          <SummaryCard
            title="Delayed"
            value={delayedCount}
            subtitle={`${milestoneCount} milestone`}
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
                placeholder="Search timeline activities..."
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

            <button
              onClick={() => {
                setSearch("");
                setCategory("All Categories");
                setStatus("All Status");
              }}
              className="rounded-lg border border-[#dddcd5] px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Clear
            </button>
          </div>
        </section>

        {/* Main Timeline */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold">
                Project Activity Timeline
              </h2>

              <p className="text-sm text-gray-500">
                {filteredTimeline.length} activities
                displayed
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <StatusLegend
                color="bg-green-500"
                label="Completed"
              />

              <StatusLegend
                color="bg-blue-500"
                label="In Progress"
              />

              <StatusLegend
                color="bg-gray-400"
                label="Upcoming"
              />

              <StatusLegend
                color="bg-purple-500"
                label="Milestone"
              />
            </div>
          </div>

          {filteredTimeline.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">
              <p className="font-medium text-gray-700">
                No timeline activities found.
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Try changing your filters or search term.
              </p>
            </div>
          ) : (
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute bottom-4 left-[25px] top-4 hidden w-px bg-[#d9d7ce] md:block" />

              <div className="space-y-7">
                {filteredTimeline.map((item, index) => (
                  <TimelineRow
                    key={item.id}
                    item={item}
                    index={index}
                    onView={() => setSelectedItem(item)}
                    onStatusChange={(newStatus) =>
                      updateStatus(
                        item.id,
                        newStatus
                      )
                    }
                    onProgressChange={(progress) =>
                      updateProgress(
                        item.id,
                        progress
                      )
                    }
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Upcoming Milestones */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h2 className="font-semibold">
              Upcoming Milestones
            </h2>

            <p className="text-sm text-gray-500">
              Important future project events
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {timeline
              .filter(
                (item) =>
                  item.status === "Upcoming" ||
                  item.status === "Milestone"
              )
              .slice(0, 4)
              .map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-4 text-left transition hover:-translate-y-0.5 hover:border-[#176b5b]/30 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b5b]/10 text-[#176b5b]">
                      ◆
                    </div>

                    <span className="text-xs font-semibold text-gray-500">
                      {formatDate(item.date)}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {item.assignedTo}
                    </span>

                    <span
                      className={`rounded-full border px-2 py-1 text-[10px] font-semibold ${statusClass(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </button>
              ))}
          </div>
        </section>

        {/* Project Health */}
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Timeline Health
            </p>

            <div className="mt-3 flex items-end gap-3">
              <span className="text-3xl font-bold text-green-700">
                Good
              </span>

              <span className="mb-1 text-xs text-gray-500">
                Based on current progress
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-green-500"
                style={{
                  width: `${Math.max(
                    25,
                    100 - delayedCount * 20
                  )}%`,
                }}
              />
            </div>
          </div>

          <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Active Work
            </p>

            <p className="mt-3 text-3xl font-bold">
              {inProgressCount}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Activities currently being worked on
            </p>
          </div>

          <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Next Milestone
            </p>

            <p className="mt-3 text-lg font-bold">
              Client Design Approval
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Expected: 20 Oct 2026
            </p>
          </div>
        </section>
      </main>

      {/* Details Modal */}
      {selectedItem && (
        <Modal
          title="Timeline Activity Details"
          onClose={() => setSelectedItem(null)}
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 border-b border-[#e4e2da] pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs text-gray-500">
                  {selectedItem.id}
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  {selectedItem.title}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {selectedItem.category}
                </p>
              </div>

              <span
                className={`w-fit rounded-full border px-3 py-1.5 text-xs font-semibold ${statusClass(
                  selectedItem.status
                )}`}
              >
                {selectedItem.status}
              </span>
            </div>

            <div className="rounded-lg bg-[#fafaf8] p-4">
              <p className="text-xs text-gray-500">
                Description
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-700">
                {selectedItem.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <DetailItem
                label="Start Date"
                value={formatDate(selectedItem.date)}
              />

              <DetailItem
                label="End Date"
                value={formatDate(
                  selectedItem.endDate || ""
                )}
              />

              <DetailItem
                label="Assigned To"
                value={selectedItem.assignedTo}
              />

              <DetailItem
                label="Priority"
                value={selectedItem.priority}
              />
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-semibold">
                  Progress
                </span>

                <span className="text-sm font-bold text-[#176b5b]">
                  {selectedItem.progress}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#176b5b]"
                  style={{
                    width: `${selectedItem.progress}%`,
                  }}
                />
              </div>
            </div>

            {selectedItem.notes && (
              <div className="rounded-lg border border-[#e4e2da] p-4">
                <p className="text-xs text-gray-500">
                  Notes
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  {selectedItem.notes}
                </p>
              </div>
            )}

            <div className="border-t border-[#e4e2da] pt-5">
              <p className="mb-3 text-sm font-semibold">
                Update Status
              </p>

              <div className="flex flex-wrap gap-2">
                {(
                  [
                    "Completed",
                    "In Progress",
                    "Upcoming",
                    "Delayed",
                    "Milestone",
                  ] as TimelineStatus[]
                ).map((statusItem) => (
                  <button
                    key={statusItem}
                    onClick={() =>
                      updateStatus(
                        selectedItem.id,
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

            <div className="flex justify-end border-t border-[#e4e2da] pt-4">
              <button
                onClick={() => setSelectedItem(null)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Add Activity Modal */}
      {showAddModal && (
        <Modal
          title="Add Timeline Activity"
          onClose={() => setShowAddModal(false)}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Activity Name *"
              value={newItem.title}
              onChange={(value) =>
                setNewItem({
                  ...newItem,
                  title: value,
                })
              }
              placeholder="Enter activity name"
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

            <Input
              label="Start Date *"
              type="date"
              value={newItem.date}
              onChange={(value) =>
                setNewItem({
                  ...newItem,
                  date: value,
                })
              }
            />

            <Input
              label="End Date"
              type="date"
              value={newItem.endDate}
              onChange={(value) =>
                setNewItem({
                  ...newItem,
                  endDate: value,
                })
              }
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
              options={[
                "Priya Sharma",
                "Anjali Rao",
                "Rahul Kumar",
                "Suresh Babu",
                "Vamsi Krishna",
                "Ravi Kumar",
                "Arjun Reddy",
              ]}
            />

            <SelectInput
              label="Priority"
              value={newItem.priority}
              onChange={(value) =>
                setNewItem({
                  ...newItem,
                  priority:
                    value as TimelineItem["priority"],
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
                  status: value as TimelineStatus,
                })
              }
              options={[
                "Completed",
                "In Progress",
                "Upcoming",
                "Delayed",
                "Milestone",
              ]}
            />

            <Input
              label="Progress (%)"
              type="number"
              value={String(newItem.progress)}
              onChange={(value) =>
                setNewItem({
                  ...newItem,
                  progress: Math.min(
                    100,
                    Math.max(0, Number(value) || 0)
                  ),
                })
              }
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
                  placeholder="Describe this project activity..."
                  className="w-full resize-none rounded-lg border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
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
                  placeholder="Add notes..."
                  className="w-full resize-none rounded-lg border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                />
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2 border-t border-[#e4e2da] pt-4">
            <button
              onClick={() => setShowAddModal(false)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              onClick={addTimelineItem}
              className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#12594b]"
            >
              Add Activity
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

function TimelineRow({
  item,
  index,
  onView,
  onStatusChange,
  onProgressChange,
}: {
  item: TimelineItem;
  index: number;
  onView: () => void;
  onStatusChange: (status: TimelineStatus) => void;
  onProgressChange: (progress: number) => void;
}) {
  const dotClass =
    item.status === "Completed"
      ? "bg-green-500"
      : item.status === "In Progress"
      ? "bg-blue-500"
      : item.status === "Delayed"
      ? "bg-red-500"
      : item.status === "Milestone"
      ? "bg-purple-500"
      : "bg-gray-400";

  return (
    <div className="relative md:pl-[72px]">
      {/* Timeline dot */}
      <div
        className={`absolute left-[16px] top-5 hidden h-[20px] w-[20px] items-center justify-center rounded-full border-4 border-white shadow-sm md:flex ${dotClass}`}
      />

      <div className="rounded-xl border border-[#e4e2da] bg-[#fff] p-4 transition hover:border-[#cfcdbf] hover:shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          {/* Date */}
          <div className="min-w-[150px]">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              {index === 0 ? "Start" : "Date"}
            </p>

            <p className="mt-1 font-bold text-gray-800">
              {formatDate(item.date)}
            </p>

            {item.endDate && (
              <p className="mt-1 text-xs text-gray-500">
                to {formatDate(item.endDate)}
              </p>
            )}
          </div>

          {/* Activity */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onView}
                className="text-left text-base font-bold hover:text-[#176b5b]"
              >
                {item.title}
              </button>

              <span className="rounded-md bg-[#f3f1eb] px-2 py-1 text-[11px] font-medium text-gray-600">
                {item.category}
              </span>

              <span
                className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusClass(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-500">
              {item.description}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-500">
              <span>
                <strong className="text-gray-700">
                  Assigned:
                </strong>{" "}
                {item.assignedTo}
              </span>

              <span
                className={`rounded-md px-2 py-1 font-semibold ${priorityClass(
                  item.priority
                )}`}
              >
                {item.priority} Priority
              </span>

              <span>
                ID:{" "}
                <strong className="text-gray-700">
                  {item.id}
                </strong>
              </span>
            </div>
          </div>

          {/* Progress */}
          <div className="w-full xl:w-[220px]">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500">
                Progress
              </span>

              <span className="text-sm font-bold text-[#176b5b]">
                {item.progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-[#176b5b] transition-all"
                style={{
                  width: `${item.progress}%`,
                }}
              />
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={item.progress}
              onChange={(event) =>
                onProgressChange(
                  Number(event.target.value)
                )
              }
              className="mt-2 w-full accent-[#176b5b]"
            />
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2 xl:flex-col">
            <button
              onClick={onView}
              className="rounded-lg border border-[#dddcd5] px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50"
            >
              View
            </button>

            <select
              value={item.status}
              onChange={(event) =>
                onStatusChange(
                  event.target.value as TimelineStatus
                )
              }
              className={`rounded-lg border px-2.5 py-2 text-xs font-semibold outline-none ${statusClass(
                item.status
              )}`}
            >
              {statuses
                .filter(
                  (statusItem) =>
                    statusItem !== "All Status"
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
          </div>
        </div>
      </div>
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

function StatusLegend({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <span className="flex items-center gap-1.5 text-gray-500">
      <span
        className={`h-2.5 w-2.5 rounded-full ${color}`}
      />
      {label}
    </span>
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
        min={type === "number" ? 0 : undefined}
        max={type === "number" ? 100 : undefined}
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
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e4e2da] bg-white px-5 py-4">
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