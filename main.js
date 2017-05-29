import Expo from 'expo';
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import ArticlesScreen from './components/Articles'
import MapScreen from './components/Map'

import * as colors from './styles/colors'
import * as fonts from './styles/fonts'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Image source={require('./Images/Beer.png')} style={styles.mainIcon}/>
          <Image source={require('./Images/Wine.png')} style={styles.mainIcon}/>
          <Image source={require('./Images/Martini.png')} style={styles.mainIcon}/>
        </View>

        <Text style={styles.welcome}>Begin Your Adventure</Text>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.searchWrap}>
            <TextInput style={styles.search}
              placeholder="Search for beer, wine, or cocktail"
              placeholderTextColor="#f7f7f7"
              onChange={(text) => this.setState({ searchString: text})}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log(this.state)
              return navigate('Map', { searchString: this.state.searchString })
            }}
            style={{flex: 1, alignItems: 'center', padding: 5}}
          >
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const STANDARD_VERT_SPACING = 25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY_PURPLE,
    padding: 20
  },
  searchWrap: {
    height: 30,
    flex: 5,
    backgroundColor: '#986FBF',
    borderWidth: .5,
    borderColor: colors.WHITE,
    borderRadius: 2,
    marginBottom: STANDARD_VERT_SPACING,
    padding: 5,
    paddingLeft: 10
  },
  search: {
    flex: 1,
    fontSize: 14,
    color: colors.WHITE
  },
  welcome: {
    color: colors.WHITE,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: STANDARD_VERT_SPACING
  },
  instructions: {
    textAlign: 'center',
    color: colors.WHITE,
    marginBottom: 5
  }
})

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Articles: { screen: ArticlesScreen },
  Map: { screen: MapScreen }
}, {
  headerMode: 'none'
});

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

Expo.registerRootComponent(App);
