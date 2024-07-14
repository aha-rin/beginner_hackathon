import './WeddingTable.scss';
import React from 'react';

function WeddingTable({ values ,total,handleSelection}) {
    const openPopup = (item) => {
        let popupUrl;
    
        switch (item) {
            case 'weddingHall':
                popupUrl = 'http://www.naver.com';
                break;
            case 'Sdm':
                popupUrl = 'http://www.naver.com';
                break;
            case 'Shots':
                popupUrl = 'http://www.naver.com';
                break;
            default:
                return;
        }
    
        window.open(popupUrl, 'Popup', 'width=600,height=400');
    };
    

    return (
        <table className="WeddingTable">
            <caption>예산금액</caption>
            <thead>
                
                <tr>
                    <th><a href="#" onClick={(e) => { e.preventDefault(); openPopup('weddingHall'); }}>예식장+식대</a></th>
                    <td>{values.weddingHall}</td>
                    
                </tr>
                <tr>
                    <th><a href="#" onClick={(e) => { e.preventDefault(); openPopup('Sdm'); }}>스드메</a></th>
                    <td>{values.Sdm}</td>
                    
                    </tr>
                    <tr>
                    <th><a href="#" onClick={(e) => { e.preventDefault(); openPopup('Shots'); }}>사진</a></th>
                    <td>{values.Shots}</td>
                </tr>
                <tr>
                    <th>합계</th>
                    <td>{total}</td>
                </tr>
            </thead>
        </table>
    );
}

export default WeddingTable;