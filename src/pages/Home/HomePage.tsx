import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import {CategoryTypes} from '../../types';
import Categories from '../../components/Categories/Categories';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';

const URL: string | any = Config.API_CATEGORY_URL;

function HomePage() {
  const {data, isLoading, error} = useFetch(URL);
  const renderData = ({item}: {item: CategoryTypes}) => {
    return <Categories category={item} />;
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <FlatList
      data={data.categories}
      renderItem={renderData}
      numColumns={2}
      keyExtractor={item => item.idCategory.toString()}
    />
  );
}

export default HomePage;
