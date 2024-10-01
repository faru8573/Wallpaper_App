import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from './Card';

const Shuffle = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchSuffle = async () => {
      try {
        const res = await fetch(
          'http://192.168.31.147/ruang-admin/api/get-shuffle.php',
        );
        const resJson = await res.json();
        const updatedData = resJson.map(item => ({
          ...item,
          image: `http://192.168.31.147/ruang-admin/${item.image}`,
        }));

        setData(updatedData);
      } catch (error) {
        console.log('error while fetching data', error);
      }
    };

    fetchSuffle();
  }, []);
  return (
    <View className="flex-1">
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={item => item.image}
          renderItem={({item}) => (
            <Card
              url={item.image}
              title={item.title}
              key={item.id.toString() + Math.round()}
            />
          )}
        />
      ) : (
        <Text>No Wallpapers</Text>
      )}
    </View>
  );
};

export default Shuffle;
