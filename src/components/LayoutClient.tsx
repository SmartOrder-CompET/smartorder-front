'use client';

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { ProfileSidebar } from "./ProfileSidebar";
import { useProfileSidebar } from "@/contexts/ProfileSidebarContext";

interface LayoutClientProps {
  children: ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const { open, closeSidebar } = useProfileSidebar();
  const pathname = usePathname();

  // Oculta Header/Navbar
  const hideHeaderNav = pathname === "/login" || pathname === "/cadastro" || pathname === "/enderecos" || pathname.includes('/produto') || pathname.includes('/pagamento');

  return (
    <>
      {!hideHeaderNav && <Header />}
      
      <main className={`${!hideHeaderNav ? "pt-20 pb-20 max-w-md md:max-w-3xl lg:max-w-5xl mx-auto" : "w-full min-h-screen"}`}>
        {children}
      </main>

      <ProfileSidebar open={open} onClose={closeSidebar} />

      {!hideHeaderNav && <Navbar />}
    </>
  );
}
