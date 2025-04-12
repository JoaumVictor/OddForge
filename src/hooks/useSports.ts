// hooks/useSports.ts
import { useEffect, useState } from "react";
import {
  getHistoricalSportsBy,
  getSports,
  getSportsBy,
} from "@/lib/api/odds-api";
import { getSportsByProps } from "@/types/sports";
import { Match } from "@/types/odds";

export interface SportProps {
  active: boolean;
  description: string;
  group: string;
  has_outrights: boolean;
  key: string;
  title: string;
}

export function useSports(params?: getSportsByProps) {
  const [sports, setSports] = useState<Match[]>([]);
  const [historicalSports, setHistoricalSports] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = params ? await getSportsBy(params) : await getSports();
        setSports(data);
        if (params) {
          const historicalData = await getHistoricalSportsBy(params);
          setHistoricalSports(historicalData);
        }
      } catch (err: any) {
        setError(err.message || "Erro ao carregar os esportes");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [params?.sport, params?.region]);

  const getSportByKey = (key: string): Match | undefined => {
    return sports.find((sport) => sport.id === key);
  };

  const getHistoricalSportByKey = (key: string): Match | undefined => {
    return historicalSports.find((sport) => sport.id === key);
  };

  return {
    getSportByKey,
    getHistoricalSportByKey,
    sports,
    historicalSports,
    loading,
    error,
  };
}
