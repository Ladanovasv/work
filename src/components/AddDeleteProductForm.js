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
            products={products}
            deleteProduct={deleteProduct}
            selectProduct={selectProduct}
          />
        </View>

        <AddProductForm
          addProduct={addProduct}
          updateNameProduct={updateNameProduct}
        />
        <View
          style={{
            position: 'absolute',
            left: width - 60,
            bottom: height * 0.11,
          }}>
          {!!products.length && countCheckedProducts == products.length && (
            <DeleteAllProductsButton deleteAllProducts={deleteAllProducts} />
          )}
        </View>
      </View>
    );
  }
}

export default AddDeleteProductForm;
