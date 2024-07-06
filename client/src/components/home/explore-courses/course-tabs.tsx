import { CourseCard } from "@/components/course-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/config";
import type { TCourse } from "@/types";

async function getAllCourses() {
  try {
    const data = await fetch(
      "https://aspire-academy-server.vercel.app/api/courses",
      {
        cache: "no-store",
      },
    ).then((res) => res.json());

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function CourseTabs() {
  const courses: TCourse[] = await getAllCourses();

  return (
    <Tabs defaultValue={categories[0].category}>
      <div className="no-scrollbar container overflow-scroll pb-4">
        <TabsList className="h-14 rounded-[100vmin] border border-border/25 bg-secondary/25">
          {categories.map(({ category, Icon }) => (
            <TabsTrigger
              value={category}
              className="flex h-full items-center gap-x-2.5 rounded-[100vmin] px-6 text-base data-[state=active]:bg-secondary"
            >
              <Icon className="h-5 w-5" />
              <span>{category}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {categories.map(({ category }) => (
        <TabsContent value={category}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((course) => course.category === category)
              .map((course) => (
                <CourseCard key={course._id} {...course} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
