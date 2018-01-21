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
import MapScene from './components/MapScene';
import ListScene from './components/ListScene';
import AboutScene from './components/AboutScene';

export default class App extends Component<{}> {

  constructor(props) {
    super(props)
    //Be sure to add this line in the constructor, or the "this" in method _onRightButtonPress will reference to the object itself.
    this._onLeftButtonPress = this._onLeftButtonPress.bind(this)
    this._onRightButtonPress = this._onRightButtonPress.bind(this)

  }


  render() {
    return (
      <NavigatorIOS ref="nav"
        style = {styles.container}
        initialRoute= {{
          component: MapScene,
          title: "Mapa turístico",
          leftButtonIcon: require('./assets/about.png'),
          rightButtonIcon: require('./assets/list.png'),
          onLeftButtonPress: this._onLeftButtonPress,
          onRightButtonPress: this._onRightButtonPress
        }}/>
    );
  }
  _onLeftButtonPress() {
    this.refs.nav.push({
      title: "Sobre",
      component: AboutScene
    })
  }
  _onRightButtonPress() {
    this.refs.nav.push({
      title: "Pontos turísticos",
      component: ListScene
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1,
  }
});