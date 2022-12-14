import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/pages/Welcome';
import MemberSing from './src/pages/MemberSing';
import MemberResult from './src/pages/MemberResult';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
         name="WelcomeScreen" 
         component={Welcome} 
        //  options={{headerShown:false }}
         />
         <Stack.Screen name="MemberSingScreens" component={MemberSing}/>
         <Stack.Screen name="MemberResultScreens" component={MemberResult}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



