//Nguyễn Bá Tuân
//2124802010170

import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator'; // Đảm bảo rằng DrawerNavigator là một thành phần riêng biệt
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator} // Chuyển DrawerNavigator vào đây như một màn hình con
          options={{headerShown: false}} // Tắt header mặc định để không trùng tên "Home"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
