import { Fragment } from "react";

type SectionHeadingProps = {
  heading: string;
  subHeading: string;
};

export function SectionHeading({
  heading,
  subHeading,
}: Readonly<SectionHeadingProps>) {
  return (
    <Fragment>
      <h2 className="pb-6 text-center text-4xl font-extrabold capitalize tracking-tight md:text-5xl lg:pb-8">
        {heading}
      </h2>
      <p className="mx-auto max-w-prose text-pretty px-4 pb-14 text-center leading-relaxed text-foreground/80">
        {subHeading}
      </p>
    </Fragment>
  );
}
