import React, { useState } from 'react';
import axios from 'axios';
import myImage1 from './WeddingCP/wedding1.jpg';
import myImage2 from './WeddingCP/wedding2.jpg';
import myImage3 from './WeddingCP/wedding3.jpg';
import myImage4 from './WeddingCP/wedding4.jpg';

function CardSelector() {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardChange = (event) => {
        setSelectedCard(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // 폼의 기본 동작을 막음

        try {
            const response = await axios.post('API 엔드 포인트', {
                image: selectedCard // 선택된 카드의 값
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div style={styles.container}>
        <form onSubmit={handleSubmit}>
            <h1 style={{ fontSize: '60px', textAlign: 'center', textDecoration:'bold' }}>Wedding Planner</h1>
            <h3 style={{textAlign:'center'}}>원하는 디자인의 청첩장을 선택하세요</h3>
            <div className='myDIV' style={styles.imageContainer}>
                <div>
                    <img src={myImage1} style={styles.image} />
                    <input
                        type='radio'
                        value='image1.jpg'
                        checked={selectedCard === 'image1.jpg'}
                        onChange={handleCardChange} />
                    <label>Image 1</label>
                </div>
                <div>
                    <img src={myImage2} style={styles.image} />
                    <input
                        type='radio'
                        value='image2.jpg'
                        checked={selectedCard === 'image2.jpg'}
                        onChange={handleCardChange} />
                    <label>Image 2</label>
                </div>
                <div>
                    <img src={myImage3} style={styles.image} />
                    <input
                        type='radio'
                        value='image3.jpg'
                        checked={selectedCard === 'image3.jpg'}
                        onChange={handleCardChange} />
                    <label>Image 3</label>
                </div>
                <div>
                    <img src={myImage4} style={styles.image} />
                    <input
                        type='radio'
                        value='image4.jpg'
                        checked={selectedCard === 'image4.jpg'}
                        onChange={handleCardChange} />
                    <label>Image 4</label>
                </div>
            </div>
            <button type="submit">선택</button>
        </form>
        </div>
    );
}

const styles = {
    container:{
    
        backgroundColor:'ivory',
        height:'900px'
    },
    imageContainer: {
        borderTop: '1px dashed navy',
        marginTop:'20px',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        margin: '20px 0',
    },
    image: {
        width: '300px',  // 정사각형 크기 조정
        height: '300px',
        objectFit: 'cover', // 비율 유지하며 채우기
        margin: '10px', // 이미지 간격 조정
    },
};

export default CardSelector;
