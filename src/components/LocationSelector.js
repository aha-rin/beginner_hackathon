import React, { useState } from "react";
import styles from './LocationSelector.module.css';


const provinces = {
    서울: ["강서", "용산", "서초"],
    부산: ["수영", "해운대", "남구"],
    창원: ["진해", "성산", "마산"]
}

function LocationSelector() {
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const handleProvinceChange = (e) => {
        setSelectedProvince(e.target.value);
        setSelectedDistrict('');
    };
    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    };


    return (
        <div className={styles.location}>
            <h5>지역</h5>
            <form className={styles.locationInput}>
                <select className={styles.province} value={selectedProvince} onChange={handleProvinceChange}>
                    <option value="none">시</option>
                    {Object.keys(provinces).map((province, index) => (
                        <option key={index} value={province}>{province}</option>

                    ))}
                </select>
                {selectedProvince && (

                    <select className={styles.district} value={selectedDistrict} onChange={handleDistrictChange}>
                        <option class="none">구</option>
                        {provinces[selectedProvince].map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>

                )}
            </form>
        </div>
    );
}

function getDistricts(province) {
    const districts = {
        서울: ["강서", "용산", "서초"],
        부산: ["수영", "해운대", "남구"],
        창원: ["진해", "성산", "마산"]
    };
    return districts[province] || [];
}

export default LocationSelector;