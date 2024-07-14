import React, { useState, useEffect } from 'react';
import WeddingTable from './WeddingCP/WeddingTable';
import WeddingCompare from './WeddingCP/WeddingCompare';

function App() {
    const [values, setValues] = useState({
        weddingHall: 0,
        Sdm: 0,
        Shots: 0,
    });
    const [total, setTotal] = useState(0);
    const[analizes, setAnalizes]=useState({
        arrow:'',
        average:'',
        hardNum:'',
    })

    useEffect(() => {
        const sum = parseInt(values.weddingHall) + parseInt(values.Sdm) + parseInt(values.Shots);
        setTotal(sum);
    }, [values]);

    const handlePopupValue = (item, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [item]: value,
        }));
    };

    return (
        <div>
            <h1 style={{ fontSize: '60px', textAlign: 'center', textDecoration:'bold' ,borderBottom: '1px dashed black'}}>Wedding Planner</h1>
            <br/>
            <div className="tables-container" style={{textAlign:'center'}}>
            <WeddingTable values={values} total={total} handleSelection={handlePopupValue} />
            <WeddingCompare analizes={analizes}/>
            </div>
        </div>
    );
};


export default App;
