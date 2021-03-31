import React from 'react';
import {View, Dimensions} from 'react-native';
import ProductsList from './ProductsList';
import AddProductForm from './AddProductForm';
import DeleteAllProductsButton from './DeleteAllProductsButton';

class ShoppingListAppForm extends React.Component {
  render() {
    const {
      shoppingList,
      addProduct,
      deleteProduct,
      deleteAllProducts,
      updateNameProduct,
      selectProduct,
      productName,
    } = this.props;

    const {width, height} = Dimensions.get('window');

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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#f3f3f3',
        }}>
        <View
          style={{
            flex: 16,
            justifyContent: 'flex-end',
            paddingTop: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <ProductsList
            shoppingList={shoppingList}
            deleteProduct={deleteProduct}
            selectProduct={selectProduct}
          />
        </View>

        <AddProductForm
          addProduct={addProduct}
          updateNameProduct={updateNameProduct}
          productName={productName}
        />
        <View
          style={{
            position: 'absolute',
            left: width - 60,
            bottom: height * 0.11,
          }}>
          {allSelected && (
            <DeleteAllProductsButton deleteAllProducts={deleteAllProducts} />
          )}
        </View>
      </View>
    );
  }
}

export default ShoppingListAppForm;
