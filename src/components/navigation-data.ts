import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFolder,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  type Icon,
} from "@tabler/icons-react";

export type NavItem = {
  title: string;
  url: string;
  icon?: Icon;
  items?: { title: string; url: string }[];
};

export type SecondaryItem = {
  title: string;
  url: string;
  icon: Icon;
};

export type DocumentItem = {
  name: string;
  url: string;
  icon: Icon;
};

export const sidebarData: {
  logo: string;
  user: { name: string; email: string; avatar: string };
  navMain: NavItem[];
  navSecondary: SecondaryItem[];
} = {
  logo: "MEMi",
  user: {
    name: "Admin  ",
    email: "admin@memiplc.com",
    avatar:
      "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Blog",
      url: "/dashboard/blog",
      icon: IconListDetails,
      items: [
        { title: "All Posts", url: "/dashboard/blog" },
        { title: "Add Post", url: "/dashboard/blog/new" },
      ],
    },
    {
      title: "Courses",
      url: "/dashboard/courses",
      icon: IconChartBar,
      items: [
        { title: "All Courses", url: "/dashboard/courses" },
        { title: "Add Course", url: "/dashboard/courses/new" },
      ],
    },
    {
      title: "Contact",
      url: "/dashboard/contact",
      icon: IconFolder,
    },
    {
      title: "Home",
      url: "/dashboard/home",
      icon: IconUsers,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
};

export function flattenSearchItems() {
  const items: { label: string; url: string; icon?: Icon }[] = [];
  for (const item of sidebarData.navMain) {
    items.push({ label: item.title, url: item.url, icon: item.icon });
    if (Array.isArray(item.items)) {
      for (const sub of item.items) {
        items.push({
          label: `${item.title} · ${sub.title}`,
          url: sub.url,
          icon: item.icon,
        });
      }
    }
  }

  for (const sec of sidebarData.navSecondary) {
    if (sec.title !== "Search") {
      items.push({ label: sec.title, url: sec.url, icon: sec.icon });
    }
  }
  return items;
}
