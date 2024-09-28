import {View, Text, Image, TouchableOpacity, Share} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {onShare, saveFavorite, saveImage} from '../utils/utils';
import ModalComp from './Modal';

const Detailview = () => {
  const route = useRoute();
  const {url, favItems} = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const navigate = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (favItems) {
      if (favItems.includes(url)) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <Image
        source={{uri: url}}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
      />

      <View style={{position: 'absolute', top: 20, right: 20}}>
        <TouchableOpacity onPress={() => onShare(url)}>
          <Icon name="share-variant" size={30} color={'#fff'} />
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
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => saveImage(url)}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="content-save" size={30} color={'#fff'} />
          <Text style={{color: '#fff', textAlign: 'center'}}>Save</Text>
        </TouchableOpacity>

        {/* Modal for applying wallpaper */}

        <ModalComp
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          imageUrl={url}
        />

        <TouchableOpacity
          onPress={toggleModal}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="check-circle" size={30} color="#fff" />
          <Text style={{color: '#fff', textAlign: 'center'}}>Apply</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            await saveFavorite(url);
            navigate.navigate('Favorite', {
              mutate: Math.floor(Math.random() * 99999),
            });
          }}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="heart" size={30} color={isFav ? 'red' : '#fff'} />
          <Text style={{color: '#fff', textAlign: 'center'}}>Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detailview;
