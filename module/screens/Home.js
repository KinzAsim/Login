import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {StyleSheet, View, Text} from 'react-native';
import setting from './Setting';


export default class home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(          
            <View style={styles.container}>
            <Text>Partner</Text>          
            <Drawer.Navigator initialRouteName="Setting">
              <Drawer.Screen name="Home" component={home} />
              <Drawer.Screen name="Setting" component={setting} />
            </Drawer.Navigator>
            </View>
            );
    }
    
}
const Drawer = createDrawerNavigator();
const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        flex:1
    }
})