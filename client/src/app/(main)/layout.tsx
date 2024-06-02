import { ReactNode } from "react";

import { Navbar } from "@/components/navigation/navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div>
      <Navbar />
      <div className="pt-24">{children}</div>
      {/* <div className="absolute right-[50%] top-0 size-[30rem] rounded-full bg-primary opacity-25 blur-3xl"></div> */}
    </div>
  );
}
