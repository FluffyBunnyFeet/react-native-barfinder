import Expo from 'expo';
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import ArticlesScreen from './components/Articles'
import MapScreen from './components/Map'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Welcome Home!</Text>
        <Button
          onPress={() => navigate('Articles', { articles: [1, 2, 3] })}
          title="Articles"
        />
        <Button
          onPress={() => navigate('Map')}
          title="Map"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Articles: { screen: ArticlesScreen },
  Map: { screen: MapScreen }
});

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

Expo.registerRootComponent(App);
