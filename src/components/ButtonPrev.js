import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class ButtonPrev extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPressPrev}>
                <Text style={{
                     fontSize: 48,
                     fontWeight: "bold"
                }}>◀</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonPrev;