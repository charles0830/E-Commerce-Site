import React,{ Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../phonelogo.svg'
import styled from "styled-components";

export default class Navbar extends Component{
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm=5">
                {/*
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to='/'>
                    <img src={logo} className="navbar-brand" alt="store"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link text-white">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2"><i className='fas fa-cart-plus pr-2'/> My Cart</span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--mainWhite);
  color: var(--mainWhite);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.2s ease-in-out;
  &:hover{
    background: var(--mainWhite);
    color: var(--lightBlue);
  }
  &:focus{
    outline: none;
  }
`
const NavWrapper = styled.nav`
  background-color: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`