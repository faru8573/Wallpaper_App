import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Card = ({url, handleClick}) => {
  return (
    <View className="mb-4" style={{flex: 1, margin: 5}}>
      <TouchableOpacity
        onPress={() => {
          if (handleClick) handleClick(url);
        }}>
        <Image
          source={{uri: url}}
          style={{width: '100%', height: 150, borderRadius: 10}}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
