import { ThemeToggle } from "@/components/ui/theme-toggle";

export default async function Home() {
  return (
    <div>
      <h1 className="p-4 text-2xl font-medium">Aspire University</h1>
      <ThemeToggle />
    </div>
  );
}
