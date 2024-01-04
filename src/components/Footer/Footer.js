import s from './Footer.module.css';

function Footer({ children }) {
    return (
        <div className={s.footerContainer}>
            <p>FRESCO Team. All rights reserved | Design: FRESCO Team </p> 
        </div>
    );
}

export default Footer;