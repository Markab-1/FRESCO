import {NavLink} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import s from './NavList.module.css';


const NavList = ({children}) => {

    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })
    
    var currentMenuItem = s.menuItemMobile
    var currentMenuList = s.menuListMobile

    if (isTablet) {
        currentMenuItem = s.menuItemTablet ;
        currentMenuList = s.menuListTablet 
    }
    if (isDesktop) {
        currentMenuItem = s.menuItem ;
        currentMenuList = s.menuList 
    }

  return  ( 
    <div>        
  <ul className={currentMenuList}>
  <li>
      <NavLink to= "/"                     >
          <button className={currentMenuItem}>Home</button>
      </NavLink>
  </li>
  <li>
      <NavLink to= "/survey">
          <button className={currentMenuItem}>Survey</button>
      </NavLink>
  </li>
  <li>
      <NavLink to= "/team">
          <button className={currentMenuItem}>Team</button>
      </NavLink>
  </li>
  <li > 
      <NavLink to= "/products">
          <button className={currentMenuItem}>Data products</button>
      </NavLink>
  </li>
  <li > 
      <NavLink to= "/publications">
          <button className={currentMenuItem}>Publications</button>
      </NavLink>
  </li>
</ul> 
</div>);
}

export default NavList;