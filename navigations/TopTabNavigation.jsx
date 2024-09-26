import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Fresh from '../components/Fresh';
import Hot from '../components/Hot';
import Shuffle from '../components/Shuffle';
import Handpicked from '../components/Handpicked';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopTabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins-Regular',
          paddingVertical: -5,
        },
        tabBarStyle: {},

        tabBarIndicatorStyle: {
          height: 5,
          backgroundColor: '#374151',
        },
      }}>
      <Tab.Screen
        name="Fresh"
        component={Fresh}
        options={{
          tabBarLabel: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#22c55e' : '',
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingTop: 4,
                paddingBottom: 4,
                elevation: focused ? 5 : 0,
              }}>
              <Text
                style={{
                  color: focused ? '#fff' : '#374151',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  fontWeight: '700',
                }}>
                Fresh
              </Text>
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <Icon name="leaf" size={22} color={focused ? '#22c55e' : ''} />
          ),
        }}
      />
      <Tab.Screen
        name="Hot"
        component={Hot}
        options={{
          tabBarLabel: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? 'rgba(255,0,0,0.8)' : 'transparent',
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingTop: 4,
                paddingBottom: 4,
                elevation: focused ? 5 : 0,
              }}>
              <Text
                style={{
                  color: focused ? '#fff' : '#374151',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  fontWeight: '700',
                }}>
                Hot
              </Text>
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <Icon name="fire" size={22} color={focused ? 'red' : '#374151'} />
          ),
        }}
      />
      <Tab.Screen
        name="Shuffle"
        component={Shuffle}
        options={{
          tabBarLabel: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#FF4081' : 'transparent',
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingTop: 4,
                paddingBottom: 4,
                elevation: focused ? 5 : 0,
              }}>
              <Text
                style={{
                  color: focused ? '#fff' : '#374151',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  fontWeight: '700',
                }}>
                Shuffle
              </Text>
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="shuffle"
              size={22}
              color={focused ? '#FF4081' : '#374151'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Handpicked"
        component={Handpicked}
        options={{
          tabBarLabel: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#FFD700' : 'transparent',
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingTop: 4,
                paddingBottom: 4,
                elevation: focused ? 5 : 0,
              }}>
              <Text
                style={{
                  color: focused ? '#fff' : '#374151',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  fontWeight: '700',
                }}>
                Handpicked
              </Text>
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="star"
              size={22}
              color={focused ? '#FFD700' : '#374151'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
