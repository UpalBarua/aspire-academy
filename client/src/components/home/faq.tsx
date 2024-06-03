import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { faqs } from "@/config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Faq() {
  return (
    <section className="pb-section container grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-start text-4xl font-extrabold capitalize leading-[1.25] tracking-tight md:text-5xl md:leading-[1.35]">
          Answers to Your Frequently Asked Questions
        </h2>
        <p className="max-w-[25rem] text-pretty pb-2 leading-relaxed text-foreground/80">
          Find answers to the most commonly asked questions about our programs,
          admissions, and campus life. If you need more information, please
          contact us directly.
        </p>
        <Link
          href="/courses"
          className={buttonVariants({
            size: "lg",
            className: "!text-base",
          })}
        >
          <span>Ask Your Question</span>
          <ArrowRight />
        </Link>
      </div>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map(({ id, question, answer }) => (
          <AccordionItem
            className="rounded-2xl border border-border/25 bg-secondary/50 px-5 py-2 shadow"
            value={id + ""}
          >
            <AccordionTrigger className="text-start text-lg outline-none hover:no-underline">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-pretty text-base leading-relaxed text-foreground/80">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
