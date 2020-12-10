import { takeEvery, put, call } from 'redux-saga/effects';
import { SET_RATES_CRYPTO, SET_RATES_CURRENCY, SET_CURRENCY_PRICES, SELECT_CRYPTO } from './types'
import { fetchRates } from './actions/rate';
import { hideLoader, showLoader } from './actions/app';

export function* sagaWatcher() {
  //yield takeEvery(SET_RATES_CRYPTO, sagaWorker);
  yield takeEvery(sagaWorker);
}

function* sagaWorker() {
    try {
        const payload = yield call(fetchRates);
        yield put(showLoader());
        yield put({ type: SET_RATES_CRYPTO, payload});
        yield put({ type: SET_RATES_CURRENCY, payload});
        yield put(hideLoader());
    } catch(e) {
        yield console.log(e.message);
    }
    
}