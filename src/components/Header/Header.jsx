import React from 'react';
import {useTelegram} from '../../hooks/useTelegram';
import './Header.css'

const Header = () => {
    const {user} = useTelegram()
    return (
        <div className={'header'}>
            <span className={'username'}>word {user?.username}</span>
        </div>
    );
};

export default Header;