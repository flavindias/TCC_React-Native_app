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
  NavigatorIOS,
  Image
} from 'react-native';

class AboutScene extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.ufrpe} 
        source={require('../assets/ufrpe.png')} />
        <Text style={styles.titleText}>
          Análise comparativa no desenvolvimento de aplicações móveis utilizando Swift e React Native
        </Text>
        <Text numberOfLines={5}>
          Orientador: Gilberto Cysneiros
        </Text>
        <Text>
          Autor: Flaviano Dias Fontes
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ufrpe: {
    height: 120,
    width: 60,
    top: 0,
    resizeMode: 'cover', 
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

module.exports = AboutScene