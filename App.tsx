import React from 'react';
import Routes from './src/navigation/Routes';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
