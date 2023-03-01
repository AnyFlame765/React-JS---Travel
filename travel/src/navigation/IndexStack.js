import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '../screens/Index';
import LoginSreen from '../screens/LoginSreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();
export default function IndexStack() {
  return (
   <Stack.Navigator>
        <Stack.Screen 
        name='indexs'
        component={Index}
        options={{title:'inicio '}}
        />
         <Stack.Screen 
        name='login'
        component={LoginSreen}
        options={{title:'Iniciar- Sesión'}}
        />
        <Stack.Screen 
        name='registerS'
        component={RegisterScreen}
        options={{title:'Registarse'}}
        />
   </Stack.Navigator>
  )
}