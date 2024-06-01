import {
  BarChart,
  Boxes,
  BriefcaseBusiness,
  Camera,
  Code,
  Computer,
  Database,
  Factory,
  Globe2,
  GraduationCap,
  Layers,
  ListPlus,
  Lock,
  Projector,
  Settings,
  Shield,
  Users,
} from "lucide-react";

export const categories = [
  { category: "Web & App Development", Icon: Code },
  { category: "Product Management & Design", Icon: Settings },
  { category: "Business & Marketing", Icon: BarChart },
  { category: "Data Engineering", Icon: Database },
  { category: "Creatives", Icon: Camera },
  { category: "Blockchain Development", Icon: Lock },
  { category: "Cyber Security", Icon: Shield },
] as const;

export const facilities = [
  {
    Icon: Computer,
    color: "#EEB868",
    title: "Live courses",
    description:
      "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
  },
  {
    Icon: Projector,
    color: "#94D1BE",
    title: "Support Session",
    description:
      "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
  },
  {
    Icon: Factory,
    color: "#FF4B3E",
    title: "Industry Level Project",
    description:
      "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
  },
  {
    Icon: ListPlus,
    color: "#FFB20F",
    title: "Progress Tracking",
    description:
      "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
  },
  {
    Icon: Boxes,
    color: "#A8C686",
    title: "Mentor Gudiness",
    description:
      "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
  },
  {
    Icon: GraduationCap,
    color: "#E2A0FF",
    title: "Job Placement",
    description:
      "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
  },
] as const;

export const stats = [
  {
    Icon: Layers,
    number: 20,
    unit: "Courses",
    text: "We Provide Various Kinds of Courses.",
  },
  {
    Icon: Users,
    number: 1500,
    unit: "Learners",
    text: "We are a grate family of 1,500 people.",
  },
  {
    Icon: BriefcaseBusiness,
    number: 500,
    unit: "Job Placed",
    text: "Successfuly completed students get job nationwide.",
  },
  {
    Icon: Globe2,
    number: 20,
    unit: "Teams",
    text: "There are 20 teams working here.",
  },
] as const;
