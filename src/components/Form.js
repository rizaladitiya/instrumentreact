import React, { Component } from 'react';
import fungsi from '../components/Fungsi';
import md5 from 'md5';
import {WToast} from 'react-native-smart-tip'

import {

StyleSheet,

Text,

View,

TextInput,

TouchableOpacity,

AsyncStorage

} from 'react-native';

state = {

  user : '',
  password : '',
  message : null,
  isLoading: false,
  snackIsVisible: false,
      //Setting up the starting visible state of snackbar
      distance: 0,
}


export default class Form extends Component<{}> {

constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
	
  }

  state = {
    isLoading : false
  }
  
  
	handleSubmit(){
		this.setState({ 
		
				});
		fungsi.login(this.state.user,this.state.password)
	}
	utama() {

	Actions.utama()

	}
render(){
	
return(

<View style={styles.container}>

<TextInput style={styles.inputBox}

underlineColorAndroid='rgba(0,0,0,0)'

placeholder="Email"

placeholderTextColor = "#ffffff"

selectionColor="#fff"

keyboardType="email-address"

onChangeText={(text) => this.setState({user:text})}

onSubmitEditing={()=> this.password.focus()}

/>

<TextInput style={styles.inputBox}

underlineColorAndroid='rgba(0,0,0,0)'

placeholder="Password"

secureTextEntry={true}

placeholderTextColor = "#ffffff"

onChangeText={(text) => this.setState({password:text})}

ref={(input) => this.password = input}

/>

<TouchableOpacity style={styles.button}>

<Text style={styles.buttonText} onPress={this.handleSubmit}>{this.props.type}</Text>

</TouchableOpacity>



</View>


)

}

}



const styles = StyleSheet.create({

container : {

flexGrow: 1,

justifyContent:'center',

alignItems: 'center'

},



inputBox: {

width:300,

backgroundColor:'rgba(255, 255,255,0.2)',

borderRadius: 25,

paddingHorizontal:16,

fontSize:16,

color:'#ffffff',

marginVertical: 10

},

button: {

width:300,

backgroundColor:'#1c313a',

borderRadius: 25,

marginVertical: 10,

paddingVertical: 13

},

buttonText: {

fontSize:16,

fontWeight:'500',

color:'#ffffff',

textAlign:'center'

}



});
