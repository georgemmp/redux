import { all, takeLatest } from 'redux-saga/effects';

import { addFavorite } from './favorites';

import { Types } from '../ducks/favorites';

export default function* rootSaga() {
    yield all([
        takeLatest(Types.ADD_REQUEST, addFavorite)
    ]);
}