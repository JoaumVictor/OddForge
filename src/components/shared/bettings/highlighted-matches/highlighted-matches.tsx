"use client";

import { useSports } from "@/hooks/useSports";
import { getSportsByProps } from "@/types/sports";
import { Match } from "@/types/odds";
import { CustomBreadcrumb, Crumb } from "@/components/ui/customBreadcrumb";

interface HighlightedMatchesProps extends getSportsByProps {
  historical?: boolean;
  breadcrumb: Crumb[];
  limit?: number;
}

export default function HighlightedMatches({
  region,
  sport,
  historical = true,
  breadcrumb,
  limit,
}: HighlightedMatchesProps) {
  const { sports, historicalSports } = useSports({ region, sport });

  const targetData: Match[] = historical ? historicalSports : sports;

  return (
    <div className="flex items-center justify-center flex-col p-4 bg-white w-full">
      <CustomBreadcrumb items={breadcrumb} />
      <div className="pt-4 flex flex-col w-full">
        {targetData.slice(0, limit ?? targetData.length).map((match) => {
          const bookmaker = match.bookmakers?.[0];
          const market = bookmaker?.markets?.find((m) => m.key === "h2h");
          const outcomes = market?.outcomes || [];

          const [home, away, draw] = outcomes;

          const date = new Date(match.commence_time);
          const formatterDate = new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "2-digit",
          }).format(date);

          const formatterTime = new Intl.DateTimeFormat("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }).format(date);

          return (
            <div
              key={match.id}
              className=" border-gray-300 border-b-[1px] shadow-sm flex items-center justify-between bg-white w-full cursor-pointer hover:bg-gray-100 transition-all"
            >
              <div className="flex flex-col items-center justify-center p-5 w-[100px]">
                <span className="text-gray-500 text-xs">{formatterDate}</span>
                <span className="text-sm font-bold">{formatterTime}</span>
              </div>

              <div className="h-[80px] bg-gray-300 w-[1px]" />

              <div className="flex flex-col items-start font-bold text-xs p-5 w-full">
                <span>{match.home_team}</span>
                <span>{match.away_team}</span>
              </div>

              <div className="flex flex-col items-end gap-2 px-2">
                <p className="text-xs text-gray-400 w-full text-center">
                  {bookmaker?.title ?? "Desconhecido"}
                </p>
                <div className="flex items-center justify-center gap-2 w-full">
                  <div className="border border-gray-300 rounded text-center w-9 h-9 flex items-center justify-center">
                    <p className="font-bold text-xs text-gray-700">
                      {home?.price ?? "-"}
                    </p>
                  </div>
                  <div className="border border-gray-300 rounded text-center w-9 h-9 flex items-center justify-center">
                    <p className="font-bold text-xs text-gray-700">
                      {draw?.price ?? "-"}
                    </p>
                  </div>
                  <div className="border border-gray-300 rounded text-center w-9 h-9 flex items-center justify-center">
                    <p className="font-bold text-xs text-gray-700">
                      {away?.price ?? "-"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
