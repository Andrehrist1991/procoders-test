import React from 'react'

export function CryptoItem({ priceUsd, uahPrice, rubPrice, symbol, setCrypto }) {

    const handleSetCrypto = () => {
        setCrypto(priceUsd);
    }

    console.log(typeof priceUsd)

    return (
        <div className="col-md-4">
            <div className="crypto-item" onClick={handleSetCrypto}>
                {symbol}
                <ul className="crypto-item__lst">
                    <li className="crypto-item__itm">USD: {priceUsd}</li>
                    <li className="crypto-item__itm">UAH: {(priceUsd * uahPrice).toFixed(1)}</li>
                    <li className="crypto-item__itm">RUB: {(priceUsd * rubPrice).toFixed(1)}</li>
                </ul>
            </div>
        </div>
    )
}

export default CryptoItem;
