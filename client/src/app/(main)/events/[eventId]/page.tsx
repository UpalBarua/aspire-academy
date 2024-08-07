import Image from "next/image";

type EventDetailsPageProps = {
  params: {
    eventId: string;
  };
};

export default function EventDetailsPage({
  params,
}: Readonly<EventDetailsPageProps>) {
  return (
    <section className="mx-auto mb-8 mt-14 max-w-6xl">
      <div className="flex justify-center">
        <img
          className="j flex h-[400px] w-[1000px] rounded-md"
          src="https://images.unsplash.com/photo-1624377632657-3902bfd35958?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxjb2Rpbmd8ZW58MHwwfDB8fHww"
          alt=""
        />
      </div>
      <div className="pl-20 pt-10">
        {" "}
        <p className="items-center text-justify text-[18px]">
          If you’ve ever read a blog post, you’ve consumed content from a
          thought leader that is an expert in their industry. Chances are if the
          blog post was written effectively, you came away with helpful
          knowledge and a positive opinion about the writer or brand that
          produced the content.Anyone can connect with their audience through
          blogging and enjoy the myriad benefits that blogging provides: organic
          traffic from search engines, promotional content for social media, and
          recognition from a new audience you haven’t tapped into yet.A blog
          post is any article, news piece, or guide thats published in the blog
          section of a website. A blog post typically covers a specific topic or
          query, is educational in nature, ranges from 600 to 2,000+ words, and
          contains other media types such as images, videos, infographics, and
          interactive charts. If you’ve ever read a blog post, you’ve consumed
          content from a thought leader that is an expert in their industry.
          Chances are if the blog post was written effectively, you came away
          with helpful knowledge and a positive opinion about the writer or
          brand that produced the content.Anyone can connect with their audience
          through blogging and enjoy the myriad benefits that blogging provides:
          organic traffic from search engines.
        </p>
        <h1 className="pb-6 pt-10 text-2xl font-bold text-primary">
          Lesson of event
        </h1>
        <div className="flex justify-center gap-8">
          <div>
            <p className="text-[20px]">
              our came away with helpful knowledge and a positive
            </p>
            <p className="text-[20px]">
              our came away with helpful knowledge and a positive
            </p>
            <p className="text-[20px]">
              our came away with helpful knowledge and a positive
            </p>
            <p className="text-[20px]">
              our came away with helpful knowledge and a positive
            </p>
            <p className="text-[20px]">
              our came away with helpful knowledge and a positive
            </p>
            <p className="text-[20px]">
              our came away with helpful knowledge and a positive
            </p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1624377632657-3902bfd35958?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxjb2Rpbmd8ZW58MHwwfDB8fHww"
              alt=""
              height={500}
              width={500}
              className="rounded-md"
            ></Image>
          </div>
        </div>
        <p className="mt-8 text-[18px]">
          Organic traffic from search engines, promotional content for social
          media, and recognition from a new audience you haven’t tapped into
          yet.A blog post is any article, news piece, or guide thats published
          in the blog section of a website. Thank you very much.
        </p>
        <div className="pt-6 text-[18px]">
          <h4>04-02-2024</h4>
          <h4>Aspire Academy</h4>
        </div>
      </div>
    </section>
  );
}
