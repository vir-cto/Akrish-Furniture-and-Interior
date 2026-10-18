"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  FolderOpen,
  MoreHorizontal,
  Plus,
  Trash2,
} from "lucide-react";

export type FolderTreeItem = {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: FolderTreeItem[];
};

interface FolderTreeProps {
  items?: FolderTreeItem[];
  selectedId?: string | null;
  onSelect?: (item: FolderTreeItem) => void;
  onAddFolder?: (parentId?: string) => void;
  onDelete?: (item: FolderTreeItem) => void;
  className?: string;
}

const defaultItems: FolderTreeItem[] = [
  {
    id: "projects",
    name: "Projects",
    type: "folder",
    children: [
      {
        id: "active-projects",
        name: "Active Projects",
        type: "folder",
        children: [
          {
            id: "project-files",
            name: "Project Files",
            type: "folder",
          },
          {
            id: "drawings",
            name: "Drawings",
            type: "folder",
          },
        ],
      },
      {
        id: "completed-projects",
        name: "Completed Projects",
        type: "folder",
      },
    ],
  },
  {
    id: "clients",
    name: "Clients",
    type: "folder",
  },
  {
    id: "quotations",
    name: "Quotations",
    type: "folder",
  },
  {
    id: "contracts",
    name: "Contracts",
    type: "folder",
  },
];

interface FolderNodeProps {
  item: FolderTreeItem;
  level: number;
  selectedId?: string | null;
  expandedIds: Set<string>;
  onToggle: (id: string) => void;
  onSelect?: (item: FolderTreeItem) => void;
  onAddFolder?: (parentId?: string) => void;
  onDelete?: (item: FolderTreeItem) => void;
  openMenuId: string | null;
  setOpenMenuId: (id: string | null) => void;
}

function FolderNode({
  item,
  level,
  selectedId,
  expandedIds,
  onToggle,
  onSelect,
  onAddFolder,
  onDelete,
  openMenuId,
  setOpenMenuId,
}: FolderNodeProps) {
  const hasChildren = Boolean(item.children?.length);
  const expanded = expandedIds.has(item.id);
  const selected = selectedId === item.id;
  const menuOpen = openMenuId === item.id;

  const handleClick = () => {
    onSelect?.(item);

    if (item.type === "folder" && hasChildren) {
      onToggle(item.id);
    }
  };

  return (
    <>
      <div className="relative">
        <div
          className={`group flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm transition ${
            selected
              ? "bg-slate-100 text-slate-900"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
          }`}
          style={{ paddingLeft: `${8 + level * 18}px` }}
        >
          {/* Expand */}
          <button
            type="button"
            onClick={() => {
              if (hasChildren) {
                onToggle(item.id);
              }
            }}
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${
              hasChildren
                ? "text-slate-400 hover:bg-slate-200 hover:text-slate-700"
                : "cursor-default"
            }`}
            aria-label={
              hasChildren
                ? expanded
                  ? "Collapse folder"
                  : "Expand folder"
                : undefined
            }
          >
            {hasChildren ? (
              expanded ? (
                <ChevronDown size={15} />
              ) : (
                <ChevronRight size={15} />
              )
            ) : null}
          </button>

          {/* Item */}
          <button
            type="button"
            onClick={handleClick}
            className="flex min-w-0 flex-1 items-center gap-2 text-left"
          >
            {item.type === "folder" ? (
              expanded ? (
                <FolderOpen
                  size={17}
                  className="shrink-0 text-amber-500"
                />
              ) : (
                <Folder
                  size={17}
                  className="shrink-0 text-amber-500"
                />
              )
            ) : (
              <File
                size={17}
                className="shrink-0 text-slate-400"
              />
            )}

            <span className="truncate">{item.name}</span>
          </button>

          {/* Actions */}
          {(onAddFolder || onDelete) && (
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenMenuId(menuOpen ? null : item.id);
                }}
                className="flex h-7 w-7 items-center justify-center rounded-md text-slate-300 opacity-0 transition hover:bg-slate-200 hover:text-slate-700 group-hover:opacity-100"
                aria-label="Folder actions"
              >
                <MoreHorizontal size={15} />
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-8 z-30 w-40 overflow-hidden rounded-lg border border-slate-200 bg-white p-1 shadow-lg">
                  {onAddFolder && item.type === "folder" && (
                    <button
                      type="button"
                      onClick={() => {
                        setOpenMenuId(null);
                        onAddFolder(item.id);
                      }}
                      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-xs text-slate-700 hover:bg-slate-50"
                    >
                      <Plus size={14} />
                      Add subfolder
                    </button>
                  )}

                  {onDelete && (
                    <button
                      type="button"
                      onClick={() => {
                        setOpenMenuId(null);
                        onDelete(item);
                      }}
                      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-xs text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {expanded && hasChildren && (
        <div>
          {item.children!.map((child) => (
            <FolderNode
              key={child.id}
              item={child}
              level={level + 1}
              selectedId={selectedId}
              expandedIds={expandedIds}
              onToggle={onToggle}
              onSelect={onSelect}
              onAddFolder={onAddFolder}
              onDelete={onDelete}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default function FolderTree({
  items = defaultItems,
  selectedId,
  onSelect,
  onAddFolder,
  onDelete,
  className = "",
}: FolderTreeProps) {
  const initialExpanded = useMemo(() => {
    const ids = new Set<string>();

    const collect = (nodes: FolderTreeItem[]) => {
      nodes.forEach((node) => {
        if (node.type === "folder" && node.children?.length) {
          ids.add(node.id);
          collect(node.children);
        }
      });
    };

    collect(items);

    return ids;
  }, [items]);

  const [expandedIds, setExpandedIds] =
    useState<Set<string>>(initialExpanded);

  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedIds((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const expandAll = () => {
    const ids = new Set<string>();

    const collect = (nodes: FolderTreeItem[]) => {
      nodes.forEach((node) => {
        if (node.type === "folder" && node.children?.length) {
          ids.add(node.id);
          collect(node.children);
        }
      });
    };

    collect(items);
    setExpandedIds(ids);
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Folders
          </h3>
          <p className="text-[11px] text-slate-500">
            Project documents and files
          </p>
        </div>

        {onAddFolder && (
          <button
            type="button"
            onClick={() => onAddFolder()}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white transition hover:bg-slate-800"
            title="Add folder"
          >
            <Plus size={16} />
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-2">
        <button
          type="button"
          onClick={expandAll}
          className="text-[11px] font-medium text-slate-500 hover:text-slate-900"
        >
          Expand all
        </button>

        <span className="text-slate-300">•</span>

        <button
          type="button"
          onClick={collapseAll}
          className="text-[11px] font-medium text-slate-500 hover:text-slate-900"
        >
          Collapse all
        </button>
      </div>

      {/* Tree */}
      <div className="max-h-[600px] overflow-y-auto p-2">
        {items.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <Folder
              size={24}
              className="mx-auto text-slate-300"
            />
            <p className="mt-2 text-sm font-medium text-slate-500">
              No folders found
            </p>
          </div>
        ) : (
          items.map((item) => (
            <FolderNode
              key={item.id}
              item={item}
              level={0}
              selectedId={selectedId}
              expandedIds={expandedIds}
              onToggle={handleToggle}
              onSelect={onSelect}
              onAddFolder={onAddFolder}
              onDelete={onDelete}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
            />
          ))
        )}
      </div>
    </div>
  );
}