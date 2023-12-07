// App.tsx
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './lib/redux/store';
import AppNavigator from './AppNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
