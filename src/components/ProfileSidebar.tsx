'use client';

import { useState } from "react";
import { Input } from "@/components/ui/Input";

interface ProfileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function ProfileSidebar({ open, onClose }: ProfileSidebarProps) {
  const [name, setName] = useState("João da Silva");
  const [editingName, setEditingName] = useState(false);
  const [email, setEmail] = useState("user@gmail.com");
  const [editingEmail, setEditingEmail] = useState(false);
  const phone = "(81) 9 4020-5660";
  const [notifications, setNotifications] = useState(true);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-4/5 h-full z-50
          bg-[#191613] transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          flex flex-col justify-between overflow-y-auto`}
      >
        {/* Conteúdo scrollável */}
        <div className="p-4 flex flex-col gap-2 pb-10">
          <button className="text-white text-xl ml-auto" onClick={onClose}>
            X
          </button>

          <h2
            className="text-[var(--primary-color)] text-xl mb-6 text-center font-bold"
            style={{ fontFamily: "primary" }}
          >
            Meu Perfil
          </h2>

          {/* Nome */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-base" style={{ fontFamily: "primary" }}>Nome:</p>
            <div className="flex items-center gap-3">
              {editingName ? (
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-primary text-white"
                />
              ) : (
                <p className="text-gray-400 font-medium">{name}</p>
              )}
              <button onClick={() => setEditingName(!editingName)} className="ml-auto">
                <img
                  src={editingName ? "/save_button.svg" : "/edit_button.svg"}
                  alt={editingName ? "Salvar" : "Editar"}
                  className="w-9 h-9"
                />
              </button>
            </div>
          </div>

          <hr className="border-t border-[#757D8A] my-4" />

          {/* Endereços */}
          <div className="flex flex-col gap-4">
            <p className="text-white text-base mt-2" style={{ fontFamily: "primary" }}>Endereços:</p>
            <AddressCard />
          </div>

          <hr className="border-t border-[#757D8A] my-4" />

          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-base" style={{ fontFamily: "primary" }}>Email:</p>
            <div className="flex items-center gap-3">
              {editingEmail ? (
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-primary text-white"
                />
              ) : (
                <p className="text-gray-400 font-medium">{email}</p>
              )}
              <button onClick={() => setEditingEmail(!editingEmail)} className="ml-auto">
                <img
                  src={editingEmail ? "/save_button.svg" : "/edit_button.svg"}
                  alt={editingEmail ? "Salvar" : "Editar"}
                  className="w-9 h-9"
                />
              </button>
            </div>
          </div>

          <hr className="border-t border-[#757D8A] my-4" />

          {/* Telefone */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-base" style={{ fontFamily: "primary" }}>Telefone:</p>
            <p className="text-gray-400 font-medium">{phone}</p>
          </div>

          <hr className="border-t border-[#757D8A] my-4" />

          {/* Notificações */}
          <div className="flex items-center justify-between mt-2">
            <p className="text-white text-sm" style={{ fontFamily: "primary" }}>RECEBER NOTIFICAÇÕES</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--primary-color)] rounded-full peer peer-checked:bg-[var(--primary-color)] transition-all"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
            </label>
          </div>
        </div>

        {/* Botão SAIR */}
        <div className="p-4 mx-auto">
          <button
            className="w-18 py-2 text-white text-sm font-bold rounded-2xl border border-[var(--primary-color)] bg-[#222222] hover:bg-[#333333] transition-colors mb-40 mt-6 "
          >
            SAIR
          </button>
        </div>
      </div>
    </>
  );
}

export function AddressCard() {
  const [editing, setEditing] = useState(false);
  const [addresses, setAddresses] = useState([
    { id: 1, nickname: "CASA", city: "Tacaratu", street: "Rua da Saudade, 35" },
    { id: 2, nickname: "TRABALHO", city: "Recife", street: "Av. Boa Viagem, 1000" },
  ]);

  return (
    <div className="flex flex-col gap-2">
      {addresses.map((addr, index) => (
        <div
          key={addr.id}
          className="rounded-lg p-3 bg-[#211E1B] flex flex-col gap-2"
        >
          {editing ? (
            <>
              <div>
                <p className="text-sm text-gray-300">Apelido:</p>
                <Input
                  type="text"
                  value={addr.nickname}
                  onChange={(e) => {
                    const newAddresses = [...addresses];
                    newAddresses[index].nickname = e.target.value;
                    setAddresses(newAddresses);
                  }}
                />
              </div>
              <div>
                <p className="text-sm text-gray-300">Cidade:</p>
                <Input
                  type="text"
                  value={addr.city}
                  onChange={(e) => {
                    const newAddresses = [...addresses];
                    newAddresses[index].city = e.target.value;
                    setAddresses(newAddresses);
                  }}
                />
              </div>
              <div>
                <p className="text-sm text-gray-300">Rua/N°:</p>
                <Input
                  type="text"
                  value={addr.street}
                  onChange={(e) => {
                    const newAddresses = [...addresses];
                    newAddresses[index].street = e.target.value;
                    setAddresses(newAddresses);
                  }}
                />
              </div>
            </>
          ) : (
            <div className="text-gray-400">
              <p className="text-[var(--primary-color)] font-bold">{addr.nickname}</p>
              <p>Cidade: {addr.city}</p>
              <p>{addr.street}</p>
            </div>
          )}
        </div>
      ))}

      {/* Botão editar/salvar */}
      <button
        onClick={() => setEditing(!editing)}
        className="self-end mt-2"
      >
        <img
          src={editing ? "/save_button.svg" : "/edit_button.svg"}
          alt={editing ? "Salvar" : "Editar"}
          className="w-9 h-9"
        />
      </button>
    </div>
  );
}
