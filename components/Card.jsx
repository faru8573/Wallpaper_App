import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Card = ({url, handleClick, title}) => {
  return (
    <View className="mb-4" style={{flex: 1, margin: 5}}>
      <TouchableOpacity
        onPress={() => {
          if (handleClick) handleClick(url);
        }}>
        <Image
          source={{uri: url}}
          style={{width: '100%', minHeight: 250, borderRadius: 10}}
          resizeMode="cover"
        />
        {title && (
          <Text
            style={{
              position: 'absolute',
              top: 5,
              right: 5,
              zIndex: 2,
              fontSize: 20,
              fontWeight: '700',
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: 2,
              borderRadius: 4,
              paddingHorizontal: 8,
              color: '#fff',
            }}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Card;
