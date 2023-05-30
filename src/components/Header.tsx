import React from 'react';
import './Header.css';

export type HeaderProps = {
    logo: string;
}

export const Header = ({logo}: HeaderProps) => {
    return (
        <header>
            <div className='nameLogo'>
                <img src={logo} alt="logo de l'application"></img>
                <h1>Re-Act</h1>
            </div>
            <p className='motto'>Re-view and react with your friends all your favorite movies</p>
        </header>
    )
}