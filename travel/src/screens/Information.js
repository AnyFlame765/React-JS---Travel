import { View, Text , Button} from 'react-native'
import React from 'react'

export default function Information(props) {
    const {navigation}  = props;
  return (
    <View>
        <Button title='ir a detalles ' 
        onPress={()=>navigation.navigate('details')}
        />
        <Button title='ir a inicio ' 
        onPress={()=>navigation.navigate('index')}
    />
    </View>
  )
}