"use client";

import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconList,
  IconListNumbers,
  IconClearFormatting,
  IconLink,
} from "@tabler/icons-react";

type TipTapEditorProps = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  className?: string;
};

export function TipTapEditor({
  value,
  onChange,
  placeholder,
  className,
}: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { keepMarks: true },
        orderedList: { keepMarks: true },
      }),
      Underline,
      Link.configure({ openOnClick: true, autolink: true }),
      Placeholder.configure({
        placeholder: placeholder || "Write your description...",
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none min-h-40 w-full bg-white p-3 outline-none",
      },
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  function addLink() {
    if (!editor) return;
    const url = window.prompt("Enter URL");
    if (!url) return;
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }

  return (
    <div
      className={cn(
        "rounded-lg border border-primary/20 overflow-hidden",
        className
      )}
    >
      <div className="flex items-center gap-1 border-b bg-primary-50/40 px-2 py-1">
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBold().run()}
          aria-pressed={editor.isActive("bold")}
        >
          <IconBold />
        </Button>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          aria-pressed={editor.isActive("italic")}
        >
          <IconItalic />
        </Button>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          aria-pressed={editor.isActive("underline")}
        >
          <IconUnderline />
        </Button>
        <div className="mx-1 h-6 w-px bg-primary/20" />
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          aria-pressed={editor.isActive("bulletList")}
        >
          <IconList />
        </Button>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          aria-pressed={editor.isActive("orderedList")}
        >
          <IconListNumbers />
        </Button>
        <div className="mx-1 h-6 w-px bg-primary/20" />
        <Button type="button" size="sm" variant="ghost" onClick={addLink}>
          <IconLink />
        </Button>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() =>
            editor.chain().focus().unsetAllMarks().clearNodes().run()
          }
        >
          <IconClearFormatting />
        </Button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
