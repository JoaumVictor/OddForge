import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";
import Header from "@/components/shared/header/header";
import HighlightedMatches from "@/components/shared/bettings/highlighted-matches/highlighted-matches";
import { Container } from "@/components/ui/container";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-start flex-col">
      <Header />
      <Container>
        <main className="flex items-center justify-center w-full">
          <div className="w-1/3 flex flex-col items-start justify-center"></div>
          <div className="w-2/3 flex flex-col items-start justify-center">
            {/* <HighlightedMatches
              breadcrumb={[
                { label: "Brasil" },
                { label: "Campeonato Brasileiro Série A" },
              ]}
            /> */}
            <HighlightedMatches
              region="eu"
              sport="soccer_brazil_campeonato"
              historical={false}
              breadcrumb={[
                { label: "Brasil" },
                { label: "Campeonato Brasileiro Série A" },
              ]}
              limit={4}
            />
            <HighlightedMatches
              region="eu"
              sport="soccer_brazil_serie_b"
              historical={false}
              breadcrumb={[
                { label: "Brasil" },
                { label: "Campeonato Brasileiro Série B" },
              ]}
              limit={4}
            />
          </div>
        </main>
      </Container>
    </div>
  );
}

// soccer_brazil_campeonato / soccer_brazil_serie_b
