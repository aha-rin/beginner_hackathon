import React, { useState } from "react";
import styles from './Price.module.css';

function PriceRange() {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleMinRange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) || value === '')
            setMinPrice(value);
    };

    const handleMaxRange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) || value === '')
            setMaxPrice(value);
    };

    return (
        <div className={styles.Price}>
            <h5>가격</h5>
            <input type="text" placeholder="min" value={minPrice} onChange={handleMinRange} />
            ~ <input type="text" placeholder="max" value={maxPrice} onChange={handleMaxRange} />
        </div>
    );
}

export default PriceRange;
