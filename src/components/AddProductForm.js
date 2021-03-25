import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

class AddProductForm extends React.Component {
  render() {
    const {addProduct, updateNameProduct} = this.props;
    const {height} = Dimensions.get('window');

    onPress = () => {
      addProduct();
    };
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
            flex: 6,
            borderRadius: 25,
            paddingLeft: 25,
            paddingRight: 25,
            marginHorizontal: 10,
            fontSize: 20,
            backgroundColor: '#ffffff',
            borderColor: '#ececec',
            borderWidth: 1,
          }}
          onChangeText={updateNameProduct}
        />

        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: '#f75d5d',
          }}
          onPress={onPress}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              color: 'white',
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddProductForm;
