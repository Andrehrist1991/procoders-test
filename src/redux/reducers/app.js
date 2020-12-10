import { SHOW_LOADER, HIDE_LOADER } from '../types';

const initialState = {
    showLoader: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER: {
            return {
                ...state,
                showLoader: true
            }
        }
        case HIDE_LOADER: {
            return {
                ...state,
                showLoader: false
            }
        }
        default:
            return state;
    }


}

export default appReducer;