import {CLICKED} from './constants';

export const makeRequest = () => (dispatch) => {
    dispatch({type: PENDING});
    fetch()
}