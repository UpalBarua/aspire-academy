import {
  Boxes,
  Computer,
  Factory,
  GraduationCap,
  Laptop,
  ListPlus,
  Pen,
  Projector,
} from "lucide-react";
import React from "react";

export default function WhatWeProvide() {
  const iconSize = 40;
  const allProvide = [
    {
      id: 1,
      icon: <Computer size={iconSize} color="#EEB868" />,
      title: "Live courses",
      description:
        "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
    },
    {
      id: 1,
      icon: <Projector size={iconSize} color="#94D1BE" />,
      title: "Support Session",
      description:
        "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
    },
    {
      id: 1,
      icon: <Factory size={iconSize} color="#FF4B3E" />,
      title: "Industry Level Project",
      description:
        "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
    },
    {
      id: 1,
      icon: <ListPlus size={iconSize} color="#FFB20F" />,
      title: "Progress Tracking",
      description:
        "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
    },
    {
      id: 1,
      icon: <Boxes size={iconSize} color="#A8C686" />,
      title: "Mentor Gudiness",
      description:
        "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
    },
    {
      id: 1,
      icon: <GraduationCap size={iconSize} color="#E2A0FF" />,
      title: "Job Placement",
      description:
        "We try to give lot of support from us.We hope that support change her mind to access it and there are lot of student do it .We hope we give a proper platform.",
    },
  ];

  return (
    <section className="mx-auto mb-8  max-w-7xl ">
      <div className=" pb-8 text-center">
        <h1 className="pb-3 text-3xl font-bold text-primary">
          What We Provide
        </h1>
        <p>
          Those service always we can do it properly .There are lot of student
          happy about it<br></br> and hopefully you can take a proper benefit
          from here.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {allProvide?.map((provide) => (
          <div key={provide?.id} className="rounded-md bg-secondary p-6">
            <div className="flex justify-center">
              <h2>{provide?.icon} </h2>
            </div>

            <h1 className="pb-3  text-center text-[24px] font-semibold">
              {provide?.title}
            </h1>
            <p className="pb-6">{provide?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
