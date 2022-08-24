import React from "react";
import { TextInput, View, Text, StyleSheet, SafeAreaView } from 'react-native'

function Input({ label, onChangeText, placeholder }) {
    return (
    
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.ınput_container}>
                    <TextInput placeholder={placeholder} onChangeText={onChangeText} />
                </View>
            </View>
        
    )
}

export default Input;

const styles = StyleSheet.create({
    ınput_container: {
        borderWidth: 1,
        margin: 3,

        padding: 5,
        borderRadius: 5,
        borderColor: '#ffcdd2',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,


    },
    container: {
        margin: 10,

    }

})
