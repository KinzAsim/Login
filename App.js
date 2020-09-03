/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from './module/screens/Home';
import setting from './module/screens/Setting';
import Icon from 'react-native-vector-icons/AntDesign';



export default class tab extends React.Component{
            constructor(props){
              super(props);              
            }

            render(){
              return(
                <NavigationContainer>
                <Tab.Navigator
                 screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Home') {
                      iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                      iconName = focused ? 'ios-list-box' : 'ios-list';
                    }
        
                    // You can return any component that you like here!
                    return <Icon 
                    name="home" 
                    size={20} 
                    color="#000" />;
                  },
                })}
                tabBarOptions={{
                  activeTintColor: 'tomato',
                  inactiveTintColor: 'gray',
                }}>
                  <Tab.Screen name="Home" component={home} />
                  <Tab.Screen name="Setting" component={setting} />
                </Tab.Navigator>
              </NavigationContainer>


                );

            }

}

const Tab = createBottomTabNavigator();



