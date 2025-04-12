import { getSportsByProps } from "@/types/sports";

const BASE_URL = "https://api.the-odds-api.com/v4";

export async function getSports() {
  const apiKey = process.env.NEXT_PUBLIC_OO_API_KEY;

  if (!apiKey) {
    throw new Error("Chave da API não encontrada no .env");
  }

  const res = await fetch(`${BASE_URL}/sports?apiKey=${apiKey}`);

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Erro ao buscar esportes: ${res.status} - ${errorBody}`);
  }

  return res.json();
}

export async function getSportsBy({ sport, region }: getSportsByProps) {
  const apiKey = process.env.NEXT_PUBLIC_OO_API_KEY;

  if (!apiKey) {
    throw new Error("Chave da API não encontrada no .env");
  }

  const res = await fetch(
    `${BASE_URL}/sports/${sport}/odds?regions=${region}&apiKey=${apiKey}`
  );

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Erro ao buscar esportes: ${res.status} - ${errorBody}`);
  }

  return res.json();
}

export async function getHistoricalSportsBy({
  sport,
  region,
}: getSportsByProps) {
  const apiKey = process.env.NEXT_PUBLIC_OO_API_KEY;

  if (!apiKey) {
    throw new Error("Chave da API não encontrada no .env");
  }

  console.log(
    "url",
    `${BASE_URL}/historical/sports/${sport}/odds?regions=${region}&apiKey=${apiKey}`
  );

  const res = await fetch(
    `${BASE_URL}/historical/sports/${sport}/odds?regions=${region}&apiKey=${apiKey}`
  );

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Erro ao buscar esportes: ${res.status} - ${errorBody}`);
  }

  return res.json();
}
