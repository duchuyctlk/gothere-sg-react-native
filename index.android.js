/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  View
} from 'react-native';
import RNAutoCompleteTextView from 'RNAutoCompleteTextView'

const onSubmitButtonPress = () => {};

export default class GothereSgReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Image 
            style={styles.logo}
            source={require('./sticker_lg.png')} />

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                From:
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                underlineColorAndroid={'transparent'}
                style={styles.input} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>
                To:
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                underlineColorAndroid={'transparent'}
                style={styles.input} />
            </View>

            <View style={styles.submitButtonContainer}>
              <Button 
                style={styles.submit}
                title="Go There"
                onPress={onSubmitButtonPress}
                color="#b8e356" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#9FD045',
    height: 550,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    padding: 15,
  },
  form: {
    alignSelf: 'stretch',
    marginTop: 25,
  },
  logo: {
    height: 70,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
  inputLabel: {
    fontSize: 20,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 35,
    fontSize: 15,
    marginTop: 10,
    height: 40,
    borderRadius: 4,
    borderColor: 'rgb(115, 115, 115)',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  submitButtonContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  submit: {
    flex: 0.3,
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 4,
    borderColor: '#677E40',
    borderWidth: 1,
  },
});

AppRegistry.registerComponent('GothereSgReactNative', () => GothereSgReactNative);
