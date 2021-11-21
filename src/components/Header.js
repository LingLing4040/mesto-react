import React from 'react';
import logoPath from '../images/logo.svg';

function Header() {
    return (
        <div>
            <header className='header'>
                <img className='header__logo' src={logoPath} alt='Логотип Mesto' />
            </header>
        </div>
    );
}

export default Header;
