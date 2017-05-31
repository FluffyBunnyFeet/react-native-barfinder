import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {NavigationActions} from 'react-navigation'
import MapView, { Marker } from 'react-native-maps'
import ResultsList from './ResultsList'
import VenueDetails from './VenueDetails'
import BackBar from './BackBar'

import mockdata from '../mock/mockdata.json'

const backAction = NavigationActions.back();

export default class Map extends Component {
  static navigationOptions = {
    title: 'Results',
  }

  constructor (props) {
    super(props)

    this.goHome = this.goHome.bind(this);

    this.state = {
      selectedVenue: null,
      venues: []
    }

    this.setSelectedVenue = this.setSelectedVenue.bind(this)
    this.closeDetails = this.closeDetails.bind(this)
  }

  // loads mock data
  componentWillMount() {
    this.setState({ venues: mockdata.results })
  }

  // function to select a venue, pass to map markers and ResultsList
  setSelectedVenue(venue) {
    this.setState({
      selectedVenue: venue
    })
  }

  // clear out selected venue, return to results list
  closeDetails() {
    this.setState({
      selectedVenue: null
    })
  }

  goHome() {
    this.closeDetails()
    this.props.navigation.dispatch(backAction)
  }

  render () {
    return (
      <View style={styles.container}>
        <BackBar navigate={ this.goHome } />

        <MapView
          style={styles.container}
          initialRegion={{
            latitude: mockdata.origin.latitude,
            longitude: mockdata.origin.longitude,
            latitudeDelta: mockdata.origin.latitudeDelta,
            longitudeDelta: mockdata.origin.longitudeDelta
          }}
        >

          {this.state.venues.map((venue, i) => {
            // create markers & pass setSelectedVenue function
            return (
              <Marker {...venue} key={i} onPress={() => this.setSelectedVenue(venue)}>
                <View style={styles.marker} />
              </Marker>
            )
          })}

        </MapView>

        { /* check if there's any venues to display, if so generate list of results */}
        { this.state.venues.length > 0 && !this.state.selectedVenue &&
          <View style={styles.container}>
            <ResultsList
              setSelectedVenue={this.setSelectedVenue}
              results={this.state.venues} />
          </View>
        }

        { /* check details for a specific venue if it has been selected */ }
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
});
