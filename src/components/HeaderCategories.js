import React from 'react';
import {ScrollView} from 'react-native';
import ButtonCategory from './ButtonCategory';

class HeaderCategories extends React.Component {


  

  render() {
    const {uniqueCategories, updateSelectedCategory, activeCategory} = this.props;

    
    return (
      <ScrollView horizontal={true}>
        {uniqueCategories.map((category) => {
          const isActive = category === activeCategory;

          return (<ButtonCategory 
            category={category} 
            isActive={isActive}
            onPress={()=>{updateSelectedCategory(isActive? undefined : category)}}/>)
        })}
      </ScrollView>
    );
  }
}

export default HeaderCategories;
