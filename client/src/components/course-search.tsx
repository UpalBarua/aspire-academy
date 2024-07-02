"use client";

import { categories } from "@/config";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { useState } from "react";

const filter = ["enrolling", "new"];

export function CourseSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const selectCategory = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      }

      return [...prev, category];
    });
  };

  const selectFilter = (filter: string) => {
    setSelectedFilters((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((item) => item !== filter);
      }

      return [...prev, filter];
    });
  };

  return (
    <form
      onClick={() =>
        setIsSearchOpen((prevSearchOpen) =>
          prevSearchOpen ? prevSearchOpen : true,
        )
      }
      className={cn(
        "relatvive right-0 top-0 z-[5] flex h-12 w-full origin-left flex-col items-center justify-start space-y-8 overflow-hidden rounded-[100vmin] border border-border/25 bg-card/90 px-4 text-sm text-secondary-foreground backdrop-blur-md backdrop-saturate-200 transition-all duration-200 md:absolute md:w-[20rem] lg:w-[28rem]",
        {
          "h-[32rem] items-start rounded-3xl px-5 py-4 shadow-2xl md:w-[28rem]":
            isSearchOpen,
        },
      )}
    >
      <div className="flex w-full items-center gap-x-4">
        <Search className="size-6" />
        <input
          type="text"
          className="h-12 w-full border-0 bg-transparent outline-0"
          placeholder="Search Courses"
        />
        {isSearchOpen && (
          <button
            onClick={(event) => {
              event?.stopPropagation();
              setIsSearchOpen(false);
            }}
            type="button"
            className="rounded-full border-none bg-destructive p-1 text-foreground"
          >
            <X className="size-5" />
          </button>
        )}
      </div>
      <div>
        <h4 className="pb-2 text-sm font-medium text-foreground">Categories</h4>
        <ul className="flex flex-wrap gap-2">
          {categories.map(({ category }) => (
            <li
              className={cn(
                "flex cursor-pointer items-center justify-between gap-x-2 rounded-[100vmin] border px-4 py-2 text-base",
                {
                  "border-primary text-primary":
                    selectedCategories.includes(category),
                },
              )}
              onClick={() => selectCategory(category)}
            >
              <span>{category}</span>
              {selectedCategories.includes(category) ? (
                <X className="h-4 w-4" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="pb-2 text-sm font-medium text-foreground">Filter</h4>
        <ul className="flex flex-wrap gap-2">
          {filter.map((filter) => (
            <li
              className={cn(
                "flex cursor-pointer items-center justify-between gap-x-2 rounded-[100vmin] border px-4 py-2 text-base",
                {
                  "border-primary text-primary":
                    selectedFilters.includes(filter),
                },
              )}
              onClick={() => selectFilter(filter)}
            >
              <span>{filter}</span>
              {selectedFilters.includes(filter) ? (
                <X className="h-4 w-4" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
