import React, { useState } from "react";
import { Text, View, SafeAreaView, Alert } from 'react-native'
import Button from "../components/Button";
import Input from "../components/Input";
import MemberResult from "./MemberResult";


function MemberSing({navigation}) {

    const [userName, setUserName] = useState(null);
    const [userSurName, setUserSurName] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userSehir, setUserSehir] = useState(null);
    const [userPosta, setUserPosta] = useState(null);
    const [userSifre, setUserSifre] = useState(null);
    const [userSifreT, setUserSifreT] = useState(null);


    function handlesubmit() {/**{navigation} buraya ilk başta koymuştum yanlışlıkla hata almıştım dikkat et.  */
        if (!userName || !userSurName || !userAge || !userSehir || !userPosta || !userSifre || !userSifreT) {
            Alert.alert('Kebap Fitness Salonu','Bilgiler boş bırakılamaz!');
            return;
        }

        const user = {/*bu kısımda name=username olarakta yazılabilirdi */
            userName,
            userSurName,
            userAge,
            userSehir,
            userPosta,
            userSifre,
            userSifreT,
                };
        // console.log(user);

        /**şimdi artık bilgilier diğer sayfaya yönlendirmemiz gerekmektedir. */
        navigation.navigate('MemberResultScreens',{user});

    }
    return (
        <SafeAreaView>
            {/* <Text>Üye Ekranı</Text> */}
            <Input label="İsim" placeholder="Lütfen isim giriniz...."
                onChangeText={setUserName} />
            <Input label="Soyisim" placeholder="Lütfen soyisim giriniz...."
                onChangeText={setUserSurName} />
            <Input label="Yaş" placeholder="Lütfen yaş giriniz...."
                onChangeText={setUserAge} />
            <Input label="Şehir" placeholder="Lütfen Şehir giriniz...."
                onChangeText={setUserSehir} />
            <Input label="E-posta" placeholder="Lütfen e-posta giriniz...."
                onChangeText={setUserPosta} />
            <Input label="Şifre" placeholder="Lütfen şifre giriniz...."
                onChangeText={setUserSifre} />
            <Input label="Şifre Tekrar" placeholder="Lütfen şifreyi tekrar giriniz...."
                onChangeText={setUserSifreT} />

            <Button text="Kaydı Tamamla" onPress={handlesubmit} />
        </SafeAreaView>
    );
}

export default MemberSing;

