import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  // TouchableOpacity,
} from 'react-native';
import {CategoryTypes} from '../../types';
import styles from './CategoryCard.style';

type PropTypes = {
  category: CategoryTypes;
  onSelect: (categoryName: string) => void;
};

function CategoryCard({category, onSelect}: PropTypes) {
  return (
    <TouchableWithoutFeedback onPress={() => onSelect(category?.strCategory)}>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{uri: category?.strCategoryThumb}}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>{category?.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;
