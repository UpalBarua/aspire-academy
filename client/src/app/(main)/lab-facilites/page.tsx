import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  Blocks,
  Boxes,
  BriefcaseBusiness,
  Mail,
  PhoneCall,
  Target,
} from "lucide-react";
import React from "react";

const LabFacilities = () => {
  const labImage = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1637249820580-a877474a889d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1565221287653-9a2713dbe4ef?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1529257608761-0ef888111001?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1705475025559-ad8efdedc74f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1596729235333-ab2c2ecb5410?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1548884655-803db09fcbf6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1582719201952-ea63ac1671dc?q=80&w=1427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const labMan = [
    {
      id: 1,
      name: "Asif Ahmed",
      position: "Cis Expert",
      gmail: "asif55@gmail.com",
      mobile: "01891556263",
      image:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "Asif Ahmed",
      position: "Cis Expert",
      gmail: "asif55@gmail.com",
      mobile: "01891556263",
      image:
        "https://images.unsplash.com/photo-1617629642642-e36339a4d115?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "Asif Ahmed",
      position: "Cis Expert",
      gmail: "asif55@gmail.com",
      mobile: "01891556263",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="pb-10">
      {/* banner of lab */}
      <div>
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:px-10 md:py-14 lg:px-14 xl:max-w-3xl">
          <h1 className="text-2xl font-bold leading-none sm:text-4xl">
            Welcome to the esteemed{" "}
            <span className="text-primary">Aspire Academy</span> Lab, where
            innovation and excellence converge!
          </h1>
          <p className="mb-6 mt-8 px-8 text-lg">
            Your lab is your destination.We are always try to give you a great
            platform for your future.
          </p>
          <div className="flex flex-wrap justify-center">
            <Button className="m-2 rounded border-2 px-8 py-3 text-lg font-semibold hover:border-primary hover:bg-transparent hover:text-white">
              Watch now
            </Button>
            <Button className="m-2 rounded border bg-transparent px-8 py-3 text-lg text-white hover:bg-primary hover:text-black dark:border-primary">
              Meet Team
            </Button>
            <hr className="mx-auto mt-6 w-96" />
          </div>
        </div>
      </div>
      {/* second section */}
      <div>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col space-y-6 rounded-sm bg-secondary px-6 py-8 dark:text-gray-50 sm:p-8 lg:w-1/2 lg:p-12 xl:w-2/5">
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-lg font-medium leading-snug">
                  <BadgeCheck size="24" />
                  Collaboration Spaces
                </p>
                <p className="leading-snug">
                  Modern labs often include collaboration spaces such as
                  conference rooms and breakout areas, fostering teamwork and
                  interdisciplinary.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-lg font-medium leading-snug">
                  <BadgeCheck size="24" />
                  Technical Support
                </p>
                <p className="leading-snug">
                  Lab facilities typically have on-site technical support teams.
                  These teams assist with equipment maintenance,
                  troubleshooting.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-lg font-medium leading-snug">
                  <BadgeCheck size="24" />
                  Administrative Offices
                </p>
                <p className="leading-snug">
                  Administrative offices within lab facilities handle logistics,
                  grant management, and compliance with regulatory requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="aspect-video rounded-lg shadow-lg dark:bg-gray-500 sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="py-8">
        <div className="container mx-auto">
          <div className="mx-auto p-4 text-center md:px-10 lg:px-32 xl:max-w-3xl">
            <h2 className="text-2xl font-bold leading-none text-primary sm:text-3xl">
              What facilities we offer!
            </h2>
            <p className="my-4 px-8 text-[18px]">
              In conclusion, well-equipped lab facilities are vital to advancing
              scientific knowledge and technological innovation.
            </p>
          </div>
          <div className="grid grid-cols-5 p-4 md:p-8">
            <div className="col-span-full flex justify-center px-4 md:col-span-1 md:flex-col md:items-start md:justify-start">
              <button className="border-b-2 p-2 dark:border-gray-700 md:border-b-0 md:border-l-2 md:py-3">
                Web
              </button>
              <button className="border-b-2 px-2 py-1 dark:border-primary md:border-b-0 md:border-l-2 md:py-3">
                App
              </button>
              <button className="border-b-2 px-2 py-1 dark:border-gray-700 md:border-b-0 md:border-l-2 md:py-3">
                Networking
              </button>
              <button className="border-b-2 px-2 py-1 dark:border-gray-700 md:border-b-0 md:border-l-2 md:py-3">
                Devops
              </button>
              <button className="border-b-2 px-2 py-1 dark:border-gray-700 md:border-b-0 md:border-l-2 md:py-3">
                Hacking
              </button>
            </div>
            <div className="col-span-full grid gap-12 py-4 text-center sm:grid-cols-2 md:col-span-4 md:text-left">
              <div className="flex flex-col items-center justify-center space-y-3 md:items-start md:justify-start">
                <Blocks size="34" />
                <h5 className="text-xl font-semibold">Research Equipment</h5>
                <p>
                  Our lab is equipped with state-of-the-art instruments such as
                  high-resolution microscopes, spectrometers.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:items-start md:justify-start">
                <Blocks size="34" />
                <h5 className="text-xl font-semibold">
                  Comprehensive Features
                </h5>
                <p>
                  We prioritize safety with features including fume hoods, eye
                  wash stations, and proper ventilation systems.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:items-start md:justify-start">
                <Blocks size="34" />
                <h5 className="text-xl font-semibold">
                  Specialized Workstations
                </h5>
                <p>
                  We provide tailored workspaces for different types of
                  research, including wet labs for biological .
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:items-start md:justify-start">
                <Blocks size="34" />
                <h5 className="text-xl font-semibold">Secure Storage</h5>
                <p>
                  ur lab includes a variety of storage solutions, such as
                  refrigerators, freezers, and controlled environment .
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="w-96" />
          </div>
        </div>
      </div>
      {/* four section */}
      <div className="p-4 lg:p-8">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="aspect-video h-80"
            />
            <div className="flex flex-1 flex-col justify-center p-6">
              <span className="text-xs uppercase">Join, it's free</span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="pt-4">
                Our lab is equipped with state-of-the-art instruments such as
                high-resolution microscopes, spectrometers, and chromatography
                systems to support a wide range of scientific investigations.We
                prioritize safety with features including fume hoods, eye wash
                stations, and proper ventilation systems, ensuring a secure
                environment for all researchers.cientific investigations.We
                prioritize safety with features including fume hoods, eye wash
                stations
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="aspect-video h-80"
            />
            <div className="flex flex-1 flex-col justify-center p-6">
              <span className="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D text-xs uppercase">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="pt-4">
                Our lab is equipped with state-of-the-art instruments such as
                high-resolution microscopes, spectrometers, and chromatography
                systems to support a wide range of scientific investigations.We
                prioritize safety with features including fume hoods, eye wash
                stations, and proper ventilation systems, ensuring a secure
                environment for all researchers.cientific investigations.We
                prioritize safety with features including fume hoods, eye wash
                stations
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://images.unsplash.com/photo-1607968565043-36af90dde238?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="aspect-video h-80"
            />
            <div className="flex flex-1 flex-col justify-center p-6">
              <span className="text-xs uppercase">Join, it's free</span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="pt-4">
                Our lab is equipped with state-of-the-art instruments such as
                high-resolution microscopes, spectrometers, and chromatography
                systems to support a wide range of scientific investigations.We
                prioritize safety with features including fume hoods, eye wash
                stations, and proper ventilation systems, ensuring a secure
                environment for all researchers.cientific investigations.We
                prioritize safety with features including fume hoods, eye wash
                stations
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*   {/* five section  */}
      <div>
        <h1 className="pb-6 pl-8 pt-14 text-2xl font-bold">
          Our All Lab Gallery
        </h1>
        <div className="ml-6 mr-6 grid grid-cols-1 gap-4 lg:grid-cols-4">
          {labImage?.map((lab) => (
            <div key={lab?.id}>
              <img
                className="aspect-square w-full rounded-md object-cover pb-4"
                src={lab?.image}
              />
            </div>
          ))}
        </div>
      </div>
      {/* six section */}
      <div className="mx-auto mt-8 max-w-7xl rounded-md bg-secondary p-4">
        <h1 className="flex items-center gap-4 pb-4 text-2xl font-bold text-primary">
          {" "}
          <Boxes size="30" />
          The Art Of Lab Facilites
        </h1>
        <p className="flex gap-4 text-justify text-[18px]">
          Modern lab facilities are outfitted with cutting-edge technology,
          including high-resolution microscopes, centrifuges, spectrometers, and
          chromatography systems. These tools are crucial for conducting
          detailed analyses and obtaining accurate results.Safety is a paramount
          concern in lab facilities. Features such as fume hoods, eye wash
          stations, and fire suppression systems are standard. Labs are also
          designed with proper ventilation and contain safety equipment like
          gloves, lab coats, and goggles to protect researchers from hazardous
          substances.Workstations in lab facilities are tailored to specific
          types of research. This includes wet labs for chemical and biological
          experiments, dry labs for computational research, and clean rooms for
          work requiring minimal contamination, such as semiconductor
          fabrication.Proper storage solutions are critical for maintaining the
          integrity of research samples. Lab facilities typically have a range
          of storage options, from refrigerators and freezers for biological
          samples to controlled environment chambers for chemical substances.
        </p>
      </div>
      {/* seven section */}
      <div className="mx-auto max-w-7xl">
        <h1 className="pb-8 pt-14 text-2xl font-bold">
          Meet Lab Derection Man:
        </h1>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {labMan?.map((man) => (
            <div key={man?.id}>
              <div className="rounded-md bg-secondary shadow-md">
                <img
                  src={man?.image}
                  alt=""
                  className="h-72 w-full rounded-t-md object-cover object-center dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between space-y-8 p-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">
                      {man?.name}
                    </h2>
                    <hr className="w-36" />
                    <p className="flex items-center gap-2">
                      <BriefcaseBusiness />
                      {man?.position}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail />
                      {man?.gmail}
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      <PhoneCall />
                      {man?.mobile}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabFacilities;
