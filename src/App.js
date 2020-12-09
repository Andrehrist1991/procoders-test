import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux';

import { fetchRates, getNewCryptoCurrency } from './redux/actions/rate';

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

  const [currentCrypto, setCurrentCrypto] = useState(0);

  React.useEffect(() => {
    dispatch(fetchRates());
  }, []);

  const onSetCryptoCurrency = (val) => {
    dispatch(getNewCryptoCurrency(val));
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {cryptoItems && cryptoItems.map(item => (
            <CryptoItem
              key={item.id}
              setCrypto={onSetCryptoCurrency}
              priceUsd={item.priceUsd} 
              symbol={item.symbol}
              uahPrice={uahPrice}
              rubPrice={rubPrice}
              {...item}
            />
          )) }
        </div>
      </div>
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  selected: state.currentCrypto,
});

export default App;
