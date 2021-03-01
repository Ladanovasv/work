import React from 'react';
import { TextInput } from 'react-native';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
 

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(this.props.name)}
      value={value}
    />
  );


}

export default UselessTextInput;