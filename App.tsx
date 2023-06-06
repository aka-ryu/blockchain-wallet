import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStackNavigator from './src/navigation';
import { StyleSheet } from 'react-native';

function App(): JSX.Element {
  
  return (
    <SafeAreaProvider>
      <RootStackNavigator/>
    </SafeAreaProvider>
  );
}



export default App;
