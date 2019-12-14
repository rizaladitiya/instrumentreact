/**

* Sample React Native App

* https://github.com/facebook/react-native

* @flow

*/



import React, { Component } from 'react';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
'Warning: componentWillMount is deprecated',
'Warning: componentWillReceiveProps is deprecated',
'Warning: componentWillUpdate is deprecated',
]);
import {

StyleSheet,

View,

StatusBar

} from 'react-native';





import Routes from './src/Routes';





export default class App extends Component<{}> {

constructor(props){
    super();
    this.state={
	
    }
  }
render() {
	console.disableYellowBox = true;
return (

<View style={styles.container}>

<StatusBar

backgroundColor="#1c313a"

barStyle="light-content"

/>

<Routes/>

</View>

);

}

}



const styles = StyleSheet.create({

container : {

flex: 1,

}

});