import './WeddingCompare.scss';
import React, {useState} from 'react';

function WeddingCompare({analizes}) {
    

    return (
        <table className="WeddingCompare" >
            <caption>나의 예산은?</caption>
            <thead>
                <tr style={{backgroundColor:'white'}}>
                    <th>비교</th>
                    <th>평균금액</th>
                    <th>수치</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{analizes.arrow}</td>
                    <td>{analizes.average}</td>
                    <td>{analizes.hardNum}</td>
                </tr>
                <tr>
                    <td>{analizes.arrow}</td>
                    <td>{analizes.average}</td>
                    <td>{analizes.hardNum}</td>
                </tr>
                <tr>
                    <td>{analizes.arrow}</td>
                    <td>{analizes.average}</td>
                    <td>{analizes.hardNum}</td>
                </tr>
                <tr>
                    <td>{analizes.arrow}</td>
                    <td>{analizes.average}</td>
                    <td>{analizes.hardNum}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default WeddingCompare;