import * as Font from 'expo-font';
import React from 'react';
import { View } from 'react-native';
import { Router } from './core/router/router';

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.loadFonts();
  }

  state = {
    fontsLoaded: false,
  }

  loadFonts() {
    Font.loadAsync({
      RussoOne: require('./assets/fonts/RussoOne-Regular.ttf'),
    }).then(() => {
      this.setState({
        fontsLoaded: true,
      });
    });
  }

  render() {
    if (!this.state.fontsLoaded) return (<View></View>);
    return (<Router />);
  }
}