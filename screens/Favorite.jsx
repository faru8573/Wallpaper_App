import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../components/Card';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Favorite = ({route}) => {
  const [favItems, setFavItems] = useState([]);
  const navigate = useNavigation();

  // useEffect(() => {
  //   const getFavItems = async () => {
  //     const localItems = await AsyncStorage.getItem('favorites');
  //     setFavItems(JSON.parse(localItems) || []);
  //     console.log('localItems', localItems);
  //   };

  //   getFavItems();
  // }, []);

  const getFavItems = async () => {
    console.log(route?.params?.mutate);

    console.log('ca');

    const localItems = await AsyncStorage.getItem('favorites');
    setFavItems(JSON.parse(localItems) || []);
  };

  useEffect(() => {
    getFavItems();
  }, [route?.params?.mutate]);

  const handleClick = url => {
    navigate.navigate('Detailview', {url, favItems});
  };

  return (
    <View className="p-4">
      {favItems.length > 0 ? (
        <FlatList
          data={favItems}
          keyExtractor={item => item}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={({item, index}) => (
            <Card key={index} url={item} handleClick={handleClick} />
          )}
        />
      ) : (
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            textAlign: 'center',
            fontSize: 32,
          }}>
          No Favorite
        </Text>
      )}
    </View>
  );
};

export default Favorite;
