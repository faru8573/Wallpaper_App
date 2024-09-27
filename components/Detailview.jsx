import {View, Text, Image, TouchableOpacity, Share} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {onShare, saveFavorite, saveImage} from '../utils/utils';
import ModalComp from './Modal';

const Detailview = () => {
  const route = useRoute();
  const {url} = route.params;
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="flex-1">
      <Image
        source={{uri: url}}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
      />

      <View style={{position: 'absolute', top: 20, right: 20}}>
        <TouchableOpacity onPress={() => onShare(url)}>
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
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => saveImage(url)}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="content-save" size={30} color="#fff" />
          <Text style={{color: '#fff', textAlign: 'center'}}>Save</Text>
        </TouchableOpacity>

        {/* Modal for applying wallpaper */}

        <ModalComp isModalVisible={isModalVisible} toggleModal={toggleModal} />

        <TouchableOpacity
          onPress={toggleModal}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="check-circle" size={30} color="#fff" />
          <Text style={{color: '#fff', textAlign: 'center'}}>Apply</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => saveFavorite(url)}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="heart" size={30} color="#fff" />
          <Text style={{color: '#fff', textAlign: 'center'}}>Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detailview;
