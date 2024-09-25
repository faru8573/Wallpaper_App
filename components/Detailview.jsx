import {View, Text, Image, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Detailview = () => {
  const route = useRoute();
  const {url} = route.params;

  const onShare = async () => {
    try {
      await Share.share({
        message: `Check out this wallpaper: ${url}`,
        url: url,
      });
    } catch (error) {
      console.error('error while shareing', error);
    }
  };
  return (
    <View className="flex-1">
      <Image
        source={{uri: url}}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
      />

      <View style={{position: 'absolute', top: 20, right: 20}}>
        <TouchableOpacity onPress={onShare}>
          <Icon name="share-variant" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <TouchableOpacity>
          <Icon name="content-save" size={30} color="#fff" />
          <Text style={{color: '#fff', textAlign: 'center'}}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="check-circle" size={30} color="#fff" />
          <Text style={{color: '#fff', textAlign: 'center'}}>Apply</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="heart" size={30} color="#fff" />
          <Text style={{color: '#fff', textAlign: 'center'}}>Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detailview;
