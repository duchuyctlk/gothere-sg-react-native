/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  WebView,
  BackAndroid
} from 'react-native';

export default class GothereSgReactNative extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://gothere.sg/m'}}
        style={styles.webview}
      />
    );
  }
}

const styles = StyleSheet.create({
  webview: {
    marginTop: 20,
  },
});

AppRegistry.registerComponent('GothereSgReactNative', () => GothereSgReactNative);
