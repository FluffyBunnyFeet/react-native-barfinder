import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ListItem from './ListItem';
import * as colors from '../styles/colors';

class ResultsList extends Component {
  constructor (props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.results)
    };
  }

  // renderRow (rowData) {
  //   const { name, address, trendingNumber, travelTime } = rowData;
  //   return (
  //     <TouchableOpacity onPress={() => this.props.setSelectedVenue(rowData)}>
  //       <View style={styles.listItemContainer}>
  //         <View style={styles.iconImage} />
  //         <View style={styles.mainContent}>
  //           <Text>{name}</Text>
  //           <Text style={styles.address}>{address}</Text>
  //           <Text style={styles.trending}>+{trendingNumber} others trending now</Text>
  //         </View>
  //         <View style={styles.travel}>
  //           <Text style={styles.travelText}>{travelTime}</Text>
  //           <View style={styles.smallIcon} />
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // }

  renderRow (rowData) {
    return (
      <ListItem
        setSelectedVenue={this.props.setSelectedVenue}
        rowData={rowData} />
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

// const styles = StyleSheet.create({
//   listItemContainer: {
//     padding: 25,
//     borderColor: '#777',
//     borderBottomWidth: 0.5,
//     flexDirection: 'row',
//     backgroundColor: '#fff'
//   },
//   iconImage: {
//     height: 55,
//     width: 45,
//     backgroundColor: colors.GREEN,
//     marginRight: 15
//   },
//   address: {
//     fontSize: 12,
//     marginBottom: 5,
//     color: '#777'
//   },
//   trending: {
//     fontSize: 12,
//     color: '#777'
//   },
//   smallIcon: {
//     width: 18,
//     height: 27,
//     backgroundColor: colors.GOLD,
//     marginTop: 3
//   },
//   mainContent: {
//     flex: 1
//   },
//   travel: {
//     alignItems: 'flex-end'
//   },
//   travelText: {
//     color: colors.PRIMARY_PURPLE
//   }
// });

export default ResultsList;
