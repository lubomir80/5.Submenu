import { useGlobalContext } from './context'
import { RiCloseFill } from "react-icons/ri"
import sublinks from "./data"

function Sidebar() {
   const { onCloseSidebar, sidebarRef } = useGlobalContext()

   return (
      <dialog ref={sidebarRef} className='sidebar'>
         <button
            onClick={onCloseSidebar}
            className="btn-burger btn-hover icon"
         ><RiCloseFill />
         </button>
         <div className='sidebar__links'>
            {sublinks.map((item, index) => {
               const { page, links } = item;
               return (
                  <article key={index}>
                     <h4>{page}</h4>
                     <div className='sidebar__sublinks'>
                        {links.map((item, index) => {
                           const { label, icon, url } = item;
                           return <a href={url} key={index}>{icon}{label}</a>
                        })}
                     </div>
                  </article>
               )
            })}
         </div>
      </dialog>
   )
}

export default Sidebar