"use client";
import { BriefcaseBusiness, Globe, Layers, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import CountUp, { useCountUp } from "react-countup";
import { Button } from "./ui/button";

const Counter = () => {
  useCountUp({
    ref: "counter",
    start: 0,
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    duration: 120,
  });
  return (
    <section>
      <div className="mx-auto items-center px-4 py-8 md:w-[90%] lg:grid lg:grid-cols-4 lg:gap-16 lg:px-6 lg:py-24 xl:gap-24">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-primary">
            Journey Of Aspire Academy
          </p>
          <h2 className="mb-4 mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-3xl">
            Prepared by over 15000 users and thousands of teams worldwide.
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect Our Users.
          </p>
          <div className="flex items-center gap-4 pt-6">
            <Button className="rounded-md font-bold duration-300 hover:bg-secondary hover:text-white ">
              AboutUs
            </Button>
            <Button className="rounded-md bg-secondary font-bold text-white">
              Alumni
            </Button>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <Layers
              className="mb-2  h-10 w-10 text-black dark:text-primary"
              size={20}
            />

            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              <CountUp end={43} enableScrollSpy /> Live courses
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              We Provide Various Kinds of Courses
            </p>
          </div>
          <div>
            <svg
              className="mb-2 h-10 w-10 text-black dark:text-primary md:h-12 md:w-12"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              <CountUp end={15000} enableScrollSpy />+ Learners
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              We are a grate family of 15000 people.
            </p>
          </div>
          <div>
            <BriefcaseBusiness
              className="mb-2  h-10 w-10 text-black dark:text-primary"
              size={20}
            />

            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              <CountUp end={5000} enableScrollSpy />+ Job placement
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Successfuly completed Students Get job worldwide!
            </p>
          </div>
          <div>
            <Globe
              className="mb-2  h-10 w-10 text-black dark:text-primary"
              size={20}
            />

            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              <CountUp end={50} enableScrollSpy />+ Team
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              There are 50 member working here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
