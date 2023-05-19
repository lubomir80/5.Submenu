import React from 'react'
import { MdOutlineMenu } from "react-icons/md"
import { useGlobalContext } from './context'



function Navbar() {
   const { onOpenSidebar, onOpenSubmenu, onCloseSubmenu } = useGlobalContext();

   const displySubmenu = (e) => {
      const page = e.target.textContent;
      const tempBtn = e.target.getBoundingClientRect();
      const center = (tempBtn.left + tempBtn.right) / 2;
      const bottom = tempBtn.bottom;
      onOpenSubmenu(page, { center, bottom })
   }

   const handelSubmenu = (e) => {
      if (!e.target.classList.contains("link__btn")) {
         onCloseSubmenu()
      }
   }



   return (
      <nav className='navbar' onMouseOver={handelSubmenu}>
         <div className="navbar__center">
            <a href='#' className="navbar__logo ">
               logo
            </a>
            <button
               onClick={onOpenSidebar}
               className="btn-burger btn-hover icon">
               <MdOutlineMenu />
            </button>
            <ul className='navbar__link'>
               <li>
                  <button className='link__btn' onMouseOver={displySubmenu}>products</button>
               </li>
               <li>
                  <button className='link__btn' onMouseOver={displySubmenu}>developers</button>
               </li>
               <li>
                  <button className='link__btn' onMouseOver={displySubmenu}>company</button>
               </li>
            </ul>
            <button className="btn-signin btn-hover text "> Sign in</button>
         </div>
      </nav>
   )
}

export default Navbar