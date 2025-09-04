"use client";

interface ProfileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function ProfileSidebar({ open, onClose }: ProfileSidebarProps) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed top-0 left-0 w-4/5 h-full bg-[#222222] z-50 p-4">
        <button className="text-white text-xl mb-4" onClick={onClose}>
          X
        </button>
        <h2 className="text-white font-bold text-lg mb-2">Meu Perfil</h2>
        <p className="text-gray-300">Conteúdo do perfil aqui...</p>
      </div>
    </>
  );
}
