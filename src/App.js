import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRates } from './redux/actions/rate';

import { CryptoItem } from './components'

const App = () => {
  const dispatch = useDispatch();

  const { cryptoItems, currencies } = useSelector(({ rate }) => {
    return {
      cryptoItems: rate.cryptoArr,
      currencies: rate.currencyArr
    }
  })

  React.useEffect(() => {
    fetchRates(dispatch);
    console.log(cryptoItems);
    console.log(currencies);
  }, []);

  const valToNumber = (value) => {
    const parseFloatVal = parseFloat(value);
    return parseFloatVal.toFixed(1);
  }



  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {cryptoItems && cryptoItems.map(item => (
            <CryptoItem
              key={item.id}
              priceUsd={valToNumber(item.priceUsd)} 
              symbol={item.symbol}
            />
          )) }
        </div>
      </div>
      
    </div>
  );
}

export default App;
