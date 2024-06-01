import {
  Code,
  Settings,
  BarChart,
  Database,
  Camera,
  Lock,
  Shield,
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
