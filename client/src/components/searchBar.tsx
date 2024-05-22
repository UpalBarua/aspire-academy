import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <section>
      <div className="mb-14 flex items-center justify-center ">
        <div className="relative flex w-full max-w-xl rounded-md px-4">
          <input
            type="text"
            name="q"
            id="query"
            placeholder="watch your blog"
            className=" w-full rounded-md rounded-r-none border-2 border-gray-300 border-r-white bg-secondary  p-3 placeholder-gray-500 dark:border-none dark:placeholder-gray-300 "
          />
          <Button className="inline-flex items-center gap-2   rounded-md  px-6 py-3 text-lg font-semibold text-white">
            <span>search</span>
            <span className="hidden md:block">
              <Search />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
