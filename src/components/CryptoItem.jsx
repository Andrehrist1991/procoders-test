import React from 'react'

export function CryptoItem({ priceUsd, uahPrice, rubPrice, symbol, setCrypto, id }) {

    const handleSetCrypto = () => {
        setCrypto(id);
    }

    const priceToFixed = parseFloat(priceUsd).toFixed(1);

    return (
        <div className="col-md-4">
            <div className="crypto-item" onClick={handleSetCrypto}>
                {symbol}
                <ul className="crypto-item__lst">
                    <li className="crypto-item__itm">USD: {priceToFixed}</li>
                    <li className="crypto-item__itm">UAH: {(priceToFixed * uahPrice).toFixed(1)}</li>
                    <li className="crypto-item__itm">RUB: {(priceToFixed * rubPrice).toFixed(1)}</li>
                </ul>
            </div>
        </div>
    )
}

export default CryptoItem;
