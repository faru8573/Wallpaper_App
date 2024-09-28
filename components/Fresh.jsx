import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from './Card';
import {useNavigation} from '@react-navigation/native';
import MasonryList from 'react-native-masonry-list';

const Fresh = () => {
  const navigate = useNavigation();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const res = await fetch(
          'http://192.168.183.162/ruang-admin/api/get-wallpapers.php',
          {
            method: 'GET',
          },
        );
        if (!res.ok) throw new Error('Network request failed');

        const jsonData = await res.json();

        // const updatedData = jsonData.map(item => {
        //   const imageUrl = `http://192.168.183.162/ruang-admin/${item.image}`;
        //   console.log('image url', imageUrl);
        //   return {
        //     source: {uri: imageUrl},
        //     id: item.id,
        //     title: item?.title,
        //   };
        // });

        setData(
          jsonData.map(item => ({
            ...item,
            url: `http://192.168.183.162/ruang-admin/${item.image}`,
          })),
        );
      } catch (error) {
        console.error('Network request failed', error);
        setError(error.message);
      }
    };

    fetchWallpapers();
  }, []);

  const handleClick = url => {
    navigate.navigate('Detailview', {url});
  };
  return (
    <View className="flex-1 p-4 gap-2">
      {error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={({item}) => (
            <Card key={item.id} url={item.url} handleClick={handleClick} />
          )}
        />
      )}
    </View>
  );
};

export default Fresh;
