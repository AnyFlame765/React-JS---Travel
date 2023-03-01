import { View, Text, Button} from 'react-native'
import React from 'react'

export default function Details(props) {
    const {navigation}  = props;
  return (
    <View>

        <Button title='ir a inicio ' 
        onPress={()=>navigation.navigate('index')}
        />

    <Button title='ir a informacion ' 
    onPress={()=>navigation.navigate('information')}
    />
    

    </View>
  )
}