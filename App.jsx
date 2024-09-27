import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './navigations/BottomNavigation';
import Detailview from './components/Detailview';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView className="flex-1">
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={BottomNavigation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Detailview"
              component={Detailview}
              options={{
                title: 'Preview',
                headerTitleStyle: {
                  fontFamily: 'Poppins-Bold',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
