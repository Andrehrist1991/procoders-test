import axios from 'axios';

export const fetchRates = async (dispatch) => {

    try {
        await axios.get('https://api.coincap.io/v2/assets').then(({ data }) => {
        dispatch(setRatesCrypto(data));
        });

        await axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then(({ data }) => {
            dispatch(setRatesCurrency(data));
            dispatch(setCurrencyPrices());
        });
    } catch(e) {
        console.log(e.message);
    }

    
};

export const setRatesCrypto = (items) => ({
    type: 'SET_RATES_CRYPTO',
    payload: items
});

export const setRatesCurrency = (items) => ({
    type: 'SET_RATES_CURRENCY',
    payload: items
});

export const setCurrencyPrices = () => ({
    type: 'SET_CURRENCY_PRICES'
});