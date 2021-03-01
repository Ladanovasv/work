import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class ButtonNext extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPressNext}>
                <Text style={{
                     fontSize: 48,
                     fontWeight: "bold"
                }}>▶</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonNext;
