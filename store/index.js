import { createWrapper } from 'next-redux-wrapper';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import rootSaga from '../saga';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = (context) => {
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
return store;
}

const wrapper = createWrapper(store, { debug: process.env.NODE_ENV === 'development,'});

export default wrapper;