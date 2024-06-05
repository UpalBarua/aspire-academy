import { CheckoutCourseCard } from "@/components/checkout/checkout-course-card";

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

export default function CheckoutPage() {
  return (
    <section className="pb-section container grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <CheckoutCourseCard {...COURSE} />
      </div>
      <div>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </div>
    </section>
  );
}
