import Image from "next/image";
import React from "react";

export default function RecentEvent() {
  const allEvent = [
    {
      id: 1,
      title: "React Seminar",
      date: "04-02-2024",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "NodeJs Seminar",
      date: "04-02-2024",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Marketing Seminar",
      date: "04-02-2024",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1595020879644-ed54888c8b9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Seo Seminar",
      date: "04-02-2024",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1560439514-e960a3ef5019?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "javascript Seminar",
      date: "04-02-2024",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Mern Seminar",
      date: "04-02-2024",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "React Seminar",
      date: "04-02-2024",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "React Seminar",
      date: "04-02-2024",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "React Seminar",
      date: "04-02-2024",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "React Seminar",
      date: "04-02-2024",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="mx-auto mb-14 mt-14 max-w-7xl">
      <div className="pb-6 text-center">
        <h1 className="pb-2 text-3xl font-bold text-primary">
          Recent Event From us
        </h1>
        <p>
          We always try to arrange lot of event for our people .There are lot
          people attend here .Everyone feel enjoy.
          <br></br>
          Here is our few event hopefully it makes us different
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-3/5">
          <div
            className="relative  h-96 rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${allEvent[0].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white">
              <h1 className="text-2xl  font-bold text-white">
                {allEvent[0].title}
              </h1>
              <p className="text-gray-300">
                {allEvent[0]?.description.slice(0, 150)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col space-y-4 p-4 lg:w-2/5">
          {allEvent.slice(1, 4).map((event) => (
            <div key={event.id} className="item-center flex gap-4 ">
              <div>
                <Image
                  className="rounded-md"
                  src={event.image}
                  alt=""
                  height={300}
                  width={200}
                />
              </div>
              <div>
                <h2 className="mb-1 text-xl font-bold text-primary">
                  {event.title}
                </h2>
                <hr className="w-24"></hr>
                <p>{event.date}</p>
                <p className=" ">{event.description.slice(0, 40)}....</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
