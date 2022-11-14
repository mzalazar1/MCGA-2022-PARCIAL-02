import React from 'react';
import styles from './Header.module.css';

const HeaderSection = () => {
    return (
        <div className={styles.cabecera}>
            <p className={styles.titulo}>Aplicación Parcial MCGA - 02</p>
            <div className={styles.navegacion}>
                <a href='./'>Home</a>
                <a href='./productos'>Productos</a>
            </div>
        </div>
    );
}

export default HeaderSection;