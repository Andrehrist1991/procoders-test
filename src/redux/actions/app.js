import { SHOW_LOADER, HIDE_LOADER } from '../types'

export const hideLoader = () => ({
    type: HIDE_LOADER,
    payload: true
});

export const showLoader = () => ({
    type: SHOW_LOADER,
    payload: false
});