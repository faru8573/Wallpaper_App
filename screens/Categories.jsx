import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          'http://192.168.159.162/ruang-admin/api/get-categories.php',
        );
        const jsonRes = await res.json();
        const updatedData = jsonRes.map(item => ({
          ...item,
          image: `http://192.168.159.162/ruang-admin/${item.image}`,
        }));
        setCategories(updatedData);
      } catch (error) {
        console.error('Network request failed', error);
      }
    };
    getCategories();
  }, []);

  const navigate = useNavigation();

  const handleClick = url => {
    navigate.navigate('Detailview', {url});
  };

  return (
    <View className="flex-1 p-4">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {categories.map((cat, index) => (
          <Card
            key={index}
            url={cat.image}
            title={cat.title}
            handleClick={handleClick}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
