const initialState = {
    cryptoArr: null,
    currencyArr: null
};

const rate = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RATES_CRYPTO': {
            return {
                ...state,
                cryptoArr: action.payload
            }
        }
        case 'SET_RATES_CURRENCY': {
            return {
                ...state,
                currencyArr: action.payload
            }
        }
        default:
            return state;
    }
};

export default rate;