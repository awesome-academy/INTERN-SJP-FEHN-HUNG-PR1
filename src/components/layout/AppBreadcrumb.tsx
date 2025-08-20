'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { HiMiniSlash } from "react-icons/hi2";
import { useBreadcrumb } from '@/contexts/breadcurmbContext';

const pathTranslations: { [key: string]: string } = {
  products: 'Danh sách sản phẩm',
  blog: 'Bài viết',
  contact: 'Liên hệ',
  about: 'Giới thiệu',
};

export function AppBreadcrumb() {
  const pathname = usePathname();
  const { pathNames } = useBreadcrumb();

  if (pathname === '/dashboard') {
    return null;
  }

  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <Breadcrumb className="py-4 w-[62%] px-4 ml-auto mr-auto">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          
          const isLast = index === pathSegments.length - 1;

          const displayName = pathNames.get(href) || pathTranslations[segment] || segment;

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator>
                <HiMiniSlash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{displayName}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{displayName}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
