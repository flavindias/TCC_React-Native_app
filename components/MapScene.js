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

class MapScene extends Component<{}> {
// variável do react que armazena o estado da aplicação e que toda vez que é alterada chama o método render()
  state = {
      data: [],
      error: null
    };

  

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page } = this.state;
    const url = `http://api.tcc.flavindias.com.br/locals`;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.result.locals : [...this.state.data, ...res.result.locals],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {

      });
  };

  render() {
    return (
      <View style={styles.container}>
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
          {this.state.data.map(item => (
          <MapView.Marker
          coordinate={{
            latitude: parseFloat(item.address.lat),
            longitude: parseFloat(item.address.lng)
          }}
          image={require('../assets/localPin.png')}
    />
  ))}
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