import React from "react"
import { Text, View } from "react-native";
import Button from "./components/Button";
import Counter from "./components/Counter";

class App extends React.Component {
  state = {
    count: 0
  }

  increase = () => {
    this.setState({ count: this.state.count + 1})
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* <Text>{this.state.count}</Text> */}
        <Counter count={this.state.count}/>
        <Button increase={this.increase}/>
      </View>
    )
  }
}

export default App;
