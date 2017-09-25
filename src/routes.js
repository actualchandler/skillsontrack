import React from 'react';
import ReduxPromise from 'redux-promise';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
import history from './history'

// COMPONENTS
import Main from './components/Main/Main'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export const makeMainRoutes = () => {
   return (
      <Provider store={ createStoreWithMiddleware(reducers) }>
         <Router history={ history }>
            <div>
               <Main />
            </div>
         </Router>
      </Provider>
   )
}