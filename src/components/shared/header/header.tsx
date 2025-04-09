"use client";

import HoverMenu from "@/components/ui/hover-menu";
import Image from "next/image";
import { GoPersonFill } from "react-icons/go";
import { GoTrophy } from "react-icons/go";
import { AiOutlineTrophy } from "react-icons/ai";
import { SiApostrophe } from "react-icons/si";
import { BiTrophy } from "react-icons/bi";
import { IoMedalOutline } from "react-icons/io5";
import { FaBasketball } from "react-icons/fa6";
import {
  IoIosFootball,
  IoMdBasketball,
  IoMdTennisball,
  IoMdAmericanFootball,
} from "react-icons/io";
import {
  GiBaseballBat,
  GiHockey,
  GiCricketBat,
  GiBoxingGlove,
} from "react-icons/gi";
import { FaUserNinja } from "react-icons/fa";
import { DynamicMenubar } from "@/components/ui/dynamic-menubar";
import Link from "next/link";

const placarItems = [
  {
    icon: <IoIosFootball className="w-4 h-4" />,
    title: "Brasileirão",
    url: "/placar/brasileirao",
  },
  {
    icon: <AiOutlineTrophy className="w-4 h-4" />,
    title: "Copa do Brasil",
    url: "/placar/copa-do-brasil",
  },
  {
    icon: <GoTrophy className="w-4 h-4" />,
    title: "Liga dos Campeões",
    url: "/placar/liga-dos-campeoes",
  },
  {
    icon: <AiOutlineTrophy className="w-4 h-4" />,
    title: "Copa Libertadores",
    url: "/placar/copa-libertadores",
  },
  {
    icon: <BiTrophy className="w-4 h-4" />,
    title: "Premier League",
    url: "/placar/premier-league",
  },
  {
    icon: <IoMedalOutline className="w-4 h-4" />,
    title: "La Liga",
    url: "/placar/la-liga",
  },
  {
    icon: <IoIosFootball className="w-4 h-4" />,
    title: "Futebol",
    url: "/placar/futebol",
  },
  {
    icon: <FaBasketball className="w-4 h-4" />,
    title: "Basquete",
    url: "/placar/basquete",
  },
  {
    icon: <SiApostrophe className="w-4 h-4" />,
    title: "e-Sports",
    url: "/placar/e-sports",
  },
];

const esportesItems = [
  {
    icon: <IoIosFootball className="w-4 h-4" />,
    title: "Futebol",
    url: "/esportes/futebol",
  },
  {
    icon: <IoMdBasketball className="w-4 h-4" />,
    title: "Basquete",
    url: "/esportes/basquete",
  },
  {
    icon: <IoMdTennisball className="w-4 h-4" />,
    title: "Tênis",
    url: "/esportes/tenis",
  },
  {
    icon: <IoMdAmericanFootball className="w-4 h-4" />,
    title: "Futebol Americano",
    url: "/esportes/futebol-americano",
  },
  {
    icon: <GiBaseballBat className="w-4 h-4" />,
    title: "Beisebol",
    url: "/esportes/beisebol",
  },
  {
    icon: <GiHockey className="w-4 h-4" />,
    title: "Hóquei no Gelo",
    url: "/esportes/hoquei-no-gelo",
  },
  {
    icon: <GiCricketBat className="w-4 h-4" />,
    title: "Críquete",
    url: "/esportes/criquete",
  },
  {
    icon: <GiBoxingGlove className="w-4 h-4" />,
    title: "Boxe",
    url: "/esportes/boxe",
  },
  {
    icon: <FaUserNinja className="w-4 h-4" />,
    title: "MMA",
    url: "/esportes/mma",
  },
  {
    icon: <SiApostrophe className="w-4 h-4" />,
    title: "eSports",
    url: "/esportes/e-sports",
  },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between p-1 bg-black shadow-md w-full mb-10 px-[10%]">
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
            exec: () => {},
          },
          {
            label: "Config",
            type: "content",
            exec: () => {},
          },
        ]}
      />
    </header>
  );
}
