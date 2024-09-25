import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {data} from '../data';
import Card from './Card';
import {useNavigation} from '@react-navigation/native';

const Fresh = () => {
  const navigate = useNavigation();

  const handleClick = url => {
    navigate.navigate('Detailview', {url});
  };
  return (
    <View className="flex-1 p-4 gap-2">
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => (
          <Card key={item.id} url={item.url} handleClick={handleClick} />
        )}
      />
    </View>
  );
};

export default Fresh;
