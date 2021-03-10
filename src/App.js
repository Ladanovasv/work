import React from 'react';
import ListCategories from './components/ListCategories';
import {images} from './utils';
class App extends React.Component {
  state = {
    images,
    uniqueCategories: ['Земноводные', 'Обезьяны', 'Собаки', 'Кошки'],
    activeCategory: undefined,
  };

  updateSelectedCategory = (activeCategory) => {
    this.setState({activeCategory});
  };

  render() {
    const {images, uniqueCategories, activeCategory} = this.state;

    return (
      <ListCategories
        images={images}
        uniqueCategories={uniqueCategories}
        activeCategory={activeCategory}
        updateSelectedCategory={this.updateSelectedCategory}
      />
    );
  }
}

export default App;
