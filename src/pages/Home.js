import React, { Component } from 'react';
import fungsi from '../components/Fungsi';
import {WToast} from 'react-native-smart-tip';

import {

StyleSheet,

Text,

View,

StatusBar ,

TouchableOpacity, 

FlatList

} from 'react-native';




//import Form from '../components/Form';

//import Logo from '../components/Logo';


import {Actions} from 'react-native-router-flux';


export default class Home extends Component<{}> {
	

	componentDidMount() {
		fungsi.checklogin()
		this.hasilProduksi()
	}
	constructor(props) {
		super(props);
		this.state = {
			hasilProduksi: []
		}
		this.hasilProduksi=this.hasilProduksi.bind(this);
	  }
	
	  
	  



	
			/*
		contents = this.state.hasilProduksi.map(function (item) {
			return (
				<View key={item.pm}>
				<Text>{item.mutu}</Text>
				</View>
			);
			});
			*/
		goBack() {

			fungsi.deleteItem('user');
			
			Actions.login();
			
			}
		
		hasilProduksi() {
			const tanggal = "2019-12-17"
				fetch('http://36.67.32.45:898/api/barang/hasilprodtotal/'+tanggal
				).then((response) => response.json())
				.then((responseData) => { 
					console.log("response: " + JSON.stringify(responseData)); 
						this.setState({hasilProduksi:responseData});
					})
				.catch((err) => { console.log(err); 
				});

		}
		FlatListItemSeparator = () => {
			return (
				//Item Separator
				<View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
			);
			};
		GetItem(item) {
		//Function for click on an item
		WToast.show({data: item})
		}
			
render() {
	const data = [1, 2, 3, 4, 5];
return(

<View style={styles.container}>

<FlatList
          data={this.state.hasilProduksi}
          //data defined in constructor
          ItemSeparatorComponent={this.FlatListItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View>
              <Text
                style={styles.item}
                onPress={this.GetItem.bind(this, 'Id : '+item.pm+' Value : '+item.jumlah)}>
                {item.jumlah}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

<View style={styles.signupTextCont}>

<Text style={styles.signupText}></Text>

<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Logout</Text></TouchableOpacity>


</View>


</View>

)

}

}



const styles = StyleSheet.create({

container : {

backgroundColor:'#455a64',

justifyContent: 'center',

flex: 1,

},

signupTextCont : {

flexGrow: 1,

alignItems:'flex-end',

justifyContent :'center',

paddingVertical:16,

flexDirection:'row'

},

signupText: {

color:'rgba(255,255,255,0.6)',

fontSize:16

},

signupButton: {

color:'#ffffff',

fontSize:16,

fontWeight:'500'

},

item: {
    padding: 10,
    fontSize: 18,
    height: 44,
},


});