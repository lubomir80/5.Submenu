import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

function Submenu() {
   const { isSubmenuOpen, onCloseSubmenu, location, page: { page, links } } = useGlobalContext()
   const submenuRef = useRef();

   useEffect(() => {
      const submenu = submenuRef.current
      const { center, bottom } = location;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;

   }, [page, links])

   const closeHandler = (e) => {
      if (!e.target.classList.contains("link__btn")) {
         onCloseSubmenu()
      }
   }


   return (
      <aside
         className={isSubmenuOpen ? "submenu show" : "submenu"}
         ref={submenuRef}
         onMouseLeave={closeHandler}
      >
         {links.map((links, index) => {
            const { url, label, icon } = links;
            return <a href={url} key={index}>{icon}{label}</a>
         })}
      </aside>
   )
}

export default Submenu