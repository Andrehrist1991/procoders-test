import React from 'react'

export function CryptoItem({ priceUsd, symbol }) {

    const parseIntPrice = parseFloat(priceUsd);

    const toFixedPrice = parseIntPrice.toFixed(1);

    console.log(typeof toFixedPrice)

    return (
        <div className="col-md-4">
            <div className="crypto-item">
                {symbol}
                <ul className="crypto-item__lst">
                    <li className="crypto-item__itm">USD: {priceUsd}</li>
                    <li className="crypto-item__itm">UAH:</li>
                    <li className="crypto-item__itm">RUB:</li>
                </ul>
            </div>
        </div>
    )
}

export default CryptoItem;
