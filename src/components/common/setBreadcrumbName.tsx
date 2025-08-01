'use client';

import { useBreadcrumb } from '@/contexts/breadcurmbContext';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function SetBreadcrumbName({ name }: { name: string }) {
  const pathname = usePathname();
  const { setPathName } = useBreadcrumb();

  useEffect(() => {
    if (name) {
      setPathName(pathname, name);
    }
  }, [pathname, name, setPathName]);

  return null; 
}
