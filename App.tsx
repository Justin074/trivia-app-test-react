import * as Font from 'expo-font';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Router } from './core/core-module';

export default function App({}){
  const [fontsLoaded, setFontsLoaded] = useState<Boolean>(false);

  Font.loadAsync({
    RussoOne: require('./assets/fonts/RussoOne-Regular.ttf'),
  }).then(() => {
    setFontsLoaded(true);
  });

  if (!fontsLoaded) return (<View></View>);

  return (<Router />);
}