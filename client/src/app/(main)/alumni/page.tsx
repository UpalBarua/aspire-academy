import React from "react";
import AlumniCard from "@/components/ui/AlumniCard";

const AlumniPage = () => {
  const alumnis = [
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "John",
      batch: "B001",
      department: "Marketing",
      _id: "1",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Alice",
      batch: "B002",
      department: "Finance",
      _id: "2",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Michael",
      batch: "B003",
      department: "Human Resources",
      _id: "3",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Emily",
      batch: "B004",
      department: "Engineering",
      _id: "4",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "David",
      batch: "B005",
      department: "Research & Development",
      _id: "5",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Sophia",
      batch: "B006",
      department: "Customer Support",
      _id: "6",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "William",
      batch: "B007",
      department: "Sales",
      _id: "7",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Olivia",
      batch: "B008",
      department: "Legal",
      _id: "8",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "James",
      batch: "B009",
      department: "Operations",
      _id: "9",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Emma",
      batch: "B010",
      department: "Information Technology",
      _id: "10",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Alexander",
      batch: "B011",
      department: "Quality Assurance",
      _id: "11",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Charlotte",
      batch: "B012",
      department: "Training",
      _id: "12",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Daniel",
      batch: "B013",
      department: "Supply Chain",
      _id: "13",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Ava",
      batch: "B014",
      department: "Product Management",
      _id: "14",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Mason",
      batch: "B015",
      department: "Public Relations",
      _id: "15",
    },
    {
      image: "https://i.ibb.co/y4R3g86/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      name: "Ella",
      batch: "B016",
      department: "Administration",
      _id: "16",
    },
  ];

  return (
    <div className="mx-auto w-[90%] lg:w-[92%] xl:w-[87%]">
      <div className="mx-auto w-full lg:mx-0 ">
        <h2 className="text-3xl font-semibold  tracking-tight text-purple-600 hover:text-purple-800 dark:text-purple-500 sm:text-4xl ">
          OUR ALUMNIS
        </h2>
        <div className="mt-1">
          <span className="inline-block h-1 w-40 rounded-full bg-purple-500 "></span>
          <span className="ml-1 inline-block h-1 w-5 rounded-full bg-purple-500 "></span>
          <span className="ml-1 inline-block h-1 w-2 rounded-full bg-purple-500 "></span>
        </div>
      </div>
      <div className="mx-auto mt-8 grid grid-cols-1   gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
        {alumnis?.map((singleALumni) => (
          <AlumniCard key={singleALumni._id} alumni={singleALumni} />
        ))}
      </div>
    </div>
  );
};

export default AlumniPage;
