import { initStore } from 'react-waterfall';
import devtools from 'react-waterfall-redux-devtools-middleware';
import storeActions from './store-actions';

const isProd = process.env.NODE_ENV === 'production';

const store = {
  initialState: {
    count: 0
  },
  actions: {
    ...storeActions
  }
};

const { Provider, Consumer, actions, getState, connect, subscribe } = initStore(
  store,
  !isProd && devtools()
);

export { Provider, Consumer, getState, connect, subscribe };
