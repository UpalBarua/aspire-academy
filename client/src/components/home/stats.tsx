import CountUp from "@/components/ui/count-up";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { stats } from "@/config";

export function Stats() {
  return (
    <section className="pb-section container">
      <div className="grid grid-cols-2 gap-16 rounded-3xl border border-border/25 bg-primary p-4 text-background shadow">
        <div className="flex flex-col justify-center gap-2 p-6">
          <span className="font-medium">Journey Of Aspire Academy</span>
          <h2 className="text-start text-4xl font-extrabold capitalize tracking-tight md:text-5xl lg:leading-[1.35]">
            Prepared over 1500 students and hundreds of teams nationwide.
          </h2>
          <p className="max-w-prose leading-relaxed text-background/80">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect Our Users.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-background text-base"
            >
              About Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-background bg-transparent text-base"
            >
              <span>Blog</span> <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ Icon, number, unit, text }) => (
            <div className="flex flex-col justify-center space-y-2 rounded-3xl border border-border/25 bg-background p-8 text-foreground shadow">
              <Icon className="size-10" />
              <div className="pt-2 text-2xl font-medium tracking-tight">
                <CountUp end={number} enableScrollSpy />
                <span>+ {unit}</span>
              </div>
              <p className="text-pretty leading-relaxed text-foreground/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
