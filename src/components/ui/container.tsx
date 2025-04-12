import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // opcional, caso use clsx ou utilitário de merge

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("w-full max-w-[67rem] mx-auto px-4", className)}>
      {children}
    </div>
  );
}
