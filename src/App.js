import React, {useState} from "react"
import { Text, View, TextInput } from "react-native";
import Button from "./components/Button";
import Counter from "./components/Counter";

class App extends React.Component {
  state = {
    count: 0,
    userName:"",
    userAge:0
  }

  increase = () => {
    this.setState({ count: this.state.count + 1})
  }


  updateUserName = (inputText) => {  
    this.setState({ userName: inputText })  
  }  
  
  updateUserAge = (inputText) => {  
    this.setState({ userAge: inputText })  
  } 

  render() {
    console.log(this.state.count)

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      {this.state.count == 0 && 
      (<TextInput
        onChangeText={this.updateUserName}
        placeholder={'UserName'}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />)}
      {this.state.count == 0 && 
      (<TextInput
        onChangeText={this.updateUserAge}
        placeholder={'UserAge'}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />)}
      
      {this.state.count > 0 &&
      (<Text style={{color: 'blue'}}>{this.state.userName}</Text>)}
      {this.state.count > 0 &&
      (<Text style={{color: 'blue'}}>{this.state.userAge}</Text>)}

        {/* {this.state.count <= 7 && (<Counter count={this.state.count}/>)} */}
      <Button increase={this.increase}/>
      </View>
    )
  }
}

export default App;
