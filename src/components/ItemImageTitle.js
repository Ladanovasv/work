import React from 'react';
import {Image, Text, View} from 'react-native';

class ItemImageTitle extends React.Component {
  render() {
    const {width, height, item} = this.props;
    console.log(item);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: width * 0.95,
          height: height * 0.3,
          margin: width * 0.025,
        }}>
        <Image
          style={{
            borderRadius: 20,
            width: '100%',
            height: '100%',
          }}
          source={{
            uri: item.url,
          }}
        />

        <View
          style={{
            position: 'absolute',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'rgba(220, 220, 220, 0.9)',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              padding: 8,
            }}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  }
}

export default ItemImageTitle;
