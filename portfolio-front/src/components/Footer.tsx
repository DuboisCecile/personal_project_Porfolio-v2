import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer(): React.ReactElement {
    return (
        <div className='footer'>
            <NavLink to='/mentions-legales'>Mentions légales</NavLink>
        </div>
    );
}
