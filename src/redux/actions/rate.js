import axios from 'axios';

export const fetchRates = (dispatch) => {

    const requiredCrypto = ['bitcoin', 'ethereum', 'xrp'];

    const requiredCurrency = ['USD', 'RUR', 'EUR'];

    axios.get('https://api.coincap.io/v2/assets').then(({ data }) => {
    
      // filtering data by required values
      const result = data.data.filter(x => requiredCrypto.some(y => x.id === y));

      dispatch(setRatesCrypto(result));
    });

    axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then(({ data }) => {
        // filtering data by required values
        const result = data.filter(x => requiredCurrency.some(y => x.ccy === y));

        dispatch(setRatesCurrency(result));
    });
};

export const setRatesCrypto = (items) => ({
    type: 'SET_RATES_CRYPTO',
    payload: items
});

export const setRatesCurrency = (items) => ({
    type: 'SET_RATES_CURRENCY',
    payload: items
});