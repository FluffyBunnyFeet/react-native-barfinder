import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import * as colors from '../styles/colors';

export default ({ rowData, setSelectedVenue }) => {
  const { name, address, trendingNumber, travelTime } = rowData;
  console.log(setSelectedVenue);
  return (
    <TouchableOpacity onPress={() => setSelectedVenue(rowData)}>
      <View style={styles.listItemContainer}>
        <View style={styles.iconImage} />
        <View style={styles.mainContent}>
          <Text>{name}</Text>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.trending}>+{trendingNumber} others trending now</Text>
        </View>
        <View style={styles.travel}>
          <Text style={styles.travelText}>{travelTime}</Text>
          <View style={styles.smallIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 25,
    borderColor: '#777',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    backgroundColor: colors.WHITE
  },
  iconImage: {
    height: 55,
    width: 45,
    backgroundColor: colors.GREEN,
    marginRight: 15
  },
  address: {
    fontSize: 12,
    marginBottom: 5,
    color: '#777'
  },
  trending: {
    fontSize: 12,
    color: '#777'
  },
  smallIcon: {
    width: 18,
    height: 27,
    backgroundColor: colors.GOLD,
    marginTop: 3
  },
  mainContent: {
    flex: 1
  },
  travel: {
    alignItems: 'flex-end'
  },
  travelText: {
    color: colors.PRIMARY_PURPLE
  }
});
