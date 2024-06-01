import Link from "next/link";
import React from "react";

const Event = () => {
  const allEvent = [
    {
      id: 1,
      title: "React Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "NodeJs Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Marketing Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1595020879644-ed54888c8b9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Seo Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1560439514-e960a3ef5019?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "javascript Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Mern Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "React Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "React Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "React Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "React Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "React Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "React Seminar",
      description:
        "This is a great seminar we have done we want to do it different .Lot student are joining here .We are happy about our event and people can enjoyed it",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="mx-auto mt-8 max-w-7xl">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {allEvent?.map((event) => (
          <Link href={`/event/${event?.id}`}>
            <div
              key={event?.id}
              className="relative h-64 rounded-md bg-cover bg-center"
              style={{ backgroundImage: `url(${event?.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white">
                <h1 className="text-xl  font-bold text-white">
                  {event?.title}
                </h1>
                <p className="text-gray-300">
                  {event?.description.slice(0, 95)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Event;
