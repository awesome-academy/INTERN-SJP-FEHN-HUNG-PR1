'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';

interface BreadcrumbContextType {
  pathNames: Map<string, string>;
  setPathName: (path: string, name: string) => void;
  removePathName: (path: string) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [pathNames, setPathNames] = useState<Map<string, string>>(new Map());

  const setPathName = useCallback((path: string, name: string) => {
    setPathNames(prev => new Map(prev).set(path, name));
  }, []);

  const removePathName = useCallback((path: string) => {
    setPathNames(prev => {
      const newMap = new Map(prev);
      newMap.delete(path);
      return newMap;
    });
  }, []);

  const value = useMemo(() => ({
    pathNames,
    setPathName,
    removePathName
  }), [pathNames, setPathName, removePathName]);

  return (
    <BreadcrumbContext.Provider value={value}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumb() {
  const context = useContext(BreadcrumbContext);
  if (context === undefined) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
}
