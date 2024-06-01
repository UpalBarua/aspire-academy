import Image from "next/image";
import Link from "next/link";
import React from "react";

type TBlog = {
  id: string;
  title: string;
  image: string;
  date: string;
  writer: string;
};

export default function BlogCard({ blog }: { blog: TBlog }) {
  const { title, image, date, writer, id } = blog;
  return (
    <div>
      <Link href={`/blog/${id}`}>
        <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 py-8 pb-8 pt-80 dark:bg-gray-700 sm:pt-48 lg:pt-72">
          <Image
            src={image}
            alt=""
            fill
            className="absolute inset-0 -z-10  h-auto w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-800/40"></div>
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time className="mr-8">{date}</time>
          </div>
          <h3 className="mt-2 text-2xl font-semibold leading-6 text-white">
            {title}
          </h3>
          <h4 className="pt-2 text-gray-300">Written by {writer}</h4>
        </div>
      </Link>
    </div>
  );
}
