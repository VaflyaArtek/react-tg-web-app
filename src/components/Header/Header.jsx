import React, {useState, useEffect} from 'react';
import {fetchCoins} from '../../hooks/api';
import {useTelegram} from '../../hooks/useTelegram';
import './Header.css';
import Coin from '../Coin/Coin';

const Header = () => {
    const [coins, setCoins] = useState(0);
    const {user} = useTelegram();

    useEffect(() => {
        async function fetchData() {
            try {
                setCoins(await fetchCoins());
            } catch (error) {
                console.error('Error fetching coins:', error);
            }
        }

        fetchData();
    }, []);

    const handleClaim = () => {
        setCoins(coins + 1);
    };

    return (
        <div className='first-page'>
            <div className='header'>
                <div className={'header__container'}>
                    Balance {coins}
                    <div><img className={'header__img'} src={'media/coin_icon.svg'} alt={'coin-icon'}/></div>
                </div>
            </div>
            <Coin onClaim={handleClaim}/>
        </div>
    );
};

export default Header;
