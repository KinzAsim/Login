import React from 'react';
import{ StyleSheet, View, Text } from 'react-native';


export default class setting extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>Kinza</Text>
                {/* <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} /> */}
            </View>

            );
    }
    
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        flex:1
    }
})