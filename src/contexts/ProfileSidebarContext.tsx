"use client";
import { createContext, useContext, useState } from "react";

type ProfileSidebarContextType = {
  open: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const ProfileSidebarContext = createContext<ProfileSidebarContextType | undefined>(undefined);

export function ProfileSidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openSidebar = () => setOpen(true);
  const closeSidebar = () => setOpen(false);

  return (
    <ProfileSidebarContext.Provider value={{ open, openSidebar, closeSidebar }}>
      {children}
    </ProfileSidebarContext.Provider>
  );
}

export function useProfileSidebar() {
  const context = useContext(ProfileSidebarContext);
  if (!context) {
    throw new Error("useProfileSidebar must be used within ProfileSidebarProvider");
  }
  return context;
}
