import React from 'react';
import Logo from '../../assets/img/Logo.png';
import "./Menu.css";
import Button from '../components/Button';


function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Bruno Flix" />
            </a>

            <Button as="a" className="Button" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;