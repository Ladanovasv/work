import React from 'react';
import {Text, TouchableOpacity, Alert} from 'react-native';

class DeleteAllProductsButton extends React.Component {
  render() {
    const {deleteAllProducts} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Thank you!');
          deleteAllProducts();
        }}
        style={{
          height: 50,
          width: 50,
          borderRadius: 25,
          backgroundColor: '#f75d5d',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            padding: 3,
            color: 'white',
          }}>
          ✓
        </Text>
      </TouchableOpacity>
    );
  }
}

export default DeleteAllProductsButton;
