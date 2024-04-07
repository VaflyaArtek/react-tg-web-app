import React from 'react';
import './Coin.css'

const Coin = ({ onClaim }) => {
    const handleClaim = () => {
        onClaim();
    };

    return (
        <div className={'coin-wrapper'}>
            <img src={'./media/coin.png'} className={'coin-img'} onClick={handleClaim}/>
            <div className={'main-btn__wrapper'}>
                <button className={'main-btn'}>Claim</button>
            </div>
        </div>
    );
};

export default Coin;

