import React from 'react';
import Config from 'react-native-config';
import {MealTypes} from '../../types';
import {SafeAreaView, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import MealCard from '../../components/MealCard';
import styles from './Meals.style';
import RenderSeparator from '../../components/common/Seperator';
type PropTypes = {
  navigation: {
    navigate: (name: string, params?: object) => void;
  };
  route: {
    params?: {categoryName?: string};
  };
};

const URL: string | any = Config.API_URL;

function Meals({route, navigation}: PropTypes) {
  const {categoryName} = route.params || {};
  const {data, isLoading, error} = useFetch(
    `${URL}/filter.php?c=${categoryName}`,
  );
  const handleSelect = (mealName: string) => {
    navigation.navigate('Detail', {mealName});
  };
  const renderItem = ({item}: {item: MealTypes}) => {
    return <MealCard meal={item} onSelect={handleSelect} />;
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.meals}
        renderItem={renderItem}
        keyExtractor={item => item.idMeal}
        ItemSeparatorComponent={RenderSeparator}
      />
    </SafeAreaView>
  );
}

export default Meals;
