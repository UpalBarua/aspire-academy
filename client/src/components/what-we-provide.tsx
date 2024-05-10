"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import image1 from "../assets/image/2023-09-26T07-03-07.734Z-icon-1.png";
import image2 from "../assets/image/2023-09-26T07-03-27.927Z-icon-2.png";
import image3 from "../assets/image/2023-09-26T07-03-45.997Z-icon-3.png";
import image4 from "../assets/image/2023-09-26T07-04-03.737Z-icon-4.png";
import image5 from "../assets/image/2023-09-26T07-04-21.951Z-icon-5.png";
import image6 from "../assets/image/2023-09-26T07-04-44.253Z-icon-6.png";

type ProvideData ={
  icon: StaticImageData;
  title: string;
  description: string
}


const WhatWeProvide = () => {
  const courses: ProvideData[] = [
    {
      icon: image1,
      title: "Industry Focused Live Courses",
      description:
        "Join our guideline based & industry frocused live courses, start your career journey.",
    },
    {
      icon: image2,
      title: "Interactive Live Class",
      description:
        "Skill development will now perfect with industry experts through consistent live class, conceptual class, and support classes.",
    },
    {
      icon: image3,
      title: "Module Based Study Plan",
      description:
        "No chance of falling behind with a module-wise structured study plan packed with quizzes, assignments and live tests.",
    },
    {
      icon: image4,
      title: "Realtime Progress Tracking",
      description:
        "Track real time progress, see position on leader board and get ahead of everyone else in the competition.",
    },
    {
      icon: image5,
      title: "Learn from Industry Experts",
      description:
        "Develop skills live with the best industry experts, ask questions, learn and get the best guidance in the country.",
    },
    {
      icon: image6,
      title: "Intensive Job Plaecment Support",
      description:
        "After Course completion, get intensive job placement support including CV, profile build and job application.",
    },
  ];

  const [,setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold   md:text-3xl">
        What We Provide
      </h1>
      <h2 className="text-center">
        See what you are getting after joining our courses
      </h2>
      <div className="mx-auto mt-10 grid w-full grid-cols-1 md:w-11/12 md:grid-cols-2 lg:w-10/12 lg:grid-cols-3">
        {Array.isArray(courses) &&
          courses.map((course, index) => (
            <div
              key={index}
              className="px-5 lg:px-8 py-5 lg:py-10"
              style={{
                ...(window.innerWidth >= 768 && {
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 5px 20px 0 rgba(0, 0, 0, 0.19)",
                }),
              }}
            >
              <div className="flex justify-center">
                <Image
                  src={course.icon}
                  alt=""
                  className="flex h-12 w-12 justify-center text-center"
                />
              </div>
              <h1 className="py-[6px] text-center text-xl font-black">
                {course.title}
              </h1>
              <p className="text-justify text-[15.5px]">{course.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WhatWeProvide;
