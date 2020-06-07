import React from 'react';
import { Layout } from 'UI/Layout'

export const ProductDetailComponent = ({ item }) => {
    var elem = item ? item.name : 'none'
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {elem}
        </Layout>
    )
}
