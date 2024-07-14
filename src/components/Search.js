import React, { useEffect, useState } from 'react';
import LocationSelector from './LocationSelector';
import Price from './Price';
import axios from 'axios';
import styles from './Search.module.css';

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedItemId, setSelectedItemId] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://example.com/api/data');
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching', error);
        }
    };

    const handleSearch = () => {
        const filteredData = searchResults.filter(item =>
            item.province === selectedProvince &&
            item.district === selectedDistrict &&
            item.price >= parseInt(minPrice) &&
            item.price <= parseInt(maxPrice)
        );
        setSearchResults(filteredData);
    }

    const handleSortAsc = () => {
        // 별점 오름차순 정렬
        const sortedData = [...searchResults].sort((a, b) => a.rating - b.rating);
        setSearchResults(sortedData);
        setSortOrder('asc');
    };

    const handleSortDesc = () => {
        // 별점 내림차순 정렬
        const sortedData = [...searchResults].sort((a, b) => b.rating - a.rating);
        setSearchResults(sortedData);
        setSortOrder('desc');
    };

    const handleItemClick = (id) => {
        setSelectedItemId(id);
    };

    return (
        <div class="filteredList">

            <button className={styles.SearchButton} onClick={handleSearch}>조회</button>
            <div className={styles.result}>
                <h2>List</h2>
                <div className={styles.datalist}>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'pink' }}>
                        <div style={{ flex: 1 }}>업체명</div>
                        <div style={{ flex: 1 }}>가격</div>
                        <div style={{ flex: 1 }}>위치</div>
                        <div style={{ flex: 1 }}>별점
                            <button onClick={handleSortAsc}>&#x25B2;</button>
                            <button onClick={handleSortDesc}>&#x25BC;</button>
                        </div>
                    </div>
                    <ul className={styles.listStyle}>
                        {searchResults.map(item => (
                            <li
                                key={item.id}
                                onClick={() => handleItemClick(item.id)}
                                style={{
                                    backgroundColor: selectedItemId === item.id ? 'yellow' : 'white',
                                    cursor: 'pointer',
                                }} >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ flex: 1 }}>{item.businessName}</div>
                                    <div style={{ flex: 1 }}>{item.price}</div>
                                    <div style={{ flex: 1 }}>{item.location}</div>
                                    <div style={{ flex: 1 }}>{item.rating}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search;