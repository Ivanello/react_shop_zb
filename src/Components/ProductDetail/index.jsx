import { connect } from 'react-redux'
import { ProductDetailComponent } from './ProductDetail'

const mapStateToProps = (state) => ({
    item: state.products.selectedProduct
})

export const ProductDetail = connect(mapStateToProps)(ProductDetailComponent)
