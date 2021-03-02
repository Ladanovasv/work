import React from 'react';
import { Image, Text, View } from 'react-native';

class ItemImageTitle extends React.Component {
    render() {
        return (
            <View>
                <Image
                    style={{
                        width: 400,
                        height: 400
                    }}
                    source={{
                        uri: this.props.item.url
                    }} />
                <Text
                    style={{
                        fontSize: 40,
                        textAlign: "center",
                        paddingBottom: 25
                    }}
                >
                    {this.props.item.title}
                </Text>
            </View>
        )
    }
}

export default ItemImageTitle;