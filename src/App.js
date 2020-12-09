import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRates } from './redux/actions/rate';

import { CryptoItem } from './components'

const App = () => {
  const dispatch = useDispatch();

  const { cryptoItems, uahPrice, rubPrice } = useSelector(({ rate }) => {
    return {
      cryptoItems: rate.cryptoArr,
      uahPrice: rate.priceUAH,
      rubPrice: rate.priceRUB
    }
  });

  const valToNumber = (value) => {
    return parseFloat(value).toFixed(1);
  }

  const [currentCrypto, setCurrentCrypto] = useState(0);

  React.useEffect(() => {
    fetchRates(dispatch);
  }, []);

  const onSetCryptoCurrency = (val) => {
    setCurrentCrypto(val);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {cryptoItems && cryptoItems.map(item => (
            <CryptoItem
              key={item.id}
              setCrypto={onSetCryptoCurrency}
              priceUsd={valToNumber(item.priceUsd)} 
              symbol={item.symbol}
              uahPrice={uahPrice}
              rubPrice={rubPrice}
            />
          )) }
        </div>
      </div>
      
    </div>
  );
}

export default App;
