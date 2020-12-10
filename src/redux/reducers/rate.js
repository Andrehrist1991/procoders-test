import { SET_RATES_CRYPTO, SET_RATES_CURRENCY, SET_CURRENCY_PRICES, SELECT_CRYPTO } from '../types'

const initialState = {
    cryptoArr: [],
    currencyArr: [],
    selectedCrypto: {},
    changeRates: {
        "usd": 1,
        "uah": null,
        "rub": null,
    },
    isLoaded: false
};

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

            const filtered = action.payload.filter((price) => {
                return price.priceUsd = parseFloat(price.priceUsd);
            });

            return {
                ...state,
                cryptoArr: filtered,
                isLoaded: true
            }
        }
        case SET_RATES_CURRENCY: {

            const filtered = action.payload.filter((price) => {
                return price.buy = parseFloat(price.buy), 
                price.sale = parseFloat(price.sale);
            });

            return {
                ...state,
                currencyArr: filtered
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
                changeRates: {
                    "usd": 1,
                    "uah": usdMiddle,
                    "rub": usdMiddle / rurMiddle
                }
            }
        }
        case SELECT_CRYPTO: {
            const oldItems = [
                ...state.cryptoArr,
            ];

            //Change object in array
            const newList = oldItems.map(o => {
                if (o.id === action.payload.id) {
                return action.payload;
                }
                return o;
            });

            return {
                ...state,
                cryptoArr: newList,
                selectedCrypto: action.payload
            }
        }
        default:
            return state;
    }
};

export default rate;