import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ReactNode } from "react";

interface MenuItem {
  label?: string;
  type: "content" | "separator";
  exec?: () => void;
  shortcut?: string;
}

interface DynamicMenubarProps {
  label: ReactNode;
  items: MenuItem[];
}

export function DynamicMenubar({ label, items }: DynamicMenubarProps) {
  return (
    <Menubar className="bg-black border-none w-10 h-10">
      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-1 h-full w-full cursor-pointer">
          {label}
        </MenubarTrigger>
        <MenubarContent>
          {items.map((item, index) => {
            if (item.type === "separator") {
              return <MenubarSeparator key={index} />;
            }

            return (
              <MenubarItem key={index} onClick={item.exec}>
                {item.label}
                {item.shortcut && (
                  <MenubarShortcut>{item.shortcut}</MenubarShortcut>
                )}
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
