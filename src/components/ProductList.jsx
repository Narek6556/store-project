import React, { Component } from 'react'
import Product from './Product';
import Titles from './Titles';

export default class ProductList extends Component {
    state = { 
        products: []
    }


    render() {
        return (
            <React.Fragment>
                <div className= 'py-5'>
                    <div className = 'container'>
                        <Titles name = 'phones' title = 'in stock' />
                        <div className = 'row' />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
