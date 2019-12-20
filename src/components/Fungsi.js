
import {WToast} from 'react-native-smart-tip'

import {Actions} from 'react-native-router-flux';
import {
AsyncStorage
} from 'react-native';

import md5 from 'md5';
const fungsi = {
    checklogin: function(){
		var user = fungsi.getItem('user')
		if(user==""){
			Actions.login()
		}
    },
    async hasilprod(tanggal){
		/*
		fetch('http://36.67.32.45:898/api/barang/hasilprodtotal/'+tanggal
		).then((response) => response.json())
		  .then((responseData) => { 
			//console.log("response: " + JSON.stringify(responseData)); 
				return responseData;
			})
		  .catch((err) => { console.log(err); 
		});
		*/
		const response = await fetch("http://36.67.32.45:898/api/barang/hasilprodtotal/"+tanggal, {});
		const json = await response.json();
		//console.log("response: " + JSON.stringify(json)); 
		return JSON.stringify(json)
    },
	async saveItem(item, selectedValue) {
		try {
		  await AsyncStorage.setItem(item, selectedValue);
		} catch (error) {
		  console.error('AsyncStorage error: ' + error.message);
		}
	},
	async deleteItem(item) {
		try {
		  await AsyncStorage.removeItem(item);
		} catch (error) {
		  console.error('AsyncStorage error: ' + error.message);
		}
	},
	async getItem(item){
		try {
			AsyncStorage.getItem(item).then((value) => {
				//this.setState({"message": value});
				//WToast.show({data: value})
				return value;
			})
			.then(res => {
				//do something else
				//WToast.show({data: value})
			});
		} catch (error) {
		  console.error('AsyncStorage error: ' + error.message);
		}
	},
    login: function(user,password){
		const formData = new FormData()
		formData.append('user', user);
		formData.append('password', md5(password));
		fetch('http://36.67.32.45/buanamegah/login/login', {
		  method: 'POST',
			headers: { 
			'Content-Type': 'multipart/form-data'
			},
			body: formData
		}).then((response) => response.json())
		  .then((responseData) => { 
			console.log("response: " + responseData.status); 
				if(responseData.status=="success"){
					this.saveItem('user',responseData.user)
					Actions.utama()
				}else{
					WToast.show({data: "Periksa User Kembali"})
				}
				this.getItem("user");
			})
		  .catch((err) => { console.log(err); 
		});
		 
    }
}

export default fungsi;