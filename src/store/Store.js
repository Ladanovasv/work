import React from 'react';
import {createProduct} from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppState from './Index';
import ProductItem from '../components/ProductItem';

class Store extends React.Component {
  state = {
    shoppingList: [],
  };

  renderItem = ({item}) => (
    <ProductItem
      item={item}
      deleteProduct={this.deleteProduct}
      selectProduct={this.selectProduct}
    />
  );

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

  addProduct = (productName) => {
    let newShoppingList = [...this.state.shoppingList];
    newShoppingList.push(createProduct(productName));
    this.persistState({
      shoppingList: newShoppingList,
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
    this.persistState({
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
    const {shoppingList} = this.state;

    return (
      <AppState.Provider
        value={{
          shoppingList: shoppingList,
          addProduct: this.addProduct,
          deleteProduct: this.deleteProduct,
          deleteAllProducts: this.deleteAllProducts,
          selectProduct: this.selectProduct,
          renderItem: this.renderItem,
        }}>
        {this.props.children}
      </AppState.Provider>
    );
  }
}

export default Store;
