import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/common/Error';
import Loading from '../../components/common/Loading';

type PropTypes = {
  route: {
    params?: {
      mealName?: string;
    };
  };
};
const URL: string | undefined = Config.API_URL;
function MealDetail({route}: PropTypes) {
  const {mealName} = route?.params || {};

  const {data, isLoading, error} = useFetch(`${URL}/search.php?s=${mealName}`);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <SafeAreaView>
      {data?.meals?.map(item => (
        <View key={item.idMeal}>
          <Text>{item.strMeal}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
}

export default MealDetail;
