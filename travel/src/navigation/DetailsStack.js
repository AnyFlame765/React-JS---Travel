import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from '../screens/Details';
import LoginSreen from '../screens/LoginSreen';

const Stack = createNativeStackNavigator();
export default function IndexStack() {
  return (
   <Stack.Navigator>
        <Stack.Screen 
        name='detailsS'
        component={Details}
        options={{title:'Detalles jhon'}}
        />
         
   </Stack.Navigator>
  )
}