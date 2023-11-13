import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login/Login';
import Register from './src/pages/register/Register';
import { RootStackParamList } from './src/interface/rootStack';
import { NativeBaseProvider } from 'native-base';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NativeBaseProvider>
 <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name='Register' component={Register} />
     </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
   
  );
}

