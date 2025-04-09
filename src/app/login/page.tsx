"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {session ? (
        <>
          <p>Bem-vindo, {session.user?.name}</p>
          <button onClick={() => signOut()}>Sair</button>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Entrar com GitHub</button>
      )}
    </div>
  );
}
