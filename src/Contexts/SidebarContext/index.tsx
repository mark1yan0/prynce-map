import { createContext, useContext, useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';

interface ISidebarContext {
  isOpened: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const SidebarContext = createContext<ISidebarContext>({
  isOpened: false,
  openSidebar: () => {},
  closeSidebar: () => {},
});

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isTablet } = useWindowWidth();
  const [sidebarOpen, setSidebarOpen] = useState(!isTablet ? true : false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <SidebarContext.Provider
      value={{
        isOpened: sidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebar = () => {
  return useContext(SidebarContext);
};

export default useSidebar;
