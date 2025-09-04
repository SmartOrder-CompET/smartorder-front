// LayoutClient.tsx
"use client";
import { useState } from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { ProfileSidebar } from "./ProfileSidebar";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      {/* Header fixo */}
      <Header onProfileClick={() => setProfileOpen(true)} />

      {/* Conteúdo da página com margin-top igual à altura do header */}
      <div className="mt-[4.5rem] md:mt-[5rem]">
        {children}
      </div>

      {/* Sidebar */}
      <ProfileSidebar open={profileOpen} onClose={() => setProfileOpen(false)} />

      {/* Navbar */}
      <Navbar />
    </>
  );
}
