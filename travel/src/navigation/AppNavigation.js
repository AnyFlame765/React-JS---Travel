import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import indexScreen from '../screens/Index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from '../screens/Index';
import Details from '../screens/Details';
import Information from '../screens/Information';
import LoginSreen from '../screens/LoginSreen';
import IndexStack from './IndexStack';
import DetailsStack from './DetailsStack';


const Tab = createBottomTabNavigator();
export default function AppNavigation() {
  return (
    <Tab.Navigator screenOptions={({route})=>({
    headerShown:false,
    tabBarActiveTintColor: '#e91e63',
    tabBarInactiveTintColor:'green',
    tabBarIcon:({color, size})=>  
     showIcons(route, color, size)
    
    })}>
        <Tab.Screen component={IndexStack} 
            name='index'
            options={{title:"Inicio", 
            // headerShown:false
          }}
            />
            <Tab.Screen component={DetailsStack} name='details' options={{
        title:'Detalles'
        }}/>
        <Tab.Screen component={Information} name='information' options={{
        title:'Information' ,headerShown:true
    }}/>
    {/* <Tab.Screen component={LoginSreen} name='login' options={{
        title:'Inicio Sesión'
    }}/> */}
    </Tab.Navigator>
    
  )
}
function showIcons(route, color, size) {
  let icono;
  if (route.name == 'index') {
    icono='home-circle'
  }
  if (route.name=='details') {
    icono='details'
    
  }
  if (route.name=='information') {
    icono='information'
  }
  return(
    <Icon   
    type='material-community'
    name={icono}
    color={color}
    size={25}
  />
  )
  
}