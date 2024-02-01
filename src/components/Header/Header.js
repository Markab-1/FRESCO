import {NavLink, Outlet} from 'react-router-dom';
import logo from '../../figs/FRESCO_Logo_NoText.png';


import s from './Header.module.css';

function Header({children}) {
    return (
        <div>        
            <div className={s.container}>
            <img className={s.img} src={logo} alt="logo" />
            <h1 className={s.title}>The FRESCO JWST Survey </h1>
            <ul className={s.menuList}>
                <li>
                    <NavLink to= "/">
                        <div className={s.menuItem}>Home</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to= "/survey">
                        <div className={s.menuItem}>Survey</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to= "/team">
                        <div className={s.menuItem}>Team</div>
                    </NavLink>
                </li>
                <li > 
                    <NavLink to= "/products">
                        <div className={s.menuItem}>Data products</div>
                    </NavLink>
                </li>
                <li > 
                    <NavLink to= "/publications">
                        <div className={s.menuItem}>Publications</div>
                    </NavLink>
                </li>
            </ul>            
            </div>
            <Outlet/>
        </div>
        
    );
}

export default Header;