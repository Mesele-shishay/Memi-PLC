"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Search as SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { flattenSearchItems } from "@/components/navigation-data";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = React.useState("");
  const items = React.useMemo(() => flattenSearchItems(), []);
  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) => it.label.toLowerCase().includes(q));
  }, [items, query]);

  React.useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed left-1/2 top-24 z-50 w-[min(680px,90vw)] -translate-x-1/2 rounded-2xl bg-white p-2 shadow-2xl focus:outline-hidden">
          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2">
            <SearchIcon className="size-4 text-gray-500" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages, sections..."
              className="flex-1 bg-transparent outline-none text-sm"
              aria-label="Search"
            />
            <kbd className="hidden md:inline-flex items-center gap-1 rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-600">
              Ctrl K
            </kbd>
          </div>
          <div className="mt-2 max-h-[50vh] overflow-y-auto rounded-xl border border-gray-200 bg-white">
            {filtered.length === 0 ? (
              <div className="p-4 text-sm text-gray-500">No results</div>
            ) : (
              <ul>
                {filtered.map((it) => (
                  <li key={`${it.label}-${it.url}`}>
                    <button
                      className="flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-gray-50"
                      onClick={() => {
                        onOpenChange(false);
                        router.push(it.url);
                      }}
                    >
                      {it.icon ? (
                        <it.icon className="size-4 text-gray-500" />
                      ) : null}
                      <span className="text-sm">{it.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
