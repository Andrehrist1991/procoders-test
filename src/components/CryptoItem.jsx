import React from 'react';

export function CryptoItem({ priceUsd, uahPrice, rubPrice, symbol, setCrypto, id, image }) {

    const handleSetCrypto = () => {
        setCrypto(id);
    }

    return (
        <div className="col-md-4">
            <div className="crypto-item" onClick={handleSetCrypto}>
                <div className="crypto-item__left">
                    {/* <img src={require(`../assets/img/${id}.png`)} alt="xrp"/> */}
                    <img className="crypto-item__img" src={image} alt="xrp"/>
                    <b>{symbol}</b>
                </div>
                <ul className="crypto-item__lst">
                    <li className="crypto-item__itm"><b>USD:</b> {(priceUsd * 1).toFixed(1)}</li>
                    <li className="crypto-item__itm"><b>UAH:</b> {(priceUsd * uahPrice).toFixed(1)}</li>
                    <li className="crypto-item__itm"><b>RUB:</b> {(priceUsd * rubPrice).toFixed(1)}</li>
                </ul>
            </div>
        </div>
    )
}

export default CryptoItem;

