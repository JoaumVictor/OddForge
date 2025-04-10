"use client";

import { useEffect, useState } from "react";

interface LocationData {
  ip: string;
  country: string;
  isInBrazil: boolean;
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  postal: string;
  timezone: string;
  org: string;
}

export function useUserLocation() {
  const [location, setLocation] = useState<LocationData | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("/api/location");
        if (!res.ok) throw new Error("Erro na resposta da API");
        const data: LocationData = await res.json();
        setLocation(data);
      } catch (err) {
        console.error("Erro ao buscar localização:", err);
      }
    };

    fetchLocation();
  }, []);

  return location;
}
