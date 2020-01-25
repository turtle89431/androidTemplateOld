import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import base from './base'
import Pages from './pages'
let Web = (html, cb) => <View style={{ flex: 1, }}>
  <WebView source={{ html }}
    originWhitelist={['*']}
    onMessage={cb}></WebView>
</View>
export default function App() {

  let my_state = {
    pgData: 0,
    title: "home",
    html: "home"
  }
  const [data, setData] = useState(my_state)
  const test = (k, v) => {
    my_state[k] = v
    setData(my_state)
  }
  const updateState = ns => {
    my_state = ns;
    setData(my_state)
  }
  const btnPress = () => {
    test("title", "shit")
  }
  let page = data.html
  return <View style={styles.container}>
    <View style={styles.header}>
      <Text>{data.title}</Text>
    </View>
    <View style={styles.body}>
      {Web(base(Pages(data)[page]), (event) => {
        let ns = JSON.parse(event.nativeEvent.data)
        updateState(ns)
        console.log(ns)
      })}
    </View>
    <View style={styles.nav}>
      <Button title="Test" onPress={btnPress} />
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: "bold"
  },
  body: {
    flex: 6,
  },
  footer: {
    height: 40,
    width: "100%",
    alignContent: "center",
    alignItems: "center"

  },
  nav: {
    flex: 1,
    flexDirection: "row",
    alignContent: "stretch",
    alignItems: "stretch",
    height: "40%"
  }

});
