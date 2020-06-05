import React from 'react';
import { Row, Col } from 'antd';
import { Card } from './Blocks/Card'
import { Layout } from 'UI/Layout'

const data = [
    {
        id: 1,
        name: "шарик",
        image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg"
    },
    {
        id: 2,
        name: "футболка",
        image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg"
    },
    {
        id: 3,
        name: "шарик 2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
    },
    // {
    //     id: 4,
    //     name: "шарик",
    //     image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg"
    // },
    // {
    //     id: 5,
    //     name: "футболка",
    //     image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg"
    // },
    // {
    //     id: 6,
    //     name: "шарик 2",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
    // }
]


export const ProductList = () => {
    const renderCards = (element) => (
        <Col span={4}>
            <Card el={element} />
        </Col>
    )

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Row justify="space-around">
                {
                    data.map(el => renderCards(el))
                }
            </Row>
        </Layout>
    );
}
