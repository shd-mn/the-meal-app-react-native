import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {CategoryTypes} from '../../types';
import styles from './CategoryCard.style';

type PropTypes = {
  category: CategoryTypes;
  onSelect: (categoryName: string) => void;
};

function CategoryCard({category, onSelect}: PropTypes) {
  const {strCategory, strCategoryThumb} = category || {};
  const handlePress = () => {
    onSelect(strCategory);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{uri: strCategoryThumb}}
          resizeMode="contain"
          alt={strCategory}
          onError={() => console.log('Failed to load image')}
        />
        <Text style={styles.title}>{strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryCard;
