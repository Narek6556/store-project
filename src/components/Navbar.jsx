import React, { Component } from 'react';
import { MdPhoneIphone } from 'react-icons/md';
import { FaOpencart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <nav className = 'navbar bg-primary navbar-expand-sm navbar-dark px-sm-5'>
                <Link to = '/'>
                    <MdPhoneIphone size = {48} color = 'white' className = 'navbar-brand'/>
                </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className = 'nav-item ml-5'>
                            <Link to = '/' className = 'nav-link'style = {{textTransform: 'capitalize',fontSize: '1.5rem'}}>products</Link>
                        </li>
                    </ul>
                <Link to = '/cart' className = 'ml-auto'>
                    <ButtonContainer>
                        <span className = 'mr-2'>
                            <FaOpencart size={38}/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </nav>
        )
    }
}





