import React from "react";
import styles from "./Navbar.module.css" 
import JSlogo from "../img/JavaScript-logo.png"
import REACTlogo from "../img/react-1.svg"
const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listCom}>
                <ul className={styles.list}>
                    <li>Home Page</li>
                    <li>Producs</li>
                    <li>Aboute Us</li>
                </ul>
            </div>
            <div className={styles.Img}>
                <img src={REACTlogo} alt="" />
            </div>
        </header>
    );
};

export default Navbar;