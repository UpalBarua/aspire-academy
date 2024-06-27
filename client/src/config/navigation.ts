import { PersonStanding, Smile, Users, School } from "lucide-react";

export const mainNavLinks = [
  {
    label: "Home",
    href: "/",
    description: "",
    subLinks: [],
  },
  {
    label: "Courses",
    href: "",
    description:
      "For sighted users to preview content available behind a link.",
    subLinks: [
      {
        label: "All Courses",
        href: "/courses",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        label: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
      },
      {
        label: "Tabs",
        href: "/docs/primitives/tabs",
        description:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      {
        label: "Tabs",
        href: "/docs/primitives/tabs",
        description:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      {
        label: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
          "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      },
    ],
  },
  {
    label: "Others",
    href: "",
    description:
      "For sighted users to preview content available behind a link.",
    subLinks: [
      {
        label: "Alumni",
        href: "/alumni",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        label: "Events",
        href: "/events",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        label: "Blog",
        href: "/blog",
        description: "Visually or semantically separates content.",
      },
      {
        label: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
        subLinks: [],
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    subLinks: [],
  },
  {
    label: "Hover Card",
    href: "",
    description:
      "For sighted users to preview content available behind a link.",
    subLinks: [
      {
        label: "Progress",
        href: "/docs/primitives/progress",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        label: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
      },
      {
        label: "Tabs",
        href: "/docs/primitives/tabs",
        description:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      {
        label: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
          "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      },
    ],
  },
] as const;

export const adminNavigation = [
  {
    label: "Courses",
    href: "/admin/courses",
    Icon: School,
  },
  {
    label: "Students",
    href: "/admin/students",
    Icon: Users,
  },
  {
    label: "Mentors",
    href: "/admin/students",
    Icon: PersonStanding,
  },
  {
    label: "Events",
    href: "/admin/students",
    Icon: Smile,
  },
  {
    label: "Help Desk",
    href: "/admin/help-desk",
    Icon: Smile,
  },
  {
    label: "All Blog",
    href: "/admin/all-blog",
    Icon: Smile,
  },

  {
    label: "All Event",
    href: "/admin/all-event",
    Icon: Smile,
  },
] as const;
