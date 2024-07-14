import React, { useState } from "react";
import styles from './MainPage.module.css';

function MainPage() {
    return (
        <div>
            <div className={styles.header}>Wedding</div>
            <h1>Wedding Planner</h1>
            <form>
                <input value="id" className={styles.id} />
                <input value="password" className={styles.pass} />
                <button className={styles.login}>login</button>
            </form>
            <img src="https://i.pinimg.com/564x/66/3e/35/663e35879d3d0f3cb1e5c2770f36ab75.jpg" />
            <button className={styles.budget}>예산비교</button>
            <button className={styles.paper}>청접장</button>
        </div>
    );
}

export default MainPage;