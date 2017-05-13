import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default (venue) => (
  <View>
    <View>
      <View>
        <Image />
      </View>
      <View>
        <Text>{venue.name}</Text>
        <Text>{venue.address}</Text>
      </View>
      <TouchableOpacity>
        <View>
          <Text>Directions</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View>
      <Text>{venue.tagLine}</Text>
    </View>
  </View>
);
