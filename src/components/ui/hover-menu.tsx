import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface IItems {
  icon: React.ReactNode;
  title: string;
  url: string;
}

export default function HoverMenu({
  label,
  items,
}: {
  label: string;
  items: IItems[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        onMouseEnter={() => setOpen(true)}
        className="hover:text-zinc-400 text-white transition-colors cursor-pointer px-4 h-[70px]"
      >
        {label}
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="bg-black text-white w-[90vw] max-w-4xl p-4 rounded-xl shadow-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
        align="center"
      >
        {Array.isArray(items)
          ? items.map((item) => (
              <div
                key={item.title}
                className="hover:bg-zinc-800 p-2 flex items-center justify-start rounded cursor-pointer text-center text-sm font-medium gap-2"
              >
                {item.icon}
                <p>{item.title}</p>
              </div>
            ))
          : items}
      </PopoverContent>
    </Popover>
  );
}
