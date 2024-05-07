import Image from "next/image";
import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
  return (
    <section className="mx-auto min-h-screen max-w-7xl lg:relative">
      <div
        className="mx-auto flex h-full w-[min(100%,24rem)] flex-col items-center justify-center bg-background px-4 py-8 
        shadow-2xl lg:fixed lg:left-0 lg:top-0 lg:min-w-[28rem] lg:items-start lg:px-10"
      >
        <Image
          src="/images/logo.png"
          alt="au logo"
          height="100"
          width="100"
          quality="95"
          className="w-40 pb-2 lg:hidden"
        />
        {children}
      </div>
      <div
        className="fixed left-[28rem] top-0 hidden 
        h-full w-[calc(100%-28rem)] bg-[url('/images/auth-img.jpg')] bg-cover bg-center lg:block"
      >
        <div className="absolute inset-0 -mt-10 flex flex-col items-center justify-center gap-2 bg-background/80">
          <Image
            src="/images/logo.png"
            alt="au logo"
            height="160"
            width="160"
            quality="95"
            className="mb-4 rounded-full bg-background"
          />
          <h1 className="text-4xl font-medium tracking-tight">
            Aspire University
          </h1>
          <p className="mx-auto max-w-[50%] text-center text-lg leading-relaxed text-foreground/80">
            Where Aspiration Meets Opportunity, Nurturing Ambition, Inspiring
            Excellence
          </p>
        </div>
      </div>
    </section>
  );
}
