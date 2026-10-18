"use client";

import { useMemo, useState } from "react";

type SyncStatus = "Connected" | "Syncing" | "Attention Required" | "Disconnected";

type SyncItem = {
  id: string;
  name: string;
  type: "Product" | "Enquiry" | "Order" | "Inventory" | "Customer";
  direction: "Website → ERP" | "ERP → Website" | "Both";
  lastSync: string;
  records: number;
  status: SyncStatus;
};

type Activity = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "success" | "warning" | "info" | "error";
};

const initialSyncItems: SyncItem[] = [
  {
    id: "SYNC-001",
    name: "Product Catalogue",
    type: "Product",
    direction: "ERP → Website",
    lastSync: "2 mins ago",
    records: 128,
    status: "Connected",
  },
  {
    id: "SYNC-002",
    name: "Website Enquiries",
    type: "Enquiry",
    direction: "Website → ERP",
    lastSync: "5 mins ago",
    records: 48,
    status: "Connected",
  },
  {
    id: "SYNC-003",
    name: "Online Orders",
    type: "Order",
    direction: "Website → ERP",
    lastSync: "8 mins ago",
    records: 32,
    status: "Connected",
  },
  {
    id: "SYNC-004",
    name: "Inventory Stock",
    type: "Inventory",
    direction: "ERP → Website",
    lastSync: "12 mins ago",
    records: 96,
    status: "Syncing",
  },
  {
    id: "SYNC-005",
    name: "Customer Data",
    type: "Customer",
    direction: "Both",
    lastSync: "25 mins ago",
    records: 214,
    status: "Attention Required",
  },
];

const initialActivities: Activity[] = [
  {
    id: "ACT-001",
    title: "Product catalogue synced",
    description: "128 product records were synchronized with the website.",
    time: "2 minutes ago",
    type: "success",
  },
  {
    id: "ACT-002",
    title: "New website enquiry received",
    description: "A new enquiry from the website was added to the ERP.",
    time: "5 minutes ago",
    type: "info",
  },
  {
    id: "ACT-003",
    title: "Inventory synchronization running",
    description: "Stock quantities are currently being updated.",
    time: "12 minutes ago",
    type: "warning",
  },
  {
    id: "ACT-004",
    title: "Customer sync needs attention",
    description: "3 customer records have duplicate email addresses.",
    time: "25 minutes ago",
    type: "error",
  },
];

const websiteProducts = [
  {
    code: "SOFA-001",
    name: "Modern L-Shape Sofa",
    price: 85000,
    websiteStock: 8,
    erpStock: 8,
    status: "Synced",
  },
  {
    code: "BED-002",
    name: "Premium King Size Bed",
    price: 72000,
    websiteStock: 5,
    erpStock: 5,
    status: "Synced",
  },
  {
    code: "DIN-003",
    name: "6 Seater Dining Table",
    price: 58000,
    websiteStock: 1,
    erpStock: 2,
    status: "Mismatch",
  },
  {
    code: "CHR-004",
    name: "Luxury Accent Chair",
    price: 18500,
    websiteStock: 14,
    erpStock: 14,
    status: "Synced",
  },
  {
    code: "TVU-005",
    name: "Modern Floating TV Unit",
    price: 32000,
    websiteStock: 7,
    erpStock: 7,
    status: "Synced",
  },
];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function statusClass(status: string) {
  switch (status) {
    case "Connected":
    case "Synced":
      return "bg-[#eaf5f1] text-[#176b5b]";

    case "Syncing":
      return "bg-[#eef2ff] text-[#4f46a5]";

    case "Attention Required":
    case "Mismatch":
      return "bg-[#fff5df] text-[#a36a00]";

    case "Disconnected":
      return "bg-[#fdecec] text-[#b42318]";

    default:
      return "bg-gray-100 text-gray-600";
  }
}

function activityIcon(type: Activity["type"]) {
  if (type === "success") return "✓";
  if (type === "warning") return "↻";
  if (type === "error") return "!";
  return "i";
}

export default function WebsiteSyncPage() {
  const [syncItems, setSyncItems] = useState(initialSyncItems);
  const [activities, setActivities] = useState(initialActivities);

  const [activeTab, setActiveTab] = useState<
    "Overview" | "Products" | "Enquiries" | "Orders"
  >("Overview");

  const [search, setSearch] = useState("");
  const [syncingAll, setSyncingAll] = useState(false);
  const [selectedSync, setSelectedSync] = useState<SyncItem | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  const connectedCount = syncItems.filter(
    (item) => item.status === "Connected"
  ).length;

  const attentionCount = syncItems.filter(
    (item) => item.status === "Attention Required"
  ).length;

  const totalRecords = syncItems.reduce(
    (total, item) => total + item.records,
    0
  );

  const filteredProducts = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return websiteProducts;

    return websiteProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(value) ||
        product.code.toLowerCase().includes(value)
    );
  }, [search]);

  function addActivity(activity: Activity) {
    setActivities((current) => [activity, ...current].slice(0, 8));
  }

  function syncEverything() {
    setSyncingAll(true);

    setSyncItems((current) =>
      current.map((item) => ({
        ...item,
        status: "Syncing",
      }))
    );

    addActivity({
      id: `ACT-${Date.now()}`,
      title: "Full website synchronization started",
      description:
        "Products, enquiries, orders, inventory and customer records are being synchronized.",
      time: "Just now",
      type: "info",
    });

    window.setTimeout(() => {
      setSyncItems((current) =>
        current.map((item) => ({
          ...item,
          status: "Connected",
          lastSync: "Just now",
        }))
      );

      setSyncingAll(false);

      addActivity({
        id: `ACT-${Date.now()}-2`,
        title: "Full synchronization completed",
        description:
          "Website and ERP data are now synchronized successfully.",
        time: "Just now",
        type: "success",
      });
    }, 1500);
  }

  function syncSingle(item: SyncItem) {
    setSyncItems((current) =>
      current.map((record) =>
        record.id === item.id
          ? { ...record, status: "Syncing" }
          : record
      )
    );

    addActivity({
      id: `ACT-${Date.now()}`,
      title: `${item.name} synchronization started`,
      description: `${item.records} records are being synchronized.`,
      time: "Just now",
      type: "info",
    });

    window.setTimeout(() => {
      setSyncItems((current) =>
        current.map((record) =>
          record.id === item.id
            ? {
                ...record,
                status: "Connected",
                lastSync: "Just now",
              }
            : record
        )
      );

      addActivity({
        id: `ACT-${Date.now()}-done`,
        title: `${item.name} synchronized`,
        description: `${item.records} records were synchronized successfully.`,
        time: "Just now",
        type: "success",
      });
    }, 1000);
  }

  function resolveMismatch() {
    addActivity({
      id: `ACT-${Date.now()}`,
      title: "Inventory mismatch resolved",
      description:
        "The dining table stock quantity was synchronized from ERP to the website.",
      time: "Just now",
      type: "success",
    });

    setSyncItems((current) =>
      current.map((item) =>
        item.type === "Inventory"
          ? {
              ...item,
              status: "Connected",
              lastSync: "Just now",
            }
          : item
      )
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#242424]">
      <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
              <span>Furniture</span>
              <span>/</span>
              <span className="text-gray-800">Website Sync</span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Website Sync
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage synchronization between the furniture website and ERP.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowSettings(true)}
              className="rounded-xl border border-[#d9d7cf] bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              ⚙ Sync Settings
            </button>

            <button
              onClick={syncEverything}
              disabled={syncingAll}
              className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125848] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {syncingAll ? "Syncing..." : "↻ Sync Everything"}
            </button>
          </div>
        </div>

        {/* Connection Banner */}
        <section className="mb-6 rounded-2xl border border-[#d9e9e3] bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf5f1] text-xl text-[#176b5b]">
                ✓
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-bold">Website Connected</h2>
                  <span className="rounded-full bg-[#eaf5f1] px-2.5 py-1 text-xs font-semibold text-[#176b5b]">
                    Online
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  akrishfurniture.com
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Last full synchronization: Just now
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-[#f8f8f5] px-4 py-3 text-center">
                <p className="text-xl font-bold">{connectedCount}</p>
                <p className="text-xs text-gray-500">Connected</p>
              </div>

              <div className="rounded-xl bg-[#f8f8f5] px-4 py-3 text-center">
                <p className="text-xl font-bold">{totalRecords}</p>
                <p className="text-xs text-gray-500">Records</p>
              </div>

              <div className="col-span-2 rounded-xl bg-[#fff9ec] px-4 py-3 text-center sm:col-span-1">
                <p className="text-xl font-bold text-[#a36a00]">
                  {attentionCount}
                </p>
                <p className="text-xs text-gray-500">Attention</p>
              </div>
            </div>
          </div>
        </section>

        {/* KPI Cards */}
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Products Synced</p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold">128</p>
              <span className="text-xs font-semibold text-[#176b5b]">
                100%
              </span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-gray-100">
              <div className="h-2 w-full rounded-full bg-[#176b5b]" />
            </div>
          </div>

          <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Website Enquiries</p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold">48</p>
              <span className="text-xs font-semibold text-[#176b5b]">
                +12 today
              </span>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              Automatically added to ERP
            </p>
          </div>

          <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Online Orders</p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold">32</p>
              <span className="text-xs font-semibold text-[#176b5b]">
                +5 today
              </span>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              Imported into ERP
            </p>
          </div>

          <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Inventory Accuracy</p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-3xl font-bold">98.7%</p>
              <span className="text-xs font-semibold text-[#a36a00]">
                1 mismatch
              </span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-gray-100">
              <div className="h-2 w-[98.7%] rounded-full bg-[#176b5b]" />
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="mb-5 overflow-x-auto rounded-2xl border border-[#e4e2da] bg-white p-1.5 shadow-sm">
          <div className="flex min-w-max gap-1">
            {["Overview", "Products", "Enquiries", "Orders"].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(
                    tab as "Overview" | "Products" | "Enquiries" | "Orders"
                  )
                }
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                  activeTab === tab
                    ? "bg-[#176b5b] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Overview */}
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">
            <section className="rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-[#eceae3] px-5 py-4">
                <div>
                  <h2 className="font-bold">Synchronization Status</h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Current connection and synchronization state
                  </p>
                </div>

                <span className="text-xs text-gray-400">
                  {syncItems.length} services
                </span>
              </div>

              <div className="divide-y divide-[#efeee9]">
                {syncItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4f5f1] text-lg">
                        {item.type === "Product" && "▣"}
                        {item.type === "Enquiry" && "✉"}
                        {item.type === "Order" && "▤"}
                        {item.type === "Inventory" && "◫"}
                        {item.type === "Customer" && "♙"}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {item.direction} • {item.records} records
                        </p>
                        <p className="mt-0.5 text-[11px] text-gray-400">
                          Last sync: {item.lastSync}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>

                      <button
                        onClick={() => setSelectedSync(item)}
                        className="rounded-lg border border-[#dedcd4] px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                      >
                        View
                      </button>

                      <button
                        onClick={() => syncSingle(item)}
                        className="rounded-lg bg-[#f2f6f4] px-3 py-1.5 text-xs font-semibold text-[#176b5b] hover:bg-[#e5efeb]"
                      >
                        Sync
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
              <div className="border-b border-[#eceae3] px-5 py-4">
                <h2 className="font-bold">Recent Activity</h2>
                <p className="mt-1 text-xs text-gray-500">
                  Latest website synchronization events
                </p>
              </div>

              <div className="divide-y divide-[#efeee9]">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex gap-3 px-5 py-4">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        activity.type === "success"
                          ? "bg-[#eaf5f1] text-[#176b5b]"
                          : activity.type === "warning"
                          ? "bg-[#fff5df] text-[#a36a00]"
                          : activity.type === "error"
                          ? "bg-[#fdecec] text-[#b42318]"
                          : "bg-[#eef2ff] text-[#4f46a5]"
                      }`}
                    >
                      {activityIcon(activity.type)}
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold">
                        {activity.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {activity.description}
                      </p>
                      <p className="mt-1 text-[11px] text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sync Rules */}
            <section className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm xl:col-span-2">
              <div className="mb-5">
                <h2 className="font-bold">Website ↔ ERP Data Flow</h2>
                <p className="mt-1 text-xs text-gray-500">
                  How information moves between the website and furniture ERP.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-[#e7e5de] bg-[#fafaf7] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-semibold">Website → ERP</span>
                    <span className="text-[#176b5b]">→</span>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Website enquiries</li>
                    <li>• Online orders</li>
                    <li>• Customer information</li>
                    <li>• Contact requests</li>
                  </ul>
                </div>

                <div className="flex items-center justify-center">
                  <div className="rounded-2xl bg-[#176b5b] px-6 py-5 text-center text-white">
                    <p className="text-sm font-bold">AKRISH ERP</p>
                    <p className="mt-1 text-xs text-white/80">
                      Central data management
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-[#e7e5de] bg-[#fafaf7] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-semibold">ERP → Website</span>
                    <span className="text-[#176b5b]">→</span>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Product catalogue</li>
                    <li>• Prices</li>
                    <li>• Stock quantities</li>
                    <li>• Product availability</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Products */}
        {activeTab === "Products" && (
          <section className="rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-[#eceae3] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-bold">Website Product Synchronization</h2>
                <p className="mt-1 text-xs text-gray-500">
                  Compare website product data with ERP inventory.
                </p>
              </div>

              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">
                  ⌕
                </span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search product..."
                  className="w-full rounded-xl border border-[#dddcd5] bg-white py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#176b5b] lg:w-72"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left">
                <thead className="bg-[#fafaf7] text-xs uppercase tracking-wide text-gray-500">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Product</th>
                    <th className="px-5 py-3 font-semibold">Price</th>
                    <th className="px-5 py-3 font-semibold">Website Stock</th>
                    <th className="px-5 py-3 font-semibold">ERP Stock</th>
                    <th className="px-5 py-3 font-semibold">Status</th>
                    <th className="px-5 py-3 text-right font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#efeee9]">
                  {filteredProducts.map((product) => (
                    <tr key={product.code} className="hover:bg-[#fcfcfa]">
                      <td className="px-5 py-4">
                        <p className="text-sm font-semibold">
                          {product.name}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          {product.code}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm font-semibold">
                        {formatCurrency(product.price)}
                      </td>

                      <td className="px-5 py-4 text-sm">
                        {product.websiteStock}
                      </td>

                      <td className="px-5 py-4 text-sm">
                        {product.erpStock}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(
                            product.status
                          )}`}
                        >
                          {product.status}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-right">
                        {product.status === "Mismatch" ? (
                          <button
                            onClick={resolveMismatch}
                            className="rounded-lg bg-[#176b5b] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#125848]"
                          >
                            Fix Sync
                          </button>
                        ) : (
                          <span className="text-xs text-gray-400">
                            Up to date
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Enquiries */}
        {activeTab === "Enquiries" && (
          <section className="rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="border-b border-[#eceae3] px-5 py-4">
              <h2 className="font-bold">Website Enquiry Sync</h2>
              <p className="mt-1 text-xs text-gray-500">
                Website enquiries are automatically created as ERP leads.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-[#f8f8f5] p-4">
                <p className="text-xs text-gray-500">Total Enquiries</p>
                <p className="mt-2 text-2xl font-bold">48</p>
              </div>

              <div className="rounded-xl bg-[#f8f8f5] p-4">
                <p className="text-xs text-gray-500">Synced</p>
                <p className="mt-2 text-2xl font-bold text-[#176b5b]">48</p>
              </div>

              <div className="rounded-xl bg-[#f8f8f5] p-4">
                <p className="text-xs text-gray-500">New Today</p>
                <p className="mt-2 text-2xl font-bold">12</p>
              </div>

              <div className="rounded-xl bg-[#fff9ec] p-4">
                <p className="text-xs text-gray-500">Pending Sync</p>
                <p className="mt-2 text-2xl font-bold text-[#a36a00]">0</p>
              </div>
            </div>

            <div className="mx-5 mb-5 rounded-xl border border-[#dcebe5] bg-[#f5faf8] p-4">
              <p className="text-sm font-semibold text-[#176b5b]">
                ✓ Automatic enquiry workflow active
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-600">
                Website enquiries are received by the ERP and can be converted
                into customer leads for follow-up.
              </p>
            </div>
          </section>
        )}

        {/* Orders */}
        {activeTab === "Orders" && (
          <section className="rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="border-b border-[#eceae3] px-5 py-4">
              <h2 className="font-bold">Website Order Sync</h2>
              <p className="mt-1 text-xs text-gray-500">
                Online orders imported from the furniture website.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead className="bg-[#fafaf7] text-xs uppercase tracking-wide text-gray-500">
                  <tr>
                    <th className="px-5 py-3">Order</th>
                    <th className="px-5 py-3">Customer</th>
                    <th className="px-5 py-3">Product</th>
                    <th className="px-5 py-3">Amount</th>
                    <th className="px-5 py-3">ERP Status</th>
                    <th className="px-5 py-3">Sync</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#efeee9]">
                  {[
                    {
                      order: "WEB-1001",
                      customer: "Rahul Kumar",
                      product: "Modern L-Shape Sofa",
                      amount: 85000,
                      status: "Confirmed",
                    },
                    {
                      order: "WEB-1002",
                      customer: "Priya Sharma",
                      product: "Premium King Size Bed",
                      amount: 72000,
                      status: "Production",
                    },
                    {
                      order: "WEB-1003",
                      customer: "Suresh Reddy",
                      product: "6 Seater Dining Table",
                      amount: 58000,
                      status: "Delivered",
                    },
                    {
                      order: "WEB-1004",
                      customer: "Anjali Rao",
                      product: "Luxury Accent Chair",
                      amount: 18500,
                      status: "Confirmed",
                    },
                  ].map((order) => (
                    <tr key={order.order} className="hover:bg-[#fcfcfa]">
                      <td className="px-5 py-4 text-sm font-semibold">
                        {order.order}
                      </td>

                      <td className="px-5 py-4 text-sm">
                        {order.customer}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        {order.product}
                      </td>

                      <td className="px-5 py-4 text-sm font-semibold">
                        {formatCurrency(order.amount)}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <span className="text-xs font-semibold text-[#176b5b]">
                          ✓ Synced
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Bottom Information */}
        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <p className="text-sm font-bold">Last Sync</p>
            <p className="mt-2 text-2xl font-bold">Just now</p>
            <p className="mt-1 text-xs text-gray-500">
              All major data services checked
            </p>
          </div>

          <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <p className="text-sm font-bold">Next Automatic Sync</p>
            <p className="mt-2 text-2xl font-bold">5 min</p>
            <p className="mt-1 text-xs text-gray-500">
              Automatic synchronization is enabled
            </p>
          </div>

          <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <p className="text-sm font-bold">Sync Errors</p>
            <p className="mt-2 text-2xl font-bold text-[#176b5b]">0</p>
            <p className="mt-1 text-xs text-gray-500">
              No active synchronization errors
            </p>
          </div>
        </section>
      </div>

      {/* View Sync Modal */}
      {selectedSync && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#e8e6df] px-5 py-4">
              <div>
                <h2 className="font-bold">{selectedSync.name}</h2>
                <p className="mt-1 text-xs text-gray-500">
                  Synchronization details
                </p>
              </div>

              <button
                onClick={() => setSelectedSync(null)}
                className="rounded-lg px-2 py-1 text-xl text-gray-400 hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 p-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#f8f8f5] p-4">
                  <p className="text-xs text-gray-500">Service Type</p>
                  <p className="mt-1 font-semibold">{selectedSync.type}</p>
                </div>

                <div className="rounded-xl bg-[#f8f8f5] p-4">
                  <p className="text-xs text-gray-500">Records</p>
                  <p className="mt-1 font-semibold">
                    {selectedSync.records}
                  </p>
                </div>

                <div className="rounded-xl bg-[#f8f8f5] p-4">
                  <p className="text-xs text-gray-500">Direction</p>
                  <p className="mt-1 font-semibold">
                    {selectedSync.direction}
                  </p>
                </div>

                <div className="rounded-xl bg-[#f8f8f5] p-4">
                  <p className="text-xs text-gray-500">Last Sync</p>
                  <p className="mt-1 font-semibold">
                    {selectedSync.lastSync}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-[#e4e2da] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Status</span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(
                      selectedSync.status
                    )}`}
                  >
                    {selectedSync.status}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  syncSingle(selectedSync);
                  setSelectedSync(null);
                }}
                className="w-full rounded-xl bg-[#176b5b] py-3 text-sm font-semibold text-white hover:bg-[#125848]"
              >
                Sync Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#e8e6df] px-5 py-4">
              <div>
                <h2 className="font-bold">Sync Settings</h2>
                <p className="mt-1 text-xs text-gray-500">
                  Configure website synchronization behavior.
                </p>
              </div>

              <button
                onClick={() => setShowSettings(false)}
                className="rounded-lg px-2 py-1 text-xl text-gray-400 hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 p-5">
              <label className="flex items-center justify-between rounded-xl border border-[#e4e2da] p-4">
                <div>
                  <p className="text-sm font-semibold">
                    Automatic Synchronization
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Sync website and ERP every 5 minutes.
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-[#176b5b]"
                />
              </label>

              <label className="flex items-center justify-between rounded-xl border border-[#e4e2da] p-4">
                <div>
                  <p className="text-sm font-semibold">
                    Product Stock Sync
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Update website stock from ERP.
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-[#176b5b]"
                />
              </label>

              <label className="flex items-center justify-between rounded-xl border border-[#e4e2da] p-4">
                <div>
                  <p className="text-sm font-semibold">
                    Website Enquiry Import
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Automatically create ERP enquiries.
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-[#176b5b]"
                />
              </label>

              <label className="flex items-center justify-between rounded-xl border border-[#e4e2da] p-4">
                <div>
                  <p className="text-sm font-semibold">
                    Online Order Import
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Automatically import website orders.
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-[#176b5b]"
                />
              </label>

              <button
                onClick={() => {
                  setShowSettings(false);

                  addActivity({
                    id: `ACT-${Date.now()}`,
                    title: "Sync settings updated",
                    description:
                      "Website synchronization preferences were saved.",
                    time: "Just now",
                    type: "success",
                  });
                }}
                className="w-full rounded-xl bg-[#176b5b] py-3 text-sm font-semibold text-white hover:bg-[#125848]"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }

          button,
          input,
          .print-hidden {
            display: none !important;
          }

          main {
            min-height: auto !important;
          }
        }
      `}</style>
    </main>
  );
}