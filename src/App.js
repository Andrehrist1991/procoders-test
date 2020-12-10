import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import bitcoinImg from './assets/img/bitcoin.png';
import ethereumImg from './assets/img/ethereum.png';
import xrpImg from './assets/img/xrp.png';

import { fetchRates, getNewCryptoCurrency } from './redux/actions/rate';

import { CryptoItem, CryptoCalculator, Loader } from './components'

const App = () => {
  const dispatch = useDispatch();

  const { cryptoItems, uahPrice, loaded, rubPrice, changeRates, selectedCrypto } = useSelector(({ rate }) => {
    return {
      cryptoItems: rate.cryptoArr,
      changeRates: rate.changeRates,
      uahPrice: rate.changeRates.uah,
      rubPrice: rate.changeRates.rub,
      selectedCrypto: rate.selectedCrypto,
      loaded: rate.isLoaded
    }
  });



  React.useEffect(() => {
    dispatch(fetchRates());
  }, [dispatch]);

  const onSetCryptoCurrency = (val) => {
    dispatch(getNewCryptoCurrency(val));
  }

  const arrImages = [bitcoinImg, ethereumImg, xrpImg];

  return (
    <div className="App">
      {loaded ? (
        <div className="container">
          <div className="row">
            {cryptoItems && cryptoItems.map((item, idx) => (
              <CryptoItem
                key={item.id}
                setCrypto={onSetCryptoCurrency}
                priceUsd={item.priceUsd}
                image={arrImages[idx]}
                symbol={item.symbol}
                uahPrice={uahPrice}
                rubPrice={rubPrice}
                {...item}
              />
            )) }
          </div>
          <p className="text-center crypto-item__current">Selected coin: {selectedCrypto.symbol}</p>
          {cryptoItems.length !== 0 && (<CryptoCalculator changeRates={changeRates} uahPrice={uahPrice} rubPrice={rubPrice} selectedCrypto={selectedCrypto} />)}
        </div> 
      ) : <Loader />}
    </div>
  );
}

export default App;
