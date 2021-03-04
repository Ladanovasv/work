import React from 'react';
import {ScrollView} from 'react-native';
import ButtonCategory from './ButtonCategory';

class HeaderCategories extends React.Component {
  render() {
    const {uniqueCategories} = this.props;

    return (
      <ScrollView horizontal={true}>
        {uniqueCategories.map((category) => {
          return <ButtonCategory category={category} />;
        })}
      </ScrollView>
    );
  }
}

export default HeaderCategories;
