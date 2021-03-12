import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class DeleteProductItemButton extends React.Component {
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity style={{flex: 2}} onPress={onPress}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text> Delete </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default DeleteProductItemButton;
