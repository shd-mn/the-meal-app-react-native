import React from 'react';
import Config from 'react-native-config';
import {FlatList, SafeAreaView} from 'react-native';
import {CategoryTypes} from '../../types';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

import styles from './Categories.style';
import RenderSeparator from '../../components/common/Seperator';

type PropTypes = {
  navigation: {
    navigate: (route: string, params?: object) => void;
  };
};

const URL: string | any = Config.API_URL;

function Categories({navigation}: PropTypes) {
  const {data, isLoading, error} = useFetch(`${URL}/categories.php`);
  const handleSelect = (categoryName: string) => {
    navigation.navigate('Meals', {categoryName});
  };
  const renderItem = ({item}: {item: CategoryTypes}) => {
    return <CategoryCard category={item} onSelect={handleSelect} />;
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
        data={data?.categories}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.idCategory.toString()}
        ItemSeparatorComponent={RenderSeparator}
      />
    </SafeAreaView>
  );
}

export default Categories;
