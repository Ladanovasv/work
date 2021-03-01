import React from 'react';
import {Text, View, TextInput} from 'react-native';
import Button from './components/Button';
import Counter from './components/Counter';

class App extends React.Component {
  state = {
    userName: '',
    userAge: '',
    user: '',
  };

  submit = () => {
    this.setState({user: `${this.state.userName}, ${this.state.userAge}`});
  };

  updateUserName = (userName) => {
    this.setState({userName});
  };

  updateUserAge = (userAge) => {
    this.setState({userAge});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {!this.state.user && (
          <>
            <Text>Name</Text>
            <TextInput
              onChangeText={this.updateUserName}
              placeholder={'UserName'}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            />

            <Text>Age</Text>
            <TextInput
              onChangeText={this.updateUserAge}
              placeholder={'UserAge'}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            />

            <Button increase={this.submit} />
          </>
        )}

        {!!this.state.user && <Text>{this.state.user}</Text>}
      </View>
    );
  }
}

export default App;
