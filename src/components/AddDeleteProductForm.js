import React from 'react';
import {View, Dimensions} from 'react-native';
import ProductsList from './ProductsList';
import AddProductForm from './AddProductForm';
import DeleteAllProductsButton from './DeleteAllProductsButton';

class AddDeleteProductForm extends React.Component {
  render() {
    const {
      products,
      addProduct,
      deleteProduct,
      deleteAllProducts,
      updateNameProduct,
      selectProduct,
      countCheckedProducts,
    } = this.props;

    const {width, height} = Dimensions.get('window');

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 12,
            justifyContent: 'flex-end',
          }}>
          <ProductsList
            products={products}
            deleteProduct={deleteProduct}
            selectProduct={selectProduct}
          />
          {!!products.length && countCheckedProducts == products.length && (
            <DeleteAllProductsButton deleteAllProducts={deleteAllProducts} />
          )}
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <AddProductForm
            addProduct={addProduct}
            updateNameProduct={updateNameProduct}
          />
        </View>
      </View>
    );
  }
}

export default AddDeleteProductForm;
