import axios from 'axios';
import count from './count';
import {all, fork} from 'redux-saga/effects';

axios.defaults.baseURL = 'http://localhost:8081/react';

export default function* rootSaga(){
    yield all([
        fork(count),
    ])
}