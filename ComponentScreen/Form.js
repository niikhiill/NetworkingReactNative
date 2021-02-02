import React,{useState, useEffect, Component} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity,  ActivityIndicator, FlatList} from 'react-native';

function make_Api_Call({name,surname}) {

    if( Validate_fields({name, surname})){
      alert("clicked")
}

}


const Validate_fields=({name,surname})=>{

if(name==""){
alert("Please enter first name");
return false}
else if(surname==""){
alert("Please enter last name");
return false}
else 
return true;
}


const Form = ()=> {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    return (
            <View style = {styles.ViewStyle}>
                <TextInput style = {styles.InputStyle} placeholder = {" FirstName"}  autoCorrect= {false}
                // value = {name}
                onChangeText = {(name) => setName(name)}
                >    
                </TextInput>


                <TextInput style = {styles.InputStyle} placeholder = {"SurName"} autoCorrect= {false}
                 onChangeText = {(surname) => setSurname(surname)}
                >

                </TextInput>
                <TouchableOpacity style = {styles.ButtonStyle} onPress = {()=>make_Api_Call({name,surname})}>
                    <Text style = {{color: 'white'}}>Submit</Text>
                </TouchableOpacity>

                <Text>
                name is {name}
                </Text>
                <Text>
                Surname is {surname}
                </Text>
                <Text>
                    data is :{}
                </Text>

            </View>

           
    );
}

const styles= StyleSheet.create({

ViewStyle: {
    height: '100%',
    width: '100%',
   alignItems: 'center',
   justifyContent: 'center'

},

InputStyle: {
    height: 42,
    width: '80%',
    borderBottomWidth: 1,
},

ButtonStyle: {
height: 42,
width: '80%',
borderRadius: 40 ,
borderWidth: 1,
backgroundColor: 'black',
justifyContent: 'center',
alignItems: 'center',
marginTop: '5%'
}

})


export default Form;