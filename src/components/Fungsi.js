
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
    helper2: function(param1){

    },
	async saveItem(item, selectedValue) {
		try {
		  await AsyncStorage.setItem(item, selectedValue);
		} catch (error) {
		  console.error('AsyncStorage error: ' + error.message);
		}
	},
	async getItem(item){
	AsyncStorage.getItem(item).then((value) => {
		//this.setState({"message": value});
		WToast.show({data: value})
		return value;
	})
	.then(res => {
		//do something else
		//WToast.show({data: value})
	});
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
				}
				this.getItem("user");
				//WToast.show({data: responseData})
			})
		  .catch((err) => { console.log(err); 
		});
		 
    }
}

export default fungsi;