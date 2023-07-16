import { createContext, ReactElement, useState } from "react";

const initContext = {
  Breadcrumbs: {},
  setBreadcrumbs: () => {},
};

interface BreadcrumbsProps {
    
}

interface BreadcrumbsContextProps{
    Breadcrumbs: BreadcrumbsProps,
    setBreadcrumbs: Function
}

export const BreadcrumbsContext = createContext<any>(initContext);

const BreadcrumbsContextProvider = ({ children }: any) => {
  const [Breadcrumbs, setBreadcrumbs] = useState<BreadcrumbsProps>(initContext.Breadcrumbs);
  return (
    <BreadcrumbsContext.Provider
      value={{
        Breadcrumbs,
        setBreadcrumbs,
      }}
    >
      {children}
    </BreadcrumbsContext.Provider>
  );
};

export default BreadcrumbsContextProvider
