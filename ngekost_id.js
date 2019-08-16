import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
const NgekostWebView = () => {
  return (
    // <ScrollView>
    <WebView
      source={{
        uri: 'https://ngekost.id/',
      }}
    />
    // </ScrollView>
  );
};
export default NgekostWebView;

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
});
