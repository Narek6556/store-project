import React from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext()


class ProductProvider extends React.Component { 
    store = { 
        products: storeProducts,
        detailProduct: detailProduct
    }

    render() { 
        return ( 
            <ProductContext.Provider value = {{ 
                ...this.state
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer}