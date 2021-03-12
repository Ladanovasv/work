import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';

class AddProductForm extends React.Component {
  render() {
    const {addProduct, updateNameProduct} = this.props;

    onPress = () => {
      addProduct();
    };
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput
          style={{flex: 10}}
          onChangeText={updateNameProduct}
          placeholder={'Input name product'}
        />
        <TouchableOpacity style={{flex: 2}} onPress={onPress}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddProductForm;
