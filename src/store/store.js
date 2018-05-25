import { initStore } from 'react-waterfall';
import devtools from 'react-waterfall-redux-devtools-middleware';

const isProd = process.env.NODE_ENV === 'production';

const store = {
  initialState: {
    count: 0
  },
  actions: {
    add: ({ count }, { n }) => ({
      count: count + n
    })
  }
};

const { Provider, Consumer, actions, getState, connect, subscribe } = initStore(
  store,
  !isProd && devtools()
);

export { Provider, Consumer, getState, connect, subscribe };
