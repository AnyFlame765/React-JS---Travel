import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { initfirebase } from './src/utils';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
}

