import Testimonial from "@/components/testimonial";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default async function Home() {
  return (
    <div>
      <h1 className="p-4 text-2xl font-medium">Aspire Academy</h1>
      <ThemeToggle />
      <Testimonial />
    </div>
  );
}
