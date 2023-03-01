import { Button, StyleSheet, Text, View,  } from "react-native";
import React, { useEffect, useState } from "react";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import LoginSreen from "./LoginSreen";
import Loading from "../components/common/Loading";




export default function Index(props) {
    const { navigation } = props;
    const [session, setSession] = useState(null)
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth ,(user)=>{
        console.log(user);
        setSession(user ? true : false)
      })
  
    
    }, [])
    if (session == null) {
        return<Loading  text={'validando Sesion'}/>
    }
    


    return session ?(
    <View> 
        <Button
        title="ir a detalles "
        onPress={() => navigation.navigate("details")}
        />
        <Button
        title="ir a informacion"
        onPress={() => navigation.navigate("information")}
        />
        <Button
        title="ir a login"
        onPress={() => navigation.navigate("details", {screen:'login'})}
        />

    </View>
    ) : <LoginSreen/>
}
