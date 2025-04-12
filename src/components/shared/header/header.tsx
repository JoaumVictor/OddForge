"use client";

import { signOut } from "next-auth/react";
import HoverMenu from "@/components/ui/hover-menu";
import Image from "next/image";
import { GoPersonFill } from "react-icons/go";
import { DynamicMenubar } from "@/components/ui/dynamic-menubar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  esportesIcons,
  esportesKeys,
  placarIcons,
  placarKeys,
} from "@/data/homepageMenu";

export default function Header() {
  const router = useRouter();
  const { t } = useTranslation("translation");

  const placarItems = placarKeys.map((key) => ({
    title: t(`homepage.header.options.option1.items.${key}`),
    icon: placarIcons[key],
    url: `/placar/${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`,
  }));

  const esportesItems = esportesKeys.map((key) => ({
    title: t(`homepage.header.options.option2.items.${key}`),
    icon: esportesIcons[key],
    url: `/esportes/${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`,
  }));

  return (
    <header className="flex items-center justify-between p-1 bg-black shadow-md w-full px-[10%]">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo-no-background.png"
          alt="OddForge Logo"
          width={50}
          height={50}
        />
        <span className="font-bold text-xl hidden sm:inline text-white">
          OddForge
        </span>
      </Link>

      <div className="flex justify-center gap-6">
        <HoverMenu label="Placar" items={placarItems} />
        <HoverMenu label="Esportes" items={esportesItems} />
      </div>

      <DynamicMenubar
        label={<GoPersonFill className="text-[18px]" />}
        items={[
          {
            label: "Perfil",
            type: "content",
            exec: () => router.push("/profile"),
          },
          {
            type: "separator",
          },
          {
            label: "Deslogar",
            type: "content",
            exec: () => signOut({ callbackUrl: "/login" }),
          },
        ]}
      />
    </header>
  );
}
