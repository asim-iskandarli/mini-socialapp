import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { clearUser } from '../../redux/slices/userSlice';
import { BiMessageSquare, BiHomeAlt2 } from 'react-icons/bi'
import { Icon } from '../../globalStyles';
import AvatarComponent from '../Avatar';
import Search from './Search';
import { IoIosLogOut } from "react-icons/io";


const NavbarComponent = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userReducer)
    const navigate = useNavigate();
    const handlelogout = () => {
        localStorage.removeItem('userToken');
        dispatch(clearUser());
        navigate('/signin');
    }

    return (
        <NavbarBox>
            <Navbar>
                <Logo>
                    <Link to="/"><img src={require('../../images/logo.png')} alt="logo" /></Link>
                </Logo>
                <Search />
                <Menus>
                    <Menu>
                        <Icon>
                            <Link to="/">< BiHomeAlt2 /></Link>
                        </Icon>
                    </Menu>
                    <Menu>
                        <Icon>
                            <Link to="/messages">< BiMessageSquare /></Link>
                        </Icon>
                    </Menu>
                    <Menu>
                        <Link to={`/profile/${user.id}`}><AvatarComponent avatar={user.avatar} width={40} height={40} /></Link>
                    </Menu>
                    <LogoutBtn onClick={handlelogout}><IoIosLogOut fontSize={16}/></LogoutBtn>
                </Menus>
            </Navbar>
        </NavbarBox>
    )
}

export default NavbarComponent

const NavbarBox = styled.div`
    width: var(--navbar-width);
    margin: 0 auto;
    height: 50px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
`;

const Navbar = styled.div`
    width: var(--navbar-width);
    height: 50px;
    padding: 1rem;
    background-color: #fff;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`;

const Logo = styled.div`
    text-transform: uppercase;
    img {
        width: 50px;

        @media only screen and (max-width: 768px) {
            width: 30px;
        }
    }
`;

const Menus = styled.div`
    display: flex;
    align-items: center;
`;

const Menu = styled.div`
    padding: 10px;
    transition: all 0.3s ease;
    position: relative;
    a {
        color: #464646;
    }
    @media only screen and (max-width: 768px) {
        padding: 3px;
    }
`;

const LogoutBtn = styled.button`
    width: 6rem;
    height: 2rem;
    border: none;
    font-size: 12px;
    border: 1px solid #f04c4c;
    border-radius: 5px;
    background: none;
    color: var(--danger);
    font-weight: 600;
    transition: all 0.3s ease;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    cursor: pointer;

    &:hover {
        color: var(--danger-hover);
        background-color: var(--danger-hover-bg);
    }
    &:after {
        content: "Logout";
    }

    @media only screen and (max-width: 768px) {
        width: 2rem;
        font-size: 8px;
        margin-left: 5px;
        &:after {
            content: none;
        }
    }
`