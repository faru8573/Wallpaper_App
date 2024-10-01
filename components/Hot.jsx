import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from './Card';

const Hot = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'http://192.168.31.147/ruang-admin/api/get-hot.php',
        );

        const jsonRes = await res.json();
        const updatedData = jsonRes.map(item => ({
          ...item,
          image: `http://192.168.31.147/ruang-admin/${item.image}`,
        }));
        setData(updatedData);
      } catch (error) {
        console.log('error while fetching data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View className="flex-1">
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Card key={item.id} url={item.image} title={item.title} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text>No wallpaper</Text>
      )}
    </View>
  );
};

export default Hot;
