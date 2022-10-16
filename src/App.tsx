import React from 'react';
import Layout from "./layout/Layout";
import { store } from './store';
import { Provider } from 'react-redux'
import { Counter } from './components/Counter';

function App() {
  return (
    <Provider store={store}>
      {/* <Layout/> */}
      <Counter/>
    </Provider>
  );
}

export default App;
