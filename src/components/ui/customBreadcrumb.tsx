"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface Crumb {
  label: string;
  href?: string;
}

export interface CustomBreadcrumbProps {
  items: Crumb[];
}

export function CustomBreadcrumb({ items }: CustomBreadcrumbProps) {
  return (
    <div className="bg-white py-2 w-full">
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <div key={index} className="flex items-center justify-center">
                <BreadcrumbItem>
                  {isLast || !item.href ? (
                    <BreadcrumbPage className="mb-[1px] mr-3 text-[12px] font-bold">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      href={item.href}
                      className="text-black mb-[1px] mr-3 text-[12px] font-bold"
                    >
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator className="" />}
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
