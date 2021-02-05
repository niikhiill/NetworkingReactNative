import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";




export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Button
        title= "Post Data"
        onPress= {()=> {navigation.navigate('Post'); }}
        />

        <Button
          title="Get Data"
          onPress={() => navigation.navigate('Get')}
        />

      </View>
    );
  }