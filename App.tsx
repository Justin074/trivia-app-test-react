import { StyleSheet, View } from 'react-native';
import HomeView from './views/home/home-view';
import * as Font from 'expo-font';
import { useState } from 'react';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default function App(){
  const [fontsLoaded, setFontsLoaded] = useState<Boolean>(false);

  Font.loadAsync({
    RussoOne: require('./assets/fonts/RussoOne-Regular.ttf'),
  }).then(() => {
    setFontsLoaded(true);
  });

  if (!fontsLoaded) return (<View></View>);

  return (<View style={AppStyles.container}><HomeView /></View>);
}