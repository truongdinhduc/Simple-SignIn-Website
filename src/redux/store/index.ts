import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers'
import rootSaga from '../sagas'

const rootReducers = combineReducers(reducers)

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  let store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware]
  })

  sagaMiddleware.run(rootSaga);

  return store
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducers>
