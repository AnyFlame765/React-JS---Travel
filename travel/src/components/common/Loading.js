import { StyleSheet, Text, ActivityIndicator, View } from 'react-native'
import React from 'react'
import {Overlay} from 'react-native-elements'


export default function Loading(props) {
  const {visible, text} = props
  return (
    <Overlay overlayStyle={styles.overlay} isVisible={visible}>
      <View style={styles.viewLoad}>
        <ActivityIndicator size={'large'} color='blue'/>
        {text &&  <Text style={styles.text}>{text}</Text>}
       
      </View>

    </Overlay>
  )
}

Loading.defaultProps = {
  visible:false
}
const styles = StyleSheet.create({
  overlay:{
   height:100,
   width:200,
   backgroundColor:'white',
   borderColor:'blue',
   borderWidth:'1',
   borderRadius:10 
  },
  viewLoad:{
alignItems:'center',
justifyContent:'center',
  },
  text:{
    color:'blue',
    textTransform:'uppercase',
    marginVertical:10

  },
})