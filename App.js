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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<{}> {

  // variável do react que armazena o estado da aplicação e que toda vez que é alterada chama o método render()
  state = {
    locals: [

    ],

  };
  constructor(props) {
    super(props)
    //Be sure to add this line in the constructor, or the "this" in method _onRightButtonPress will reference to the object itself.
    this._onLeftButtonPress = this._onLeftButtonPress.bind(this)
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
          onRightButtonPress: this._onLeftButtonPress
        }}/>
    );
  }
  _onLeftButtonPress() {
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