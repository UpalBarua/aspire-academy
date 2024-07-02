import {
  AreaChart,
  CalendarClock,
  MonitorStop,
  NotebookPen,
  PersonStanding,
  School,
  SquareGanttChart,
  Users,
  UsersRound,
} from "lucide-react";

type MainNavLink = {
  label: string;
  href?: string;
  description?: string;
  subLinks?: {
    label: string;
    href: string;
    description: string;
  }[];
};

// TODO: href depends on the subLinks array

export const mainNavLinks: MainNavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Community",
    description: "Engage with other members and access exclusive content.",
    subLinks: [
      {
        label: "Alumni",
        href: "/alumni",
        description:
          "Connect with past graduates and see their success stories.",
      },
      {
        label: "Help Desk",
        href: "/help-desk",
        description: "Get support for any issues or questions you have.",
      },
      {
        label: "Contact Us",
        href: "/contact-us",
        description: "Reach out to us for any inquiries or assistance.",
      },
    ],
  },
  {
    label: "Resources",
    subLinks: [
      {
        label: "Blog",
        href: "/blog",
        description: "Read articles and updates from our team and community.",
      },
      {
        label: "Lab Facilities",
        href: "/lab-facilities",
        description:
          "Explore the state-of-the-art facilities available to students.",
      },
      {
        label: "Events",
        href: "/events",
        description: "Stay updated with our upcoming events and workshops.",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];

export const adminNavigation = [
  {
    label: "Stats",
    href: "/admin",
    Icon: AreaChart,
  },
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
    label: "Help Desk",
    href: "/admin/help-desk",
    Icon: MonitorStop,
  },
  {
    label: "Blog",
    href: "/admin/all-blog",
    Icon: NotebookPen,
  },
  {
    label: "Event",
    href: "/admin/all-event",
    Icon: CalendarClock,
  },
  {
    label: "Testimonial",
    href: "/admin/all-testimonial",
    Icon: SquareGanttChart,
  },
  {
    label: "Alumni",
    href: "/admin/all-alumni",
    Icon: UsersRound,
  },
  {
    label: "Management",
    href: "/admin/all-management",
    Icon: Users,
  },
] as const;
