import {View, Text, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';
import {setWallpaper, TYPE_SCREEN} from 'rn-wallpapers';
import Modal from 'react-native-modal';
import RTNDeviceWallpaper from 'react-native-device-wallpaper-manager/js/NativeDeviceWallpaper';

const ModalComp = ({isModalVisible, toggleModal, imageUrl}) => {
  const setWallpaperAsHome = async () => {
    try {
      await RTNDeviceWallpaper?.setWallpaper('../assets/test.jpg', 'both');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetWallpaper = async type => {
    try {
      switch (type) {
        case 'home':
          await setWallpaper(
            {
              uri: imageUrl,
            },
            TYPE_SCREEN.HOME,
          );
          break;

        case 'lock':
          await setWallpaper(
            {
              uri: imageUrl,
            },
            TYPE_SCREEN.LOCK,
          );
          break;

        case 'both':
          await setWallpaper(
            {
              uri: imageUrl,
            },
            TYPE_SCREEN.BOTH,
          );
          break;
      }
    } catch (error) {
      console.error('Error setting wallpaper:', error);
    }
  };
  return (
    <Modal isVisible={isModalVisible}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 10,
          gap: 8,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-regular',
            fontSize: 25,
            marginBottom: 5,
          }}>
          Select an option:
        </Text>
        <TouchableOpacity
          onPress={() => {
            setWallpaperAsHome();
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Home Screen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSetWallpaper('lock')}>
          <Text
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Lock Screen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('both')}>
          <Text
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Home & Lock Screen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSetWallpaper('Crop')}>
          <Text
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Crop
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Set With')}>
          <Text
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Set With
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleModal}
          style={{position: 'absolute', top: 0, right: 10}}>
          <Text
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 25,
              fontWeight: '700',
            }}>
            &times;
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalComp;
