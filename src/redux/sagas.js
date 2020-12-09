import { takeEvery, put, call } from 'redux-saga/effects';
import { SET_RATES_CRYPTO, SET_RATES_CURRENCY, SET_CURRENCY_PRICES, SELECT_CRYPTO } from './types'
import { fetchRates } from './actions/rate';

export function* sagaWatcher() {
  yield takeEvery(sagaWorker);
}

function* sagaWorker() {
    try {
        const payload = yield call(fetchRates);
        yield put({ type: SET_RATES_CRYPTO, payload});
        yield put({ type: SET_RATES_CURRENCY, payload});
    } catch(e) {
        yield console.log(e.message);
    }
    
}