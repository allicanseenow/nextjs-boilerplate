import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

export function configureStore(initialState?: any) {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const middleware: Middleware[] = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line
    const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default;
    middleware.push(reduxImmutableStateInvariant());
  }

  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
}
