"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {session ? (
        <>
          <p>Bem-vindo, {session.user?.name}, estamos te redirecionando...</p>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Entrar com GitHub</button>
      )}
    </div>
  );
}
