import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


export default function LoginSreen() {

  const navigation = useNavigation()
  console.log(navigation);
  const irAResgistro = () =>{
    navigation.navigate('registerS')
  }
  return (
    <View>
      <Image source={require('../../assets/img/Logo-Spiderman.png')} style={styles.logo} />
      <Text>Formulario de Login</Text>
      <View>
        <Text onPress={irAResgistro} >Registrate</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginTop: 10,

  },
})