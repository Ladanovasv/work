/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, View, Dimensions} from 'react-native';
class InputProduct extends React.Component {
  render() {
    const {updateProductName, productName} = this.props;
    const {height} = Dimensions.get('window');

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: height * 0.09,
          backgroundColor: '#fafafa',
          padding: 5,
          elevation: 18,
          zIndex: 1,
          borderRadius: 10,
        }}>
        <TextInput
          style={{
            flex: 1,
            borderRadius: 25,
            paddingLeft: 25,
            paddingRight: 25,
            marginHorizontal: 10,
            fontSize: 20,
            backgroundColor: '#ffffff',
            borderColor: '#ececec',
            borderWidth: 1,
          }}
          onChangeText={updateProductName}
          value={productName}
          autoFocus={true}
        />
      </View>
    );
  }
}

export default InputProduct;
