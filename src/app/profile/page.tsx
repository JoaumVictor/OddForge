"use client";

import { useUserLocation } from "@/hooks/useUserLocation";

export default function Profile() {
  const location = useUserLocation();

  return (
    <div className="bg-black w-full flex h-screen items-center justify-center">
      {location ? (
        <div className="flex items-center justify-center flex-col space-y-1 text-sm text-zinc-200">
          <p>Seu IP: {location.ip}</p>
          <p>País: {location.country}</p>
          <p>Está no Brasil? {location.isInBrazil ? "Sim" : "Não"}</p>
          <p>Cidade: {location.city || "Desconhecida"}</p>
          <p>Estado/Região: {location.region || "Desconhecida"}</p>
          <p>Latitude: {location.latitude || "N/A"}</p>
          <p>Longitude: {location.longitude || "N/A"}</p>
          <p>CEP: {location.postal || "N/A"}</p>
          <p>Fuso horário: {location.timezone || "N/A"}</p>
          <p>Provedor de internet: {location.org || "N/A"}</p>
        </div>
      ) : (
        <p>Carregando sua localização...</p>
      )}
    </div>
  );
}
