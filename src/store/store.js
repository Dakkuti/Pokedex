import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer'
import { cardsReducers } from '../reducers/cardsReducers';
import { uiReducer } from '../reducers/uiReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    auth: authReducer,
    card: cardsReducers,
    ui: uiReducer
})


export const store = createStore(
    reducer, composeEnhancers(applyMiddleware(thunk))
);