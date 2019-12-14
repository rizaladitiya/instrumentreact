import React, { Component } from 'react';

import {Router, Stack, Scene, Tabs} from 'react-native-router-flux';


import Login from './pages/Login';

import Home from './pages/Home';

import Signup from './pages/Signup';



export default class Routes extends Component<{}> {

render() {

return(

<Router>

<Stack key="root" hideNavBar={true}>

<Scene key="login" component={Login} title="Login"/>

<Scene key="signup" component={Signup} title="Register"/>

<Scene 
	key="utama" 
	tabs={true}
	hideNavBar
	initial={true}
>
			
                      <Scene
                        key="wiring"
                        component={Home}
                        title="Wiring"
                        //tintColor={Colors.primaryColor}
                        back={false}
                      />
                      <Scene
                        key="joblist"
                        component={Home}
                        title="Joblist"
                        //tintColor={Colors.primaryColor}
                        back={false}
                      />
                      <Scene
                        key="home"
                        component={Home}
                        title="Checklist"
                        //tintColor={Colors.primaryColor}
                        back={false}
                      />
</Scene>

</Stack>

</Router>

)

}

}
