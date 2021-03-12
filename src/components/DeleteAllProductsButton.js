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
          position: 'absolute',
          width: '40%',
        }}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            padding: 8,
          }}>
          ZZZZZZZZ
        </Text>
      </TouchableOpacity>
    );
  }
}

export default DeleteAllProductsButton;
