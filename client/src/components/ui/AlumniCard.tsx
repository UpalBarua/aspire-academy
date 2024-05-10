import { GraduationCap, Landmark } from "lucide-react";
import Image from "next/image";
import React from "react";

type Talumni = {
  image: string;
  name: string;
  batch: string;
  department: string;
  _id: string;
};
const AlumniCard = ({ alumni }: { alumni: Talumni }) => {
  const { image, name, batch, department } = alumni;

  return (
    <div className="relative grid h-[30rem] w-full  flex-col items-end    overflow-hidden rounded-xl bg-white  bg-clip-border text-gray-700">
      <div
        className={`absolute inset-0 m-0 h-full w-full overflow-hidden  bg-transparent  bg-cover  bg-center text-gray-700 shadow-none`}
      >
        <Image
          height={500}
          width={500}
          src={image}
          className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
          alt=""
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/50"></div>
      </div>
      <div className="relative  px-6 py-8 text-start">
        <h2 className="mb-2  font-sans text-3xl  font-medium text-white">
          {name}
        </h2>
        <h5 className="mb-2 flex items-center gap-2 font-sans text-lg font-semibold leading-snug tracking-normal text-gray-400 antialiased ">
          <Landmark size={20} className="text-white" /> {department}
        </h5>
        <h5 className="mb-2 flex items-center gap-2 font-sans text-sm font-semibold leading-snug tracking-normal text-gray-400 antialiased ">
          <GraduationCap size={16} className="text-white" /> {batch}
        </h5>
      </div>
    </div>
  );
};

export default AlumniCard;
