import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {View, StyleSheet, Text} from 'react-native';
import PostForm from './ComponentScreen/PostForm';
import GetForm from './ComponentScreen/GetForm';
import HomeScreen from "./ComponentScreen/HomeScreen";
import MovieExample from './ComponentScreen/MovieExample';

const Stack = createStackNavigator();

const App = ()=> {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Post" component={PostForm} />
      <Stack.Screen name="Get" component={GetForm} />

      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({

  ViewStyle :{
    flex: 1,
    padding: 24
  }

})

export default App;