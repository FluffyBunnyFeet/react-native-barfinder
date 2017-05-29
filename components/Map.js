import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import ResultsList from './ResultsList'
import VenueDetails from './VenueDetails'

import mockdata from '../mock/mockdata.json'

export default class Map extends Component {
  static navigationOptions = {
    title: 'Results',
  }

  constructor (props) {
    super(props)
    this.state = {
      selectedVenue: null
    }

    this.setSelectedVenue = this.setSelectedVenue.bind(this)
    this.closeDetails = this.closeDetails.bind(this)
  }

  componentWillMount() {
    this.setState({ venues: mockdata.results })
  }

  setSelectedVenue(venue) {
    this.setState({
      selectedVenue: venue
    })
  }

  closeDetails() {
    this.setState({
      selectedVenue: null
    })
  }

  render () {
    return (
      <View style={styles.container}>
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
          {this.state && this.state.venues.length > 0 ? this.state.venues.map((venue, i) => {
            return (
              <Marker {...venue} key={i} onPress={() => this.setSelectedVenue(venue)}>
                <View style={styles.marker} />
              </Marker>
            )
          }) : null }
        </MapView>
        { this.state.venues.length > 0 && !this.state.selectedVenue &&
          <View style={styles.container}>
            <ResultsList
              setSelectedVenue={this.setSelectedVenue}
              results={this.state.venues} />
          </View>
        }
        { this.state.selectedVenue &&
          <View style={styles.container}>
            <VenueDetails
              venue={this.state.selectedVenue}
              closeDetails={this.closeDetails} />
          </View>
        }
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
    padding: 7,
    borderRadius: 7
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  searchContainer: {
    height: 40,
    backgroundColor: '#fff'
  }
})
