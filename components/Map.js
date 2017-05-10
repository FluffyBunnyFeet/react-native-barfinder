import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import SearchInput from './SearchInput'
import mockdata from '../mock/mockdata.json'


export default class Map extends Component {
  static navigationOptions = {
    title: 'Results',
  }

  constructor (props) {
    super(props)
    this.state = {
      markers: []
    }

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress (e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          label: 'beer'
        }
      ]
    })
  }

  submitSearch () {
    console.log('pressed')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            underlineColorAndroid='transparent'
            autoCorrect={false} />
          <Button
            title='Search'
            onPress={() => this.submitSearch()} />
        </View>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: mockdata.origin.latitude,
            longitude: mockdata.origin.longitude,
            latitudeDelta: mockdata.origin.latitudeDelta,
            longitudeDelta: mockdata.origin.longitudeDelta
          }}
          onPress={this.handlePress}
        >
          {this.state && this.state.markers.length > 0 ? this.state.markers.map((marker, i) => {
            return (
              <Marker {...marker} key={i}>
                <View style={styles.marker}>
                  <Text style={styles.text}>{marker.label}</Text>
                </View>
              </Marker>
            )
          }) : null }
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  marker: {
    backgroundColor: '#550bbc',
    padding: 5,
    borderRadius: 5
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  searchContainer: {
    height: 80,
    backgroundColor: '#fff'
  },
  searchInput: {
    color: '#000',
    height: 40,
    paddingHorizontal: 10
  }
})
