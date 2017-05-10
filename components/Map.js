import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      markers: []
    }

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress (e) {
    console.log(e.nativeEvent)
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
  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: 45.5209087,
            longitude: -122.6705107,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
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
  }
})
