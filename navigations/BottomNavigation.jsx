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
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Wallpapers"
        component={Home}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? 'red' : '#374151'}}>Wallpapers</Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="wallpaper"
              size={26}
              color={focused ? 'red' : '#374151'}
            />
          ),

          headerTitle: () => (
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>
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
            <Text style={{color: focused ? 'red' : '#374151'}}>Categories</Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="view-module"
              size={26}
              color={focused ? 'red' : '#374151'}
            />
          ),
          headerTitle: () => (
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>
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
            <Text
              style={{
                color: focused ? 'red' : '#374151',
                fontFamily: 'Poppins-Regular',
              }}>
              Favorite
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon name="heart" size={26} color={focused ? 'red' : '#374151'} />
          ),
          headerTitle: () => (
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>
              Favorite
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
