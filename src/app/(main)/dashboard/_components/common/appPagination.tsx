'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

interface AppPaginationProps {
  totalPages: number;
  paramName?: string;
}

export function AppPagination({ totalPages, paramName = '_page' }: AppPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get(paramName)) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set(paramName, String(pageNumber));
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            href={createPageURL(currentPage - 1)} 
            aria-disabled={currentPage <= 1}
            className={currentPage <= 1 ? "pointer-events-none opacity-50" : undefined}
            scroll={false}
          >
            <IoIosArrowDropleft className="hover:scale-[1.1] duration-200"/>
          </PaginationPrevious>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext 
            href={createPageURL(currentPage + 1)}
            aria-disabled={currentPage >= totalPages}
            className={currentPage >= totalPages ? "pointer-events-none opacity-50" : undefined}
            scroll={false}
          >
            <IoIosArrowDropright className="hover:scale-[1.1] duration-200"/>
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
