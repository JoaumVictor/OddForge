import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";

import Header from "@/components/shared/header/header";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="w-full h-screen flex items-center justify-start flex-col">
      <Header />
      <p>Home protegida</p>
    </div>
  );
}
