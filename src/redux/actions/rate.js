import { 
    SET_RATES_CRYPTO,
    SET_RATES_CURRENCY,
    SET_CURRENCY_PRICES,
    SELECT_CRYPTO,
} from '../types'

import axios from 'axios';

const requiredCryptoApi = "https://api.coincap.io/v2/assets";

const requiredRatesApi = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";

const requiredCrypto = ["bitcoin","ethereum","xrp"];

const requiredRates = ["USD","RUR"];

export const fetchRates = () => {

    return (dispatch) => {
        try {
            axios.get(`${requiredCryptoApi}?ids=${requiredCrypto.join()}`).then(({ data }) => {
                dispatch(setRatesCrypto(data.data));
                dispatch(setNewCryptoCurrency(data.data[0]));
            });
            axios.get(`${requiredRatesApi}`).then(({ data }) => {
                dispatch(setRatesCurrency(data.filter(x => requiredRates.some(y => x.ccy === y))));
                dispatch(setCurrencyPrices());          
            });
        } catch(e) {
            console.log(e.message);
        }
    }
    
};

// export const getNewCryptoCurrency = async (id) => {
//     //const response = await 
//     return (dispatch) => {
//         try {
//             axios.get(`${requiredCryptoApi}/${id}`).then(({ data }) => {
//                 dispatch(setNewCryptoCurrency(data));
//             });
//             //console.log(id)
//         } catch(e) {
//             console.log(e.message);
//         }
//     }
    
// }

export function getNewCryptoCurrency(id) {
    return function(dispatch) {
        try {
            axios.get(`${requiredCryptoApi}/${id}`).then(({ data }) => {
                return dispatch({
                    type: SELECT_CRYPTO,
                    payload: data.data
                })
            });
            

        } catch(e) {
            console.log(e.message);
        }
    }
    
}

export const setNewCryptoCurrency = (data) => ({
    type: SELECT_CRYPTO,
    payload: data
});

export const setRatesCrypto = (items) => ({
    type: SET_RATES_CRYPTO,
    payload: items
});

export const setRatesCurrency = (items) => ({
    type: SET_RATES_CURRENCY,
    payload: items
});

export const setCurrencyPrices = () => ({
    type: SET_CURRENCY_PRICES
});

