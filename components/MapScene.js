/**
 * Turismo
 * https://github.com/facebook/react-native
 * Flaviano Dias - @flavindias
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import MapView from 'react-native-maps';

export default class MapScene extends Component<{}> {

  // variável do react que armazena o estado da aplicação e que toda vez que é alterada chama o método render()
  state = {
    locals: [

    ],

  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: -8.0536907,
          longitude: -34.9030814,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          <MapView.Marker
          coordinate={{
            latitude: -8.0536907,
            longitude: -34.9030814,
          }}
          image={require('../assets/userPin.png')}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map:{
    top: 64,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = MapScene