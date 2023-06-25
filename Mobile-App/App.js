import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Navigation } from './src/navigation';
import store from './src/redux/store';
import 'react-native-gesture-handler';
import { LoaderProvider } from './src/hooks/loaderProvider';
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);
LogBox.ignoreAllLogs();
const persistor = persistStore(store);
export const App = () => {

  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <LoaderProvider>
          <Navigation />
        </LoaderProvider>
      </PersistGate>
    </Provider>
  );
};
