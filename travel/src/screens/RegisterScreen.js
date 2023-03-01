import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native-elements'
import RegisterForm from '../components/account/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>

         <Image source={require('../../assets/img/Logo-Spiderman.png')} style={styles.logo} />
      {/* <Text>RegisterScreen</Text> */}
      <View style={styles.viewForm}>
        <RegisterForm/>
      </View>
  
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginTop: 10,
    
      },
      viewForm:{
        
        marginHorizontal: 10 ,
      },
})