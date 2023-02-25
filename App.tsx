/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import TestConnectNative from './src/TestConnectNative';

function App(props: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [messageToNative, setMessageToNative] = useState('');

  const rootTag = 1;

  useEffect(() => {
    console.log("Props", props);
    setMessageToNative(props.message_from_native ?? "");
  }, [])

  const onExitPress = () => {
    TestConnectNative.exitRN(rootTag);
  };

  const sendMessageToNative = () => {
    TestConnectNative.sendMessage(messageToNative);
  };

  const sendCallbackToNative = () => {
    TestConnectNative.sendCallback((nativeMessage: any) => {
      console.log(
        `This log is from js code callback with native message: "${nativeMessage}"`,
      );
    });
  };

  const goToSecondNativeScr = () => {
    TestConnectNative.goToNative(rootTag);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            padding: 10,
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.input}
            value={messageToNative}
            placeholder={'Typing some message to native'}
            maxLength={50}
            onChangeText={text => setMessageToNative(text)} />

          <Text style={styles.message}>Check log to see the result</Text>

          <TouchableOpacity
            onPress={() => { sendMessageToNative(); }}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Send message to native</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { sendCallbackToNative(); }}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Send callback to native</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderRadius: 5,
    fontSize: 20,
    height: 50,
    padding: 5,
  },
  message: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonTitle: {
    color: '#fff',
  }
});

export default App;
