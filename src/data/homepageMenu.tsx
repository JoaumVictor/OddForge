import { IoIosFootball } from "react-icons/io";
import { AiOutlineTrophy } from "react-icons/ai";
import { GoTrophy } from "react-icons/go";
import { BiTrophy } from "react-icons/bi";
import { FaUserNinja } from "react-icons/fa";
import {
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
import { SiApostrophe } from "react-icons/si";
import { IoMedalOutline } from "react-icons/io5";
import { FaBasketball } from "react-icons/fa6";

export const placarKeys = [
  "brasileirao",
  "copaDoBrasil",
  "ligaDosCampeoes",
  "copaLibertadores",
  "premierLeague",
  "laLiga",
  "futebol",
  "basquete",
  "eSports",
] as const;

export const esportesKeys = [
  "futebol",
  "basquete",
  "tenis",
  "futebolAmericano",
  "beisebol",
  "hoqueiNoGelo",
  "criquete",
  "boxe",
  "mma",
  "eSports",
] as const;

export const placarIcons = {
  brasileirao: <IoIosFootball className="w-4 h-4" />,
  copaDoBrasil: <AiOutlineTrophy className="w-4 h-4" />,
  ligaDosCampeoes: <GoTrophy className="w-4 h-4" />,
  copaLibertadores: <AiOutlineTrophy className="w-4 h-4" />,
  premierLeague: <BiTrophy className="w-4 h-4" />,
  laLiga: <IoMedalOutline className="w-4 h-4" />,
  futebol: <IoIosFootball className="w-4 h-4" />,
  basquete: <FaBasketball className="w-4 h-4" />,
  eSports: <SiApostrophe className="w-4 h-4" />,
};

export const esportesIcons = {
  futebol: <IoIosFootball className="w-4 h-4" />,
  basquete: <IoMdBasketball className="w-4 h-4" />,
  tenis: <IoMdTennisball className="w-4 h-4" />,
  futebolAmericano: <IoMdAmericanFootball className="w-4 h-4" />,
  beisebol: <GiBaseballBat className="w-4 h-4" />,
  hoqueiNoGelo: <GiHockey className="w-4 h-4" />,
  criquete: <GiCricketBat className="w-4 h-4" />,
  boxe: <GiBoxingGlove className="w-4 h-4" />,
  mma: <FaUserNinja className="w-4 h-4" />,
  eSports: <SiApostrophe className="w-4 h-4" />,
};
