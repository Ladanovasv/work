import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DeleteProductItemButton from './DeleteProductItemButton';

class ProductItem extends React.Component {
  render() {
    const {item, deleteProduct, selectProduct} = this.props;

    onPress = () => {
      deleteProduct(item);
    };
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 5,
          borderBottomWidth: 1,
          borderColor: 'black',
        }}>
        <CheckBox
          style={{
            flex: 1,
          }}
          value={item.isSelected}
          onValueChange={() => {
            selectProduct(item);
          }}
          tintColors={{true: '#989ca6', false: '#989ca6'}}
          boxType="circle"
        />

        <View
          style={{
            flex: 8,
          }}>
          <Text
            style={{
              fontSize: 20,
            }}>
            {item.name}
          </Text>
        </View>

        <DeleteProductItemButton onPress={onPress} />
      </View>
    );
  }
}

export default ProductItem;
