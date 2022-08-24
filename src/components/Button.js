import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from 'react-native';

const Button=({text,onPress})=>{
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles=StyleSheet.create({
container:{
backgroundColor:'#005ecb',
borderRadius:5,
padding:10,
margin:5,
alignItems:'center',
justifyContent:'center',

},
text:{
    color:'white',
    fontWeight:'bold'
}
})



