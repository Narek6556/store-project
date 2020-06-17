import React, { Component } from 'react'
import Product from './Product';
import Titles from './Titles';
import { storeProducts } from '../data';
import { ProductConsumer } from '../constext';


export default class ProductList extends Component {
    state = { 
        products: storeProducts
    }


    render() {
        return (
            <React.Fragment>
                <div className= 'py-5'>
                    <div className = 'container'>
                        <Titles name = 'phones' title = 'in stock' />
                        <div className = 'row'> 
                            <ProductConsumer>
                             {value => { 
                                 console.log(value);
                             }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
