import { ReactNode } from "react";

import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/footer";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <Navbar />
        <div className="pt-24">{children}</div>
      </div>
      <Footer />
      {/* <div className="absolute right-[50%] top-0 size-[30rem] rounded-full bg-primary opacity-25 blur-3xl"></div> */}
    </div>
  );
}
