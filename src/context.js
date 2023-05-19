import React, { useContext, useState, useRef } from "react";
import sublinks from './data'


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   const sidebarRef = useRef()
   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

   const [location, setLocation] = useState({})
   const [page, setPage] = useState({ page: "", links: [] })


   const onOpenSidebar = () => {
      sidebarRef.current.showModal()
   }

   const onCloseSidebar = () => {
      sidebarRef.current.close()
   }

   const onOpenSubmenu = (text, coordinates) => {
      const page = sublinks.find((link) => link.page === text);
      setPage(page);
      setLocation(coordinates);
      setIsSubmenuOpen(true);
   }

   const onCloseSubmenu = () => {
      setIsSubmenuOpen(false);
   }



   return (
      <AppContext.Provider value={{
         sidebarRef,
         onOpenSidebar,
         onCloseSidebar,
         onOpenSubmenu,
         onCloseSubmenu,
         isSubmenuOpen,
         location,
         page

      }}>
         {children}
      </AppContext.Provider>
   )
}


export const useGlobalContext = () => {
   return useContext(AppContext)
}

export { AppProvider, AppContext }