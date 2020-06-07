import React, { useState } from 'react';
import { Card as CardComponent } from 'antd';
import ReactCardFlip from 'react-card-flip';
import { Link } from "react-router-dom";

const { Meta } = CardComponent;

export const Card = ({ el, selectProduct }) => {
    const [isFlipped, chaneFlipped] = useState(false)
    // console.log('>>>selectProductAction', selectProduct)
    const onChangeFlipped = () => {
        chaneFlipped(!isFlipped)
        selectProduct(el)
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={el.image} style={{ minHeigh: '320px' }} />}
                onClick={onChangeFlipped}
            >
                <Link to='/details'><Meta title={el.name} description="www.instagram.com" /></Link>
            </CardComponent>

            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={el.image} style={{ minHeigh: '320px' }} />}
                onClick={onChangeFlipped}
            >
                <Link to='/details'><Meta title='BACK' description="www.instagram.com" /></Link>
            </CardComponent>
        </ReactCardFlip>
    );
}
