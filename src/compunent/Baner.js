import React from 'react';
import styles from "./Baner.module.css";


const Baner = () => {
    return (
        <>
        <div className={styles.baner}>
             <div className={styles.textBox}>
                 <h1>BOTOSTART</h1>
                 <h3>we're learning <span>  React.js </span></h3>
             </div>
             <div className={styles.liner}></div>
        </div>   
        </>
    );
};

export default Baner;