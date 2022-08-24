import React from "react";
import { Text, View, SafeAreaView } from 'react-native'
import Button from "../components/Button";
import Input from "../components/Input";

function MemberSing() {

    c




    return (
        <SafeAreaView>
            {/* <Text>Üye Ekranı</Text> */}
            <Input label="İsim" placeholder="Lütfen isim giriniz...."/>
            <Input label="Soyisim" placeholder="Lütfen soyisim giriniz...."/>
            <Input label="Yaş" placeholder="Lütfen yaş giriniz...."/>
            <Input label="Şehir" placeholder="Lütfen Şehir giriniz...."/>
            <Input label="E-posta" placeholder="Lütfen e-posta giriniz...."/>
            <Input label="Şifre" placeholder="Lütfen şifre giriniz...."/>
            <Input label="Şifre Tekrar" placeholder="Lütfen şifreyi tekrar giriniz...."/>

            <Button text="Kaydı Tamamla" onPress={null}/>
        </SafeAreaView>
    );
}

export default MemberSing;

