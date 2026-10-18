"use client";

import { useMemo, useState } from "react";

type FileCategory =
  | "All"
  | "Design"
  | "Contracts"
  | "Invoices"
  | "Photos"
  | "Documents"
  | "Approvals";

type VaultFile = {
  id: string;
  name: string;
  category: Exclude<FileCategory, "All">;
  type: "PDF" | "JPG" | "PNG" | "DOCX" | "XLSX";
  size: string;
  uploadedBy: string;
  uploadedDate: string;
  description: string;
  version: string;
  starred: boolean;
};

const initialFiles: VaultFile[] = [
  {
    id: "FILE-001",
    name: "Final Floor Plan.pdf",
    category: "Design",
    type: "PDF",
    size: "2.8 MB",
    uploadedBy: "Anjali Rao",
    uploadedDate: "2026-10-03",
    description:
      "Approved floor plan for the complete 3 BHK interior project.",
    version: "v3.0",
    starred: true,
  },
  {
    id: "FILE-002",
    name: "3D Living Room Design.jpg",
    category: "Design",
    type: "JPG",
    size: "4.2 MB",
    uploadedBy: "Anjali Rao",
    uploadedDate: "2026-10-08",
    description:
      "Final 3D visualization of the living room.",
    version: "v2.0",
    starred: true,
  },
  {
    id: "FILE-003",
    name: "Kitchen 3D View.jpg",
    category: "Design",
    type: "JPG",
    size: "3.6 MB",
    uploadedBy: "Anjali Rao",
    uploadedDate: "2026-10-09",
    description:
      "Kitchen design visualization for client approval.",
    version: "v1.0",
    starred: false,
  },
  {
    id: "FILE-004",
    name: "Interior Contract.pdf",
    category: "Contracts",
    type: "PDF",
    size: "1.4 MB",
    uploadedBy: "Priya Sharma",
    uploadedDate: "2026-09-29",
    description:
      "Signed interior design and execution agreement.",
    version: "v1.0",
    starred: true,
  },
  {
    id: "FILE-005",
    name: "Project Estimate.xlsx",
    category: "Invoices",
    type: "XLSX",
    size: "68 KB",
    uploadedBy: "Sneha Rao",
    uploadedDate: "2026-09-30",
    description:
      "Detailed project estimate and cost breakdown.",
    version: "v2.0",
    starred: false,
  },
  {
    id: "FILE-006",
    name: "Advance Payment Receipt.pdf",
    category: "Invoices",
    type: "PDF",
    size: "420 KB",
    uploadedBy: "Sneha Rao",
    uploadedDate: "2026-10-01",
    description:
      "Receipt for the project advance payment.",
    version: "v1.0",
    starred: false,
  },
  {
    id: "FILE-007",
    name: "Site Measurement.pdf",
    category: "Documents",
    type: "PDF",
    size: "1.1 MB",
    uploadedBy: "Vamsi Krishna",
    uploadedDate: "2026-09-30",
    description:
      "Verified site measurements for all rooms.",
    version: "v1.0",
    starred: false,
  },
  {
    id: "FILE-008",
    name: "Site Before Work.jpg",
    category: "Photos",
    type: "JPG",
    size: "5.8 MB",
    uploadedBy: "Vamsi Krishna",
    uploadedDate: "2026-09-30",
    description:
      "Photos captured before project execution.",
    version: "v1.0",
    starred: false,
  },
  {
    id: "FILE-009",
    name: "Electrical Layout.png",
    category: "Design",
    type: "PNG",
    size: "1.9 MB",
    uploadedBy: "Anjali Rao",
    uploadedDate: "2026-10-05",
    description:
      "Electrical points and lighting layout.",
    version: "v1.0",
    starred: false,
  },
  {
    id: "FILE-010",
    name: "Client Design Approval.pdf",
    category: "Approvals",
    type: "PDF",
    size: "860 KB",
    uploadedBy: "Priya Sharma",
    uploadedDate: "2026-10-11",
    description:
      "Client approval for the final interior design.",
    version: "v1.0",
    starred: true,
  },
];

const categories: FileCategory[] = [
  "All",
  "Design",
  "Contracts",
  "Invoices",
  "Photos",
  "Documents",
  "Approvals",
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function fileColor(type: VaultFile["type"]) {
  switch (type) {
    case "PDF":
      return "bg-red-50 text-red-600";

    case "JPG":
    case "PNG":
      return "bg-purple-50 text-purple-600";

    case "DOCX":
      return "bg-blue-50 text-blue-600";

    case "XLSX":
      return "bg-green-50 text-green-600";

    default:
      return "bg-gray-50 text-gray-600";
  }
}

function categoryColor(category: VaultFile["category"]) {
  switch (category) {
    case "Design":
      return "bg-purple-50 text-purple-700";

    case "Contracts":
      return "bg-blue-50 text-blue-700";

    case "Invoices":
      return "bg-green-50 text-green-700";

    case "Photos":
      return "bg-orange-50 text-orange-700";

    case "Approvals":
      return "bg-yellow-50 text-yellow-700";

    default:
      return "bg-gray-50 text-gray-700";
  }
}

export default function ProjectVaultPage() {
  const [files, setFiles] =
    useState<VaultFile[]>(initialFiles);

  const [activeCategory, setActiveCategory] =
    useState<FileCategory>("All");

  const [search, setSearch] = useState("");

  const [viewMode, setViewMode] =
    useState<"grid" | "list">("grid");

  const [showUploadModal, setShowUploadModal] =
    useState(false);

  const [selectedFile, setSelectedFile] =
    useState<VaultFile | null>(null);

  const [showPreview, setShowPreview] =
    useState<VaultFile | null>(null);

  const [newFile, setNewFile] = useState({
    name: "",
    category: "Design" as Exclude<FileCategory, "All">,
    type: "PDF" as VaultFile["type"],
    size: "1.0 MB",
    description: "",
  });

  const filteredFiles = useMemo(() => {
    const searchText = search.toLowerCase();

    return files.filter((file) => {
      const matchesCategory =
        activeCategory === "All" ||
        file.category === activeCategory;

      const matchesSearch =
        file.name.toLowerCase().includes(searchText) ||
        file.description
          .toLowerCase()
          .includes(searchText) ||
        file.uploadedBy
          .toLowerCase()
          .includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [files, activeCategory, search]);

  const starredFiles = files.filter(
    (file) => file.starred
  );

  const totalSize = files.reduce((total, file) => {
    const value = parseFloat(file.size);

    if (file.size.includes("MB")) {
      return total + value;
    }

    return total + value / 1024;
  }, 0);

  function toggleStar(id: string) {
    setFiles((current) =>
      current.map((file) =>
        file.id === id
          ? {
              ...file,
              starred: !file.starred,
            }
          : file
      )
    );
  }

  function deleteFile(id: string) {
    const file = files.find(
      (item) => item.id === id
    );

    if (!file) return;

    const confirmed = window.confirm(
      `Delete "${file.name}" from the project vault?`
    );

    if (!confirmed) return;

    setFiles((current) =>
      current.filter((item) => item.id !== id)
    );

    setSelectedFile(null);
  }

  function addFile() {
    if (!newFile.name.trim()) {
      alert("Please enter a file name.");
      return;
    }

    const file: VaultFile = {
      id: `FILE-${String(files.length + 1).padStart(
        3,
        "0"
      )}`,
      name: newFile.name,
      category: newFile.category,
      type: newFile.type,
      size: newFile.size || "1.0 MB",
      uploadedBy: "Current User",
      uploadedDate: new Date()
        .toISOString()
        .split("T")[0],
      description:
        newFile.description ||
        "Project document uploaded to the vault.",
      version: "v1.0",
      starred: false,
    };

    setFiles((current) => [file, ...current]);

    setNewFile({
      name: "",
      category: "Design",
      type: "PDF",
      size: "1.0 MB",
      description: "",
    });

    setShowUploadModal(false);
  }

  function downloadFile(file: VaultFile) {
    const content = [
      "AKRISH PROJECT VAULT",
      "",
      `File: ${file.name}`,
      `Category: ${file.category}`,
      `Type: ${file.type}`,
      `Version: ${file.version}`,
      `Size: ${file.size}`,
      `Uploaded By: ${file.uploadedBy}`,
      `Uploaded Date: ${formatDate(
        file.uploadedDate
      )}`,
      "",
      file.description,
    ].join("\n");

    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${file.name
      .replace(/\.[^/.]+$/, "")
      .replace(/\s+/g, "-")}.txt`;

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
                <span>Vault</span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight">
                Project Vault
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Securely organize project documents,
                designs, contracts and photos.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => window.print()}
                className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                🖨 Print
              </button>

              <button
                onClick={() =>
                  setShowUploadModal(true)
                }
                className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b]"
              >
                + Upload File
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
                    Designer:
                  </strong>{" "}
                  Priya Sharma
                </span>

                <span>
                  <strong className="text-gray-700">
                    Project Value:
                  </strong>{" "}
                  ₹8,50,000
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <MiniStat
                value={files.length}
                label="Files"
              />

              <MiniStat
                value={starredFiles.length}
                label="Starred"
              />

              <MiniStat
                value={`${totalSize.toFixed(1)} MB`}
                label="Storage"
              />
            </div>
          </div>
        </section>

        {/* Storage */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#176b5b]/10 text-xl text-[#176b5b]">
                ☁
              </div>

              <div>
                <p className="font-semibold">
                  Project Storage
                </p>

                <p className="text-sm text-gray-500">
                  {totalSize.toFixed(1)} MB of 500 MB used
                </p>
              </div>
            </div>

            <div className="w-full max-w-md">
              <div className="mb-2 flex justify-between text-xs text-gray-500">
                <span>Storage usage</span>
                <span>
                  {Math.min(
                    100,
                    Math.round(
                      (totalSize / 500) * 100
                    )
                  )}
                  %
                </span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#176b5b]"
                  style={{
                    width: `${Math.min(
                      100,
                      (totalSize / 500) * 100
                    )}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((item) => {
            const count =
              item === "All"
                ? files.length
                : files.filter(
                    (file) => file.category === item
                  ).length;

            const active = activeCategory === item;

            return (
              <button
                key={item}
                onClick={() =>
                  setActiveCategory(item)
                }
                className={`rounded-xl border p-4 text-left transition ${
                  active
                    ? "border-[#176b5b] bg-[#176b5b] text-white shadow-sm"
                    : "border-[#e4e2da] bg-white hover:border-[#cfcdbf]"
                }`}
              >
                <p
                  className={`text-xs ${
                    active
                      ? "text-white/70"
                      : "text-gray-500"
                  }`}
                >
                  Files
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {count}
                </p>

                <p
                  className={`mt-1 text-xs font-medium ${
                    active
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </p>
              </button>
            );
          })}
        </section>

        {/* Search + Controls */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search files..."
                className="w-full rounded-lg border border-[#dddcd5] bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`rounded-lg px-3 py-2 text-sm ${
                  viewMode === "grid"
                    ? "bg-[#176b5b] text-white"
                    : "border border-[#dddcd5] text-gray-600"
                }`}
              >
                ▦ Grid
              </button>

              <button
                onClick={() => setViewMode("list")}
                className={`rounded-lg px-3 py-2 text-sm ${
                  viewMode === "list"
                    ? "bg-[#176b5b] text-white"
                    : "border border-[#dddcd5] text-gray-600"
                }`}
              >
                ☷ List
              </button>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="rounded-lg border border-[#dddcd5] px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                Clear
              </button>
            </div>
          </div>
        </section>

        {/* File Area */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="font-semibold">
                {activeCategory === "All"
                  ? "All Project Files"
                  : activeCategory}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {filteredFiles.length} files found
              </p>
            </div>

            <button
              onClick={() =>
                setShowUploadModal(true)
              }
              className="rounded-lg border border-[#176b5b] px-3 py-2 text-xs font-semibold text-[#176b5b] hover:bg-[#176b5b]/5"
            >
              + Add File
            </button>
          </div>

          {filteredFiles.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
                📁
              </div>

              <p className="mt-4 font-semibold">
                No files found
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Try another search or category.
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredFiles.map((file) => (
                <FileCard
                  key={file.id}
                  file={file}
                  onView={() =>
                    setSelectedFile(file)
                  }
                  onPreview={() =>
                    setShowPreview(file)
                  }
                  onStar={() =>
                    toggleStar(file.id)
                  }
                  onDownload={() =>
                    downloadFile(file)
                  }
                  onDelete={() =>
                    deleteFile(file.id)
                  }
                />
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-[1050px] w-full">
                <thead className="bg-[#fafaf8]">
                  <tr className="border-b border-[#e4e2da] text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-4 py-3 font-semibold">
                      File
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Category
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Uploaded By
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Date
                    </th>

                    <th className="px-4 py-3 font-semibold">
                      Version
                    </th>

                    <th className="px-4 py-3 text-right font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredFiles.map((file) => (
                    <tr
                      key={file.id}
                      className="border-b border-[#eeeeea] last:border-b-0 hover:bg-[#fcfcfa]"
                    >
                      <td className="px-4 py-4">
                        <button
                          onClick={() =>
                            setSelectedFile(file)
                          }
                          className="flex items-center gap-3 text-left"
                        >
                          <FileIcon
                            type={file.type}
                            size="small"
                          />

                          <div>
                            <p className="font-semibold hover:text-[#176b5b]">
                              {file.name}
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                              {file.size}
                            </p>
                          </div>
                        </button>
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`rounded-md px-2.5 py-1 text-xs font-semibold ${categoryColor(
                            file.category
                          )}`}
                        >
                          {file.category}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-600">
                        {file.uploadedBy}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-600">
                        {formatDate(file.uploadedDate)}
                      </td>

                      <td className="px-4 py-4 text-sm font-medium">
                        {file.version}
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex justify-end gap-1">
                          <button
                            onClick={() =>
                              toggleStar(file.id)
                            }
                            className={`rounded-md p-2 ${
                              file.starred
                                ? "text-yellow-500"
                                : "text-gray-400"
                            } hover:bg-gray-100`}
                          >
                            ★
                          </button>

                          <button
                            onClick={() =>
                              setShowPreview(file)
                            }
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
                          >
                            👁
                          </button>

                          <button
                            onClick={() =>
                              downloadFile(file)
                            }
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
                          >
                            ↓
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Recent Activity */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h2 className="font-semibold">
              Recent Vault Activity
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Latest documents added to this project
            </p>
          </div>

          <div className="space-y-4">
            {files.slice(0, 5).map((file) => (
              <div
                key={file.id}
                className="flex items-center gap-3"
              >
                <FileIcon
                  type={file.type}
                  size="small"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    {file.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Uploaded by {file.uploadedBy}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs font-medium text-gray-600">
                    {formatDate(file.uploadedDate)}
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    {file.version}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* File Details Modal */}
      {selectedFile && (
        <Modal
          title="File Details"
          onClose={() => setSelectedFile(null)}
        >
          <div className="flex items-start gap-4 border-b border-[#e4e2da] pb-5">
            <FileIcon
              type={selectedFile.type}
              size="large"
            />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-bold">
                  {selectedFile.name}
                </h2>

                <span
                  className={`rounded-md px-2 py-1 text-[11px] font-semibold ${categoryColor(
                    selectedFile.category
                  )}`}
                >
                  {selectedFile.category}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                {selectedFile.description}
              </p>
            </div>

            <button
              onClick={() =>
                toggleStar(selectedFile.id)
              }
              className={`text-xl ${
                selectedFile.starred
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              ★
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <DetailItem
              label="File Type"
              value={selectedFile.type}
            />

            <DetailItem
              label="File Size"
              value={selectedFile.size}
            />

            <DetailItem
              label="Version"
              value={selectedFile.version}
            />

            <DetailItem
              label="Uploaded By"
              value={selectedFile.uploadedBy}
            />

            <DetailItem
              label="Uploaded Date"
              value={formatDate(
                selectedFile.uploadedDate
              )}
            />

            <DetailItem
              label="File ID"
              value={selectedFile.id}
            />
          </div>

          <div className="mt-6 flex flex-wrap justify-end gap-2 border-t border-[#e4e2da] pt-4">
            <button
              onClick={() =>
                setShowPreview(selectedFile)
              }
              className="rounded-lg border border-[#dddcd5] px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Preview
            </button>

            <button
              onClick={() =>
                downloadFile(selectedFile)
              }
              className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12594b]"
            >
              Download
            </button>

            <button
              onClick={() =>
                deleteFile(selectedFile.id)
              }
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
            >
              Delete
            </button>
          </div>
        </Modal>
      )}

      {/* Preview Modal */}
      {showPreview && (
        <Modal
          title="File Preview"
          onClose={() => setShowPreview(null)}
        >
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-8 text-center">
            <FileIcon
              type={showPreview.type}
              size="large"
            />

            <h2 className="mt-5 text-lg font-bold">
              {showPreview.name}
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              {showPreview.description}
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <span className="rounded-md bg-white px-3 py-2 text-xs text-gray-600 shadow-sm">
                {showPreview.type}
              </span>

              <span className="rounded-md bg-white px-3 py-2 text-xs text-gray-600 shadow-sm">
                {showPreview.size}
              </span>

              <span className="rounded-md bg-white px-3 py-2 text-xs text-gray-600 shadow-sm">
                {showPreview.version}
              </span>
            </div>

            <p className="mt-6 text-xs text-gray-400">
              Local demo preview
            </p>
          </div>

          <div className="mt-5 flex justify-end gap-2">
            <button
              onClick={() =>
                downloadFile(showPreview)
              }
              className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12594b]"
            >
              Download
            </button>

            <button
              onClick={() => setShowPreview(null)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
            >
              Close
            </button>
          </div>
        </Modal>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <Modal
          title="Upload Project File"
          onClose={() => setShowUploadModal(false)}
        >
          <div className="rounded-xl border-2 border-dashed border-[#d8d6cd] bg-[#fafaf8] p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#176b5b]/10 text-2xl text-[#176b5b]">
              ↑
            </div>

            <h3 className="mt-4 font-semibold">
              Add a project file
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Enter the file details below.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="File Name *"
              value={newFile.name}
              onChange={(value) =>
                setNewFile({
                  ...newFile,
                  name: value,
                })
              }
              placeholder="Example: Bedroom Design.pdf"
            />

            <SelectInput
              label="Category"
              value={newFile.category}
              onChange={(value) =>
                setNewFile({
                  ...newFile,
                  category:
                    value as Exclude<
                      FileCategory,
                      "All"
                    >,
                })
              }
              options={[
                "Design",
                "Contracts",
                "Invoices",
                "Photos",
                "Documents",
                "Approvals",
              ]}
            />

            <SelectInput
              label="File Type"
              value={newFile.type}
              onChange={(value) =>
                setNewFile({
                  ...newFile,
                  type: value as VaultFile["type"],
                })
              }
              options={[
                "PDF",
                "JPG",
                "PNG",
                "DOCX",
                "XLSX",
              ]}
            />

            <Input
              label="File Size"
              value={newFile.size}
              onChange={(value) =>
                setNewFile({
                  ...newFile,
                  size: value,
                })
              }
              placeholder="Example: 2.5 MB"
            />

            <div className="md:col-span-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-gray-700">
                  Description
                </span>

                <textarea
                  value={newFile.description}
                  onChange={(event) =>
                    setNewFile({
                      ...newFile,
                      description:
                        event.target.value,
                    })
                  }
                  rows={3}
                  placeholder="Describe this project file..."
                  className="w-full resize-none rounded-lg border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                />
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2 border-t border-[#e4e2da] pt-4">
            <button
              onClick={() =>
                setShowUploadModal(false)
              }
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              onClick={addFile}
              className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#12594b]"
            >
              Add File
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

function FileCard({
  file,
  onView,
  onPreview,
  onStar,
  onDownload,
  onDelete,
}: {
  file: VaultFile;
  onView: () => void;
  onPreview: () => void;
  onStar: () => void;
  onDownload: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="group rounded-xl border border-[#e4e2da] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#cfcdbf] hover:shadow-md">
      <div className="flex items-start justify-between">
        <button onClick={onPreview}>
          <FileIcon
            type={file.type}
            size="large"
          />
        </button>

        <button
          onClick={onStar}
          className={`text-xl ${
            file.starred
              ? "text-yellow-500"
              : "text-gray-300 hover:text-yellow-500"
          }`}
        >
          ★
        </button>
      </div>

      <button
        onClick={onView}
        className="mt-4 block w-full text-left"
      >
        <p className="truncate text-sm font-semibold hover:text-[#176b5b]">
          {file.name}
        </p>

        <p className="mt-1 line-clamp-2 min-h-[32px] text-xs leading-4 text-gray-500">
          {file.description}
        </p>
      </button>

      <div className="mt-4 flex items-center justify-between">
        <span
          className={`rounded-md px-2 py-1 text-[10px] font-semibold ${categoryColor(
            file.category
          )}`}
        >
          {file.category}
        </span>

        <span className="text-[11px] text-gray-400">
          {file.size}
        </span>
      </div>

      <div className="mt-4 border-t border-[#eeeeea] pt-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-gray-400">
              Uploaded by
            </p>

            <p className="text-xs font-medium text-gray-600">
              {file.uploadedBy}
            </p>
          </div>

          <p className="text-[11px] text-gray-400">
            {formatDate(file.uploadedDate)}
          </p>
        </div>
      </div>

      <div className="mt-3 flex gap-2 opacity-0 transition group-hover:opacity-100">
        <button
          onClick={onPreview}
          className="flex-1 rounded-lg border border-[#dddcd5] py-2 text-xs font-medium text-gray-600 hover:bg-gray-50"
        >
          Preview
        </button>

        <button
          onClick={onDownload}
          className="rounded-lg border border-[#dddcd5] px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50"
        >
          ↓
        </button>

        <button
          onClick={onDelete}
          className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50"
        >
          ×
        </button>
      </div>
    </div>
  );
}

function FileIcon({
  type,
  size,
}: {
  type: VaultFile["type"];
  size: "small" | "large";
}) {
  const isLarge = size === "large";

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl font-bold ${fileColor(
        type
      )} ${
        isLarge
          ? "h-14 w-14 text-sm"
          : "h-10 w-10 text-[10px]"
      }`}
    >
      {type}
    </div>
  );
}

function MiniStat({
  value,
  label,
}: {
  value: number | string;
  label: string;
}) {
  return (
    <div className="rounded-lg border border-[#e4e2da] bg-[#fafaf8] px-4 py-3 text-center">
      <p className="text-lg font-bold text-[#176b5b]">
        {value}
      </p>

      <p className="text-[11px] text-gray-500">
        {label}
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
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </span>

      <input
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