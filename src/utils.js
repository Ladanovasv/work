import uuid from 'react-native-uuid';

export function createProduct(name) {
  return {
    id: uuid.v4(),
    name,
    isSelected: false,
  };
}
