import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// root-reducer
import { rootReducer } from './root-reducer';

// createStre params
/*
This store is just in order to faciliate the movement and passing of actions through these reducers
    rootReducer - root reducer= all of a store really needs is just the root reducer in order to be created
    logger - something that allows us to see what the state looks like before an action is dispatched, what the action is, and then how the state in turn, looks after the action.
*/

const middleWares = [logger]
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers)
