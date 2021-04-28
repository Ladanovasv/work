import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputProduct from '../../components/InputProduct';
import ActionButton from 'react-native-action-button';
import {withState} from '../../hoc/withState';

class CreateProduct extends React.Component {
  state = {
    productName: '',
  };

  updateProductName = (productName) => {
    this.setState({productName});
  };

  onPress = () => {
    const {productName} = this.state;
    const {navigation, addProduct} = this.props;
    addProduct(productName);
    this.setState({productName: ''});
    navigation.navigate('home');
  };

  render() {
    const {productName} = this.state;

    return (
      <View style={styles.root}>
        <InputProduct
          productName={productName}
          updateProductName={this.updateProductName}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={this.onPress} />
      </View>
    );
  }
}

export default withState(CreateProduct);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
  },
});
