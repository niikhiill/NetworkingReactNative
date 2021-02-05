import React,{Component} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity,  ActivityIndicator, FlatList} from 'react-native';


export default class PostForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: "",
            surname: ""
        }
    }


make_Api_Call=()=>{
    const {name, surname}= this.state;
    if( this.Validate_fields()){


    const requestOptions = {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name, surname })
    };
    fetch('https://6018db6e971d850017a4052d.mockapi.io/data', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
}
}


Validate_fields=()=>{

 const {name, surname}= this.state;

    if(name==""){
    alert("Please enter first name");
    return false}

    else if(surname==""){
    alert("Please enter last name");
    return false}

    else 
    return true;
}

render(){
    return (
            <View style = {styles.ViewStyle}>

                <TextInput style = {styles.InputStyle} placeholder = {" First Name"}  autoCorrect= {false}
                // value = {name}
                onChangeText = {(value) => this.setState({name: value})}
                />    
              
                <TextInput style = {styles.InputStyle} placeholder = {"Last Name"} autoCorrect= {false}
                 onChangeText = {(value) => this.setState({surname: value})}
                />
               
                <TouchableOpacity style = {styles.ButtonStyle} onPress = {()=>
                    { this.make_Api_Call(); alert("Data submitted!")}}>
                    <Text style = {{color: 'white'}}>Submit</Text>
                </TouchableOpacity>


                <Text style = {styles.TextStyle}>
                First Name Entered: {this.state.name}
                </Text>


                <Text>
                Last Name Entered: {this.state.surname}
                </Text>


            </View>
    );
}
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
},

TextStyle: {
    marginTop: '10%'
}

})


