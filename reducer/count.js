export const initialState = {
    point : 50, 
}

export const COUNT_PLUS_REQUEST = 'COUNT_PLUS_REQUEST'; // count 1을 증가시킬 액션 타입이다.
export const COUNT_PLUS_SUCCESS = 'COUNT_PLUS_SUCCESS'; // count 1을 증가시킬 액션 타입이다.
export const COUNT_PLUS_FAILURE = 'COUNT_PLUS_FAILURE'; // count 1을 증가시킬 액션 타입이다.
export const COUNT_MINUS_REQUEST = 'COUNT_MINUS_REQUEST'; // count 1을 증가시킬 액션 타입이다.
export const COUNT_MINUS_SUCCESS = 'COUNT_MINUS_SUCCESS'; // count 1을 증가시킬 액션 타입이다.
export const COUNT_MINUS_FAILURE = 'COUNT_MINUS_FAILURE'; // count 1을 증가시킬 액션 타입이다.


export const countPlusAction = () => ({ // 액션 생성 함수
    type : COUNT_PLUS
});

export const countMinusAction = () => ({
    type : COUNT_MINUS
})

const reducer = (state=initialState, action) => { // 리듀서
    switch (action.type) {  // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1
        case COUNT_PLUS_REQUEST:
            return state + 1;
        case COUNT_PLUS_SUCCESS:
            return state + 1;
        case COUNT_PLUS_FAILURE:
            return state + 1;
        case COUNT_MINUS_REQUEST:
            return state - 1;
        case COUNT_MINUS_SUCCESS:
            return state - 1;   
        case COUNT_MINUS_FAILURE:
            return state - 1;
        default:
            return state;
    }
};

export default reducer;


//store/actions/types.js 액션폴더에 들어가있으면 된다. 액션은 기능별로 만들어주면 된다.
//액션타입 상수다.
// export const REQUEST = 'REQUEST'
// export const SUCCESS = 'SUCCESS'
// export const FAILURE = 'FAILURE'

// ## 모듈화 하기 ## 
//액션 생산자 만들기
// export function createRequestTypes(base) {
//   return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
//     acc[type] = `${base}_${type}`
//     return acc
//   }, {})
// }

// export const GET_QUESTIONLISTS = createRequestTypes('GET_QUESTIONLISTS') //문제 리스트 생성
// export const REMOVE_QUESTIONLIST = createRequestTypes('REMOVE_QUESTIONLIST') //문제 삭제
// export const POST_AUTH = createRequestTypes('POST_AUTH') // 인증 토큰 post해서 확인하기
// export const GET_AUTH = createRequestTypes('GET_AUTH') // 인증토큰 발급받기
// export const GET_QUESTION = createRequestTypes('GET_QUESTION') //특정 문제 가져오기
// export const POST_QUESTION = createRequestTypes('POST_QUESTION') //문제 생성
// export const POST_EDITEDQUESTION = createRequestTypes('POST_EDITEDQUESTION') //수정된 문제 보내기