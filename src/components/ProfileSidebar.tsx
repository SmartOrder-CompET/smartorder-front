'use client';

import { useState } from "react";
import { Input } from "@/components/ui/Input";

interface ProfileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function ProfileSidebar({ open, onClose }: ProfileSidebarProps) {
  const [name, setName] = useState("João da Silva"); // nome inicial
  const [editing, setEditing] = useState(false);

  if (!open) return null;

  return (
    <>
      {/* Overlay clicável */}
      <div
        className={`fixed inset-0 z-40 ${open ? "block" : "hidden"}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-4/5 h-full z-50 p-4
          bg-[#191613] bg-fixed bg-cover
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button className="text-white text-xl mb-4 mt-2" onClick={onClose}>
          X
        </button>

        <h2
          className="text-[var(--primary-color)] text-xl mb-6 text-center"
          style={{ fontFamily: "primary" }}
        >
          Meu Perfil
        </h2>

        <div className="flex flex-col gap-2">
          <p className="text-white text-base" style={{ fontFamily: "primary" }}>
            Nome:
          </p>

          <div className="flex items-center gap-3">
            {editing ? (
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-primary text-white"
              />
            ) : (
              <p className="text-gray-400 font-medium">{name}</p>
            )}
            
            <button
              onClick={() => setEditing(!editing)}
              className="px-3 py-1 text-sm bg-[var(--primary-color)] rounded text-white"
            >
              {editing ? "Salvar" : "Editar"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
