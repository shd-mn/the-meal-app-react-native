import React from 'react';
import {TouchableWithoutFeedback, View, Text, Image} from 'react-native';
import {MealTypes} from '../../types';
import styles from './MealCard.style';
type PropTypes = {
  meal: MealTypes;
  onSelect: (mealName: string) => void;
};

function MealCard({meal, onSelect}: PropTypes) {
  return (
    <TouchableWithoutFeedback onPress={() => onSelect(meal.strMeal)}>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{uri: meal.strMealThumb}}
            resizeMode="cover"
          />
        </View>
        <View style={styles.content}>
          <Text>{meal.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MealCard;
