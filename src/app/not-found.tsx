import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-white text-4xl">404</h1>
      <Image
        src="/images/logo-no-background.png"
        alt="Página não encontrada"
        width={300}
        height={300}
        className="mb-8"
        priority
      />
      <p className="text-xl">Página não encontrada</p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-2  rounded-lg hover:bg-gray-800 transition"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
