import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TouchableOpacity } from 'react-native';

class ResultsList extends Component {
  constructor (props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.results)
    };
  }

  renderRow (rowData) {
    const { name, address } = rowData;
    return (
      <TouchableOpacity onPress={this.props.setSelectedVenue()}>
        <View style={styles.listItemContainer}>
          <Image style={styles.iconImage} />
          <View>
            <Text style={styles.barName}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
          </View>
          <View>
            <Text />
            <Image />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData => this.renderRow(rowData)} />
    );
  }
}

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 20,
    borderColor: '#777',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  iconImage: {
    height: 50,
    width: 50
  },
  barName: {
    fontSize: 16,
    lineHeight: 18
  },
  address: {
    fontSize: 14,
    lineHeight: 18,
    color: '#777'
  }
});

export default ResultsList;
