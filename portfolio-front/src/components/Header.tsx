import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(): React.ReactElement {
    const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false);
    const [btnBurger, setBtnBurger] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setBtnBurger(document.querySelector('#btn-burger') as HTMLElement);
    }, []);

    const handleBurgerToggle = (): void => {
        setOpenedBurgerMenu(!openedBurgerMenu);
        if (btnBurger?.classList) {
            if (btnBurger.classList.contains('open')) {
                btnBurger.classList.remove('open');
                void btnBurger.offsetWidth; // https://stackoverflow.com/questions/60686489/what-purpose-does-void-btnBurger-offsetwidth-serve
                btnBurger.classList.add('close');
            } else if (btnBurger.classList.contains('close')) {
                btnBurger.classList.remove('close');
                void btnBurger.offsetWidth;
                btnBurger.classList.add('open');
            } else {
                btnBurger.classList.add('open');
            }
        }
    };

    const closeBurger = (): void => {
        handleBurgerToggle();
    };

    const clickOnLogo = (): void => {
        setOpenedBurgerMenu(false);
    };

    return (
        <header>
            <div id='logo-and-burger-div'>
                <NavLink className='logo-font' to='/' onClick={clickOnLogo}>
                    Cécile Dubois
                </NavLink>
                <button
                    id='btn-burger'
                    type='button'
                    onClick={handleBurgerToggle}
                    aria-label='Bouton burger'
                >
                    <div className='burger-line' />
                    <div className='burger-line' />
                    <div className='burger-line' />
                </button>
            </div>
            <div
                className={`${openedBurgerMenu ? 'opened' : 'hidden'}`}
                id='menu'
            >
                <NavLink to='/' className='menu-link' onClick={closeBurger}>
                    Accueil
                </NavLink>
                <NavLink to='/who' className='menu-link' onClick={closeBurger}>
                    Qui suis&#8209;je&nbsp;?
                </NavLink>
                <NavLink
                    to='/skills'
                    className='menu-link'
                    onClick={closeBurger}
                >
                    Mes services
                </NavLink>
                <NavLink
                    to='/portfolio'
                    className='menu-link'
                    onClick={closeBurger}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to='/contact'
                    className='menu-link'
                    onClick={closeBurger}
                >
                    Contact
                </NavLink>
            </div>
        </header>
    );
}
