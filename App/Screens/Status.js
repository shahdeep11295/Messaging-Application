import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import ActionButton from 'react-native-action-button';
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-elements';

export default class Status extends Component {
  static navigationOptions = {
    tabBarLabel: 'STATUS'
  }

  render() {
    return (
      <ImageBackground
        style={[styles.container, styles.backgroundImage]}
        source={require('../images/white.jpg')}>


        <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>




        </View>


      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    // marginRight: 10,
    // marginLeft: 10,
    backgroundColor: 'transparent'
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'green',
  },

})

