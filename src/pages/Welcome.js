import React from "react";
import { SafeAreaView,Text,View,StyleSheet } from "react-native";
import Button from "../components/Button";
import MemberSing from "./MemberSing";


function Welcome({navigation}){

    function GotoMemberSing(){
        
           navigation.navigate('MemberSingScreens');
        
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text  style={styles.header}>
                Kebap Fitness Salonu
            </Text>
            {/**() => { props.navigation.navigate('FirstScreen') } */}
            <Button text="Üye kaydı oluştur" onPress={GotoMemberSing}/>
            {/* <Button text="Üye kaydı oluştur" onPress={()=>{props.navigation.navigate('MemberSingScreens')}}/> */}
        </SafeAreaView>
    );
}

export default Welcome;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        margin:10,

    }
})




