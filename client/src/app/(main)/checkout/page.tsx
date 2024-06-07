import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { TicketCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { paymentsMethods } from "@/config";

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
  const {
    id,
    details,
    course_banner,
    course_name,
    instructor,
    instructor_pic,
  } = COURSE;

  return (
    <section className="pb-section container">
      <div className="mx-auto grid !max-w-4xl grid-cols-1 gap-2 rounded-3xl border border-border/50 bg-card/25 shadow md:grid-cols-2">
        <Link href={`/courses/${id}`} className="group">
          <Card className="relative mx-auto border-border/25 bg-secondary/25 transition-colors duration-300 md:rounded-br-none md:rounded-tr-none">
            <Image
              src={course_banner}
              alt={course_name}
              className="min-h-[20rem] w-full rounded-tl-[inherit] rounded-tr-[inherit] border-b border-border/50 object-cover object-center group-hover:border-border/75"
              height="200"
              width="350"
            />
            <CardContent className="space-y-2 p-5">
              <CardTitle>
                {course_name} Lorem ipsum dolor sit amet Lorem, ipsum
              </CardTitle>
              <p className="text-pretty leading-relaxed text-foreground/60 group-hover:text-foreground/90">
                {details.length > 120 ? details.slice(0, 120) + "..." : details}{" "}
                Lorem ipsum sint cillum
              </p>
              <div className="flex items-center gap-x-2.5 pt-4">
                <Avatar className="h-10 w-10 border border-border/25">
                  <AvatarImage src={instructor_pic} alt={instructor} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-bold">Mentor</p>
                  <p>{instructor}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        <div className="flex min-h-full flex-col p-6 transition-colors duration-300 group-hover:border-border/75 group-hover:bg-card/50">
          <div className="flex-1 space-y-4">
            <h3 className="pb-2 text-2xl font-medium tracking-tight">
              Payment Process
            </h3>
            <div className="flex items-center justify-between text-xl">
              <h4 className="font-medium">Course Price</h4>
              <span>{COURSE["amount"]} BDT</span>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Discount</h4>
              <span className="text-red-400">- 0 BDT</span>
            </div>
            <div className="space-y-4 pt-4">
              <h4 className="font-medium">Coupon</h4>
              <form className="relative">
                <TicketCheck className="absolute left-[1rem] top-[50%] -translate-y-[50%] text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Discout Coupon"
                  className="h-14 rounded-[100vmin] border-border/25 bg-secondary/50 ps-12 shadow"
                />
                <Button
                  size="sm"
                  className="absolute right-0 top-[50%] mr-1.5 -translate-y-[50%]"
                >
                  Apply
                </Button>
              </form>
            </div>
            <div className="space-y-4 pb-10 pt-4">
              <h4 className="font-medium">Payment Method</h4>
              <RadioGroup className="flex items-center gap-x-4">
                {paymentsMethods.map(({ logo, name }) => (
                  <div key={logo} className="flex items-center space-x-2">
                    <Label
                      htmlFor={name}
                      className="flex size-16 items-center justify-center rounded-2xl border border-border/25 bg-secondary/50"
                    >
                      <Image
                        src={logo}
                        alt={name}
                        height="100"
                        width="100"
                        className="size-14"
                      />
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          <Button>Checkout</Button>
        </div>
      </div>
    </section>
  );
}
