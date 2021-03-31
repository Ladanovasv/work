import React from 'react';
import ShoppingListAppForm from './components/ShoppingListAppForm';
import {createProduct} from './utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
class App extends React.Component {
  state = {
    shoppingList: [],
    nameProduct: '',
  };

  componentDidMount() {
    this.init();
  }

  init = async () => {
    try {
      const persistedState = await AsyncStorage.getItem('shoppingList');
      if (!persistedState) return;
      this.setState({
        shoppingList: JSON.parse(persistedState),
      });
    } catch (e) {
      console.error(e);
    }
  };

  persistState = (newState) => {
    this.setState(newState, async () => {
      try {
        await AsyncStorage.setItem(
          'shoppingList',
          JSON.stringify(this.state.shoppingList),
        );
      } catch (e) {
        console.error(e);
      }
    });
  };

  updateNameProduct = (nameProduct) => {
    this.setState({nameProduct});
  };

  addProduct = () => {
    let newShoppingList = [...this.state.shoppingList];
    newShoppingList.push(createProduct(this.state.nameProduct));
    this.persistState({
      shoppingList: newShoppingList,
      nameProduct: '',
    });
  };

  deleteProduct = (product) => {
    const index = this.getProductIndexById(product.id);
    let newShoppingList = [...this.state.shoppingList];
    newShoppingList.splice(index, 1);
    this.persistState({
      shoppingList: newShoppingList,
    });
  };

  deleteAllProducts = () => {
    this.setState({
      shoppingList: [],
    });
  };

  selectProduct = (product) => {
    const {shoppingList} = this.state;
    const selected =
      shoppingList[this.getProductIndexById(product.id)].isSelected;

    shoppingList[this.getProductIndexById(product.id)].isSelected = !selected;

    this.setState({shoppingList});
  };

  getProductIndexById = (id) => {
    return this.state.shoppingList.findIndex((itemProduct) => {
      return itemProduct.id === id;
    });
  };

  render() {
    const {shoppingList, nameProduct} = this.state;

    return (
      <ShoppingListAppForm
        shoppingList={shoppingList}
        addProduct={this.addProduct}
        deleteProduct={this.deleteProduct}
        deleteAllProducts={this.deleteAllProducts}
        updateNameProduct={this.updateNameProduct}
        selectProduct={this.selectProduct}
        productName={nameProduct}
      />
    );
  }
}

export default App;
