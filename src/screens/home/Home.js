import React from 'react';
import {withState} from '../../hoc/withState';
import {View, Alert, StyleSheet, Text, FlatList} from 'react-native';
import ActionButton from 'react-native-action-button';

class Home extends React.Component {
  // componentDidMount() {
  //   this.init();
  // }

  navigateCreateProduct = () => {
    const {navigation} = this.props;
    navigation.navigate('create-product');
  };

  render() {
    const {shoppingList, deleteAllProducts, renderItem} = this.props;
    const countSelectedProducts = shoppingList.reduce((prev, product) => {
      if (product.isSelected) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);
    const allSelected =
      countSelectedProducts === shoppingList.length && shoppingList.length > 0;

    return (
      <View style={styles.main}>
        <FlatList
          data={shoppingList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Добавить продукт"
            onPress={this.navigateCreateProduct}>
            <Text>A</Text>
          </ActionButton.Item>
          {!!allSelected && (
            <ActionButton.Item
              buttonColor="#1abc9c"
              title="Очистить список"
              onPress={() => {
                Alert.alert('Спасибо за покупку :)');
                deleteAllProducts();
              }}>
              <Text>B</Text>
            </ActionButton.Item>
          )}
        </ActionButton>
      </View>
    );
  }
}

export default withState(Home);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
  },
});
