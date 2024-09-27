import {View, Text, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const ModalComp = ({isModalVisible, toggleModal}) => {
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
        <TouchableOpacity onPress={() => Alert.alert('Set as Home Screen')}>
          <Text
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Home Screen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Set as Lock Screen')}>
          <Text
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Lock Screen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Set as Home & Lock Screen')}>
          <Text
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Home & Lock Screen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Crop')}>
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
