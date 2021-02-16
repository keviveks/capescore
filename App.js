import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './src/Route';

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer />
  );
}

