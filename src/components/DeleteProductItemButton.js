import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class DeleteProductItemButton extends React.Component {
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity
        style={{
          height: 25,
          width: 25,
          backgroundColor: '#989ca6',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 3,
        }}
        onPress={onPress}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'white',
          }}>
          ✖
        </Text>
      </TouchableOpacity>
    );
  }
}
export default DeleteProductItemButton;
