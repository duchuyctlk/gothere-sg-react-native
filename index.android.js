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

var WEBVIEW_REF = 'webview';

export default class GothereSgReactNative extends Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
  }

  render() {
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{uri: 'https://gothere.sg/m'}}
        style={styles.webview}
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }

  onNavigationStateChange = (navState) => {
    this.setState({
      canGoBack: navState.canGoBack
    });
  };

  goBack = () => {
    this.refs[WEBVIEW_REF].goBack();
  };

  handleBack = (() => {
    if (this.state && this.state.canGoBack) {
      this.goBack();
      return true; //avoid closing the app
    }
  
    return false; //close the app
  });
}

const styles = StyleSheet.create({
  webview: {
    marginTop: 20,
  },
});

AppRegistry.registerComponent('GothereSgReactNative', () => GothereSgReactNative);
