"use client";

import { Aperture, CalendarDays, Shapes } from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function AdminPage() {
  const adminInfo = [
    {
      id: 1,
      name: "Our course",
      course: "17",
    },
    {
      id: 2,
      name: "Member",
      course: "35",
    },
    {
      id: 1,
      name: "Student",
      course: "2100",
    },
    {
      id: 1,
      name: "Connect company",
      course: "110",
    },
  ];
  const data = [
    { name: " 2021", uv: 40400, pv: 1400, amt: 2400 },
    { name: " 2022", uv: 40300, pv: 2200, amt: 2300 },
    { name: " 2023", uv: 50100, pv: 2100, amt: 2100 },
    { name: " 2024", uv: 50200, pv: 2200, amt: 2300 },
  ];

  const runningCourse = [
    {
      id: 1,
      name: "video editing",
      enroll: 214,
      seatLeft: 20,
      lastDate: "04-06-2024",
    },
    {
      id: 2,
      name: "graphic design",
      enroll: 214,
      seatLeft: 20,
      lastDate: "04-06-2024",
    },
    {
      id: 3,
      name: "web development",
      enroll: 214,
      seatLeft: 20,
      lastDate: "04-06-2024",
    },
    {
      id: 4,
      name: "ui ux design",
      enroll: 214,
      seatLeft: 20,
      lastDate: "04-06-2024",
    },
    {
      id: 5,
      name: "c++ learning",
      enroll: 214,
      seatLeft: 20,
      lastDate: "04-06-2024",
    },
    {
      id: 6,
      name: "networking",
      enroll: 214,
      seatLeft: 20,
      lastDate: "04-06-2024",
    },
    {
      id: 7,
      name: "cyber expart",
      enroll: 214,
      seatLeft: 20,
      lastDate: "04-06-2024",
    },
    {
      id: 8,
      name: "data structure",
      enroll: 214,
      seatLeft: 20,
      lastDate: "04-06-2024",
    },
  ];
  const UpcomingCourse = [
    {
      id: 1,
      name: "python development",
      start: "07-06-24",
    },
    {
      id: 2,
      name: "java development",
      start: "07-06-24",
    },
    {
      id: 1,
      name: "native development",
      start: "12-06-24",
    },
    {
      id: 1,
      name: "app development",
      start: "07-06-24",
    },
  ];
  return (
    <section className="mt-4">
      <h1 className="pb-4 pt-4 text-2xl font-bold text-primary">
        Welcome in dashboard
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {adminInfo?.map((info) => (
          <div
            key={info?.id}
            className="mx-auto h-14 w-60 rounded-md bg-secondary p-4 pt-4"
          >
            <h1 className="flex items-center gap-2 font-bold">
              <Aperture />
              {info?.name} {info?.course}
            </h1>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <div>
          <LineChart
            width={700}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>

          <h1 className="text-accent-400 text-center">
            our student chart progress
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[22px] font-bold">Hiring people of us</h1>
          <h1 className="rounded-md bg-primary p-4 text-[18px] font-bold text-black">
            Remote in student: 2000
          </h1>
          <h1 className="rounded-sm bg-primary p-4 text-[18px] font-bold text-black">
            onsite in place: 1000
          </h1>
          <h1 className="rounded-md bg-primary p-4 text-[18px] font-bold text-black">
            hybrid in rows: 200
          </h1>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="max-w-3xl flex-1 p-2 text-black sm:p-4">
          <h2 className="mb-4 text-2xl font-semibold leading-tight text-primary">
            Running Courses
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="text-white dark:bg-secondary">
                <tr className="text-left">
                  <th className="p-3">ID</th>
                  <th className="p-3">Course Name</th>
                  <th className="p-3">Enroll</th>
                  <th className="p-3">Seat Left</th>
                  <th className="p-3">Last Date</th>
                </tr>
              </thead>
              <tbody>
                {runningCourse.map((course) => (
                  <tr
                    key={course.id}
                    className="border-b border-opacity-20 text-white dark:border-gray-300"
                  >
                    <td className="p-3">{course.id}</td>
                    <td className="p-3">{course.name}</td>
                    <td className="p-3">{course.enroll}</td>
                    <td className="p-3">{course.seatLeft}</td>
                    <td className="p-3">{course.lastDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="pb-2 text-2xl font-bold">Upcoming Course</h1>
          <div className="flex flex-col gap-2">
            {UpcomingCourse?.map((course) => (
              <div key={course?.id} className="rounded-sm bg-secondary p-6">
                <h1 className="flex items-center gap-2">
                  <Shapes />
                  {course?.name}
                </h1>
                <h1 className="mt-2 flex items-center gap-2 rounded-sm bg-primary p-2 font-bold text-black">
                  Start it :<CalendarDays /> {course?.start}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
