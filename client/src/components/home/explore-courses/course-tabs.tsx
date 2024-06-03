import { CourseCard } from "@/components/course-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/config";

const COURSE = {
  id: 1,
  duration: "6h 50m",
  batch: "Offline",
  course_name: "Expert in Graphics",
  details:
    "It is a course where you learn how you use Graphics fundamental in a project.Explore Real time project Design",
  instructor: "Shawon Hasan",
  amount: "5,500",
  course_banner:
    "https://images.unsplash.com/photo-1610433572201-110753c6cff9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  instructor_pic:
    "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
};

export function CourseTabs() {
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
            <CourseCard {...COURSE} />
            <CourseCard {...COURSE} />
            <CourseCard {...COURSE} />
            <CourseCard {...COURSE} />
            <CourseCard {...COURSE} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
