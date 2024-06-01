import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from 'src/stores';

import RootRouter from './routers/Root';

import './App.less';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default React.memo(App);
