import React from 'react';
import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import ButtonPrev from './components/ButtonPrev';
import ButtonNext from './components/ButtonNext';

class App extends React.Component {


  state = {
    images: [
      {
        id: 0,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/13.1.jpg',
        title: 'Аксолотль'
      },
      {
        id: 1,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/5.jpg',
        title: 'Носач'
      },
      {
        id: 2,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/6.1.jpg',
        title: 'Белолицый саки'
      },
      {
        id: 3,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/9.1.jpg',
        title: 'Ринопитеки'
      },
      {
        id: 4,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/12.jpg',
        title: 'Венгерская овчарка \n комондор'
      }
    ]
  };


  render() {
    const { images } = this.state;

    const renderItem = ({ item }) => (
      <View>
      <Image
        style={{
          width: 400,
          height: 400
        }}
        source={{
          uri: item.url
        }} />
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
          paddingBottom: 25
        }}
      >
        {item.title}
      </Text>
    </View>
    );

    return (
      <ScrollView
        style={{
          flex: 1
        }}>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    );
  }
}

export default App;
