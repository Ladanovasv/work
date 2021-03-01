import React from 'react';
import {Text, View, Image} from 'react-native';
import ButtonPrev from './components/ButtonPrev';
import ButtonNext from './components/ButtonNext';

class App extends React.Component {
  container = [
      {
        id: 0,
        image:'http://silver.ru/LoadedFiles/zzzz/78/13.1.jpg',
        title:'Аксолотль'
      },
      {
        id: 1,
        image:'http://silver.ru/LoadedFiles/zzzz/78/5.jpg',
        title:'Носач'
      },
      {
        id: 2,
        image:'http://silver.ru/LoadedFiles/zzzz/78/6.1.jpg',
        title:'Белолицый саки'
      },
      {
        id: 3,
        image:'http://silver.ru/LoadedFiles/zzzz/78/9.1.jpg',
        title:'Ринопитеки'
      },
      {
        id: 4,
        image:'http://silver.ru/LoadedFiles/zzzz/78/12.jpg',
        title:'Венгерская овчарка \n комондор'
      }
    ];

  state = {
    id: 0 
  };


  onPressPrev = (id) => {
    this.setState({id: this.state.id - 1});
  };

  onPressNext = (id) => {
    this.setState({id: this.state.id + 1});
  };

  render() {
    let {id} = this.state;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        
        <Image
          style={{
            width: 300,
            height: 300,
          }}
          source={{uri: this.container[id].image}}
        />
        <Text
          style={{ 
            fontSize: 30,
            fontWeight: "bold"
          }}
        >{this.container[id].title}</Text>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          {this.state.id > 0 && <ButtonPrev onPressPrev={this.onPressPrev} />}
          {this.state.id < 4 && <ButtonNext onPressNext={this.onPressNext} />}           
        </View>
 
      </View>
    );
  }
}

export default App;
