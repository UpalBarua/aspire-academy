import {
  Code,
  Settings,
  BarChart,
  Database,
  Camera,
  Lock,
  Shield,
} from "lucide-react";

export const mainNavLinks = [
  {
    label: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
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
        label: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
        subLinks: [],
      },
    ],
  },
  {
    label: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
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

export const categories = [
  { category: "Web & App Development", Icon: Code },
  { category: "Product Management & Design", Icon: Settings },
  { category: "Business & Marketing", Icon: BarChart },
  { category: "Data Engineering", Icon: Database },
  { category: "Creatives", Icon: Camera },
  { category: "Blockchain Development", Icon: Lock },
  { category: "Cyber Security", Icon: Shield },
] as const;
