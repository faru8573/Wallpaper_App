import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../components/Card';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Favorite = () => {
  const [favItems, setFavItems] = useState([]);

  // useEffect(() => {
  //   const getFavItems = async () => {
  //     const localItems = await AsyncStorage.getItem('favorites');
  //     setFavItems(JSON.parse(localItems) || []);
  //     console.log('localItems', localItems);
  //   };

  //   getFavItems();
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      const getFavItems = async () => {
        const localItems = await AsyncStorage.getItem('favorites');
        setFavItems(JSON.parse(localItems) || []);
      };

      getFavItems();
    }, []),
  );

  const navigate = useNavigation();

  const handleClick = url => {
    navigate.navigate('Detailview', {url});
  };

  return (
    <View className="p-4">
      <FlatList
        data={favItems}
        keyExtractor={item => item}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => (
          <Card key={item} url={item} handleClick={handleClick} />
        )}
      />
    </View>
  );
};

export default Favorite;
