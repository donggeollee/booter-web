import { fork, all, takeLatest, takeEvery, call, put } from "redux-saga/effects";
import {COUNT_PLUS_REQUEST,COUNT_PLUS_SUCCESS,COUNT_PLUS_FAILURE, 
        COUNT_MINUS_REQUEST, COUNT_MINUS_SUCCESS, COUNT_MINUS_FAILURE 
        } from '../reducer/count';
import Axios from "axios";


function countMinusRequestApi(data){
    // 단일값의 경우 하나의 키-값 형태를 맞추기 위해 객체로 만들어,
    // 전송해주어야 서버에서 알맞게 파싱할 수 있다.
    // return Axios.post('/post/upload', { userId : data.userId, content : data.content }); 
    return ""; 
}

function* countMinusRequest(action){
    let  response = null;
    console.log("COUNT_MINUS_REQUEST 실행 - action : ", action);
    console.log("action.data : ", action.data);
    try{
        response = yield call(countMinusRequestApi,action.data);
        console.log(response); 
        yield put({
            type : COUNT_MINUS_SUCCESS,
            data : response
        })
    } catch(e){
        console.error(e);
        yield put({
            type : COUNT_MINUS_FAILURE,
            data : response
        })
    }
}

function* countMinus(){
    yield takeLatest(COUNT_MINUS_REQUEST,countMinusRequest);
}

function countPlusRequestApi(){
    // return Axios.get('/post/all');
    return "";
}

function* countPlusRequest(action){
    let response = null
    console.log("COUNT_PLUS_REQUEST 실행 - action : ", action);
    console.log("action.data : ", action.data);
    try{
        response = yield call(countPlusRequestApi, action.data)
        yield put({
            type : COUNT_PLUS_SUCCESS,
            data : response 
        })
    } catch(e){
        console.error(e);
        yield put({
            type : COUNT_PLUS_FAILURE,
            data : response 
        })
    }
}

function* countPlus(){
    yield takeEvery(COUNT_PLUS_REQUEST, countPlusRequest )
}


export default function* postSaga(){
    yield all([
        fork(countPlus),
        fork(countMinus),
    ])
}
