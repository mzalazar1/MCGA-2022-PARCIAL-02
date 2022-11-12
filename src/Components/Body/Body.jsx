import React from 'react';
import styles from './Body.module.css';

const BodySection = () => {
    return (
        <div>
            <h1 className={styles.h1}>Bienvenido a *Nombre aplicación*</h1>
            <h2 className={styles.h2}>Esta aplicación fue desarrollada por Marcos Zalazar y Pablo Toledo para rendir el segundo parcial de la materia MCGA en 2022</h2>
            <h3 className={styles.h3}>Título</h3>
            <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nobis ullam laudantium tempora unde magni qui accusantium similique obcaecati ea nemo, nam, ducimus alias eveniet quidem sint rem ex sunt.</p>
            <p className={styles.texto}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim officiis ducimus eaque in dolores quam. Quos quis labore quia. Mollitia deleniti fugit quo quae necessitatibus quam animi odit maxime soluta.</p>
        </div>
    );
}

export default BodySection;