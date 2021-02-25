import  React from "react"
import {View, Text} from "react-native";

class App extends React.Component{
  render(){
    return(
      <View
        style = {{
          flex:1,
          justifyContent:"center",
          alignItems:"center"
        }}
        > 
        <Text> Hello world! </Text>
        <Text> Hello world! </Text>
        <Text> Hello world! </Text>
      </View>
    )
  }
}

export default App;