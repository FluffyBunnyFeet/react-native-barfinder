import React from 'react'
import { View, TextInput } from 'react-native'

const SearchInput = () => (
  <View style={styles.containerStyle}>
    <TextInput
      style={styles.inputStyle}
      underlineColorAndroid='transparent'
      autoCorrect={false} />
  </View>
)

const styles = {
  containerStyle: {
    height: 40,
    backgroundColor: '#fff'
  },
  inputStyle: {
    color: '#000',
    flex: 1,
    paddingHorizontal: 10
  }
}

export default SearchInput
