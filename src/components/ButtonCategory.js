import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

class ButtonCategory extends React.Component {
  render() {
    const {category, index, updateSelectedCategory} = this.props;
    return (
      <TouchableOpacity
        style={{
          padding: 5,
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 80,
          backgroundColor: '#eaeaea',
          margin: 5,
        }}>
        <Text
          style={{
            fontSize: 15,
          }}>
          {category}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonCategory;
