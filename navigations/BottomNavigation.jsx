import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Categories from '../screens/Categories';
import Favorite from '../screens/Favorite';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: 'Poppins-Regular',
        },
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 10,
          height: 75,
        },
      }}>
      <Tab.Screen
        name="Wallpapers"
        component={Home}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#64748b' : '#374151'}}>
              Wallpapers
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#3b82f6' : '',
                borderRadius: 10,
                padding: 5,
              }}>
              <Icon
                name="wallpaper"
                size={24}
                color={focused ? '#fff' : '#374151'}
              />
            </View>
          ),

          headerTitle: () => (
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
                color: '#334155',
              }}>
              Wallpaper
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={Categories}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#64748b' : '#374151'}}>
              Categories
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#3b82f6' : '',
                borderRadius: 10,
                padding: 5,
              }}>
              <Icon
                name="apps"
                size={24}
                color={focused ? '#fff' : '#374151'}
              />
            </View>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
                color: '#334155',
              }}>
              Categories
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#64748b' : '#374151'}}>
              Favorite
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#3b82f6' : '',
                borderRadius: 10,
                padding: 5,
              }}>
              <Icon
                name="heart"
                size={24}
                color={focused ? '#fff' : '#374151'}
              />
            </View>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
                color: '#334155',
              }}>
              Favorite
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
