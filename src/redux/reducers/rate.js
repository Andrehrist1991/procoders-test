import { SET_RATES_CRYPTO, SET_RATES_CURRENCY, SET_CURRENCY_PRICES, SELECT_CRYPTO } from '../types'

const initialState = {
    cryptoArr: [],
    currencyArr: [],
    selectedCrypto: {},
    baseCrypto: null,
    priceUAH: null,
    priceRUB: null,
};

const requiredCrypto = ['bitcoin', 'ethereum', 'xrp'];

const requiredCurrency = ['USD', 'RUR'];

const geItemPriceBuy = (array, search) => {
    var i = array.length;
    while (i--) {
        if (array[i].ccy === search) {
           return array[i].buy;
        }
    }
}

const geItemPriceSale = (array, search) => {
    var i = array.length;
    while (i--) {
        if (array[i].ccy === search) {
           return array[i].sale;
        }
    }
  }

const rate = (state = initialState, action) => {
    switch (action.type) {
        case SET_RATES_CRYPTO: {
            return {
                ...state,
                cryptoArr: action.payload
            }
        }
        case SET_RATES_CURRENCY: {
            // filtering data by required values
            const result = action.payload.filter(x => requiredCurrency.some(y => x.ccy === y));

            return {
                ...state,
                currencyArr: action.payload
            }
        }
        case SET_CURRENCY_PRICES: {
            const arrOFcurrencies = [
                ...state.currencyArr
            ]

            const usdByu = geItemPriceBuy(arrOFcurrencies, "USD");
            const usdSale = geItemPriceSale(arrOFcurrencies, "USD");

            const usdMiddle = (parseFloat(usdByu) + parseFloat(usdSale)) / 2;

            const rurBuy = geItemPriceBuy(arrOFcurrencies, "RUR");
            const rurSale = geItemPriceSale(arrOFcurrencies, "RUR");

            const rurMiddle = (parseFloat(rurBuy) + parseFloat(rurSale)) / 2;

            return {
                ...state,
                priceUAH: usdMiddle,
                priceRUB: usdMiddle / rurMiddle
            }
        }
        case SELECT_CRYPTO: {
            console.log("lolo")
            return {
                ...state,
                selectedCrypto: action.payload
            }
        }
        default:
            return state;
    }
};

export default rate;