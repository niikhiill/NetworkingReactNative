import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Form from './ComponentScreen/Form';
import GetFormData from './ComponentScreen/GetFromData';
import MovieExample from './ComponentScreen/MovieExample';

const App = ()=> {
  return(
    // <View style = {styles.ViewStyle}>
  //  <MovieExample/>
<Form/>
//<GetFormData/>
    // </View>
  );
}

const styles = StyleSheet.create({

  ViewStyle :{
    flex: 1,
    padding: 24
  }

})

export default App;