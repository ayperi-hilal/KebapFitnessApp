import React from "react";
import { SafeAreaView, View, Text,StyleSheet } from "react-native";

function MemberResult({route}) {
    // console.log(route);

    /**diğer sayfadan user diye birşey oluşturmuş ve değerleri aktarmıştım.
     *  şimdi sırada verileri burada görüntülemekte */

    const {user}=route.params;

    return (
        <SafeAreaView>
            <View style={styles.container}>
            <Text style={styles.message}>kayıt başarılıdır</Text>
            <Text style={styles.label}> Üye Adı: {user.userName}</Text>
            <Text style={styles.label}> Üye Soyadı:{user.userSurName}</Text>
            <Text style={styles.label}> Üye Yaşı:{user.userAge}</Text>
            <Text style={styles.label}> Üye Şehri:{user.userSehir}</Text>
            <Text style={styles.label}> Üye E-posta:{user.userPosta}</Text>
            <Text style={styles.label}> Üye Şifresi:{user.userSifre}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        marginTop:50,
      

    },
    label:{
        fontWeight:'bold',
        fontSize:20,
        margin:5,
    },
    message:{
        fontWeight:'bold',
        fontSize:50,
        textAlign:'center',
        marginBottom:20,
        // backgroundColor:'red',
    }
})

export default MemberResult;