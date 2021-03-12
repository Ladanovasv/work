import React from 'react';
import AddDeleteProductForm from './components/AddDeleteProductForm';

class App extends React.Component {
  state = {
    products: [],
    id: 0,
    countCheckedProducts: 0,
    nameProduct: '',
  };

  updateNameProduct = (nameProduct) => {
    this.setState({nameProduct});
  };

  addProduct = () => {
    let product = {
      id: 'id' + this.state.id,
      name: this.state.nameProduct,
      isSelected: false,
    };
    this.state.products.push(product);
    this.setState({
      id: this.state.id + 1,
    });
  };

  deleteProduct = (product) => {
    index = this.state.products.findIndex(
      (itemProduct) => itemProduct.id == product.id,
    );

    index == -1
      ? console.log('Error not found product for delete')
      : this.state.products.splice(index, 1);

    product.isSelected
      ? this.setState({
          countCheckedProducts: this.state.countCheckedProducts - 1,
        })
      : this.setState({
          countCheckedProducts: this.state.countCheckedProducts,
        });
  };

  deleteAllProducts = () => {
    this.state.products.splice(0, this.state.products.length);
    this.setState({
      id: 0,
      countCheckedProducts: 0,
    });
  };

  selectProduct = (product, isSelect) => {
    index = this.state.products.findIndex(
      (itemProduct) => itemProduct.id == product.id,
    );
    index == -1
      ? console.log({index})
      : (this.state.products[index].isSelected = isSelect);
    this.setState({
      countCheckedProducts: isSelect
        ? this.state.countCheckedProducts + 1
        : this.state.countCheckedProducts - 1,
    });
  };

  render() {
    const {products, countCheckedProducts} = this.state;

    return (
      <AddDeleteProductForm
        products={products}
        addProduct={this.addProduct}
        deleteProduct={this.deleteProduct}
        deleteAllProducts={this.deleteAllProducts}
        updateNameProduct={this.updateNameProduct}
        selectProduct={this.selectProduct}
        countCheckedProducts={countCheckedProducts}
      />
    );
  }
}

export default App;
