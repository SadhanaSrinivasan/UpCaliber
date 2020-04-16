import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

const data=[{
    value:'Female'
},{
    value:'Male'
},{
    value:'Trans'
},{
    value:'Choose not to reveal'
}];

const DropDownGender=({onChangeHandler})=>{
    return <Dropdown 
        label='Gender'
        data={data}
        labelFontSize={17}
        containerStyle={styles.drop}
        textColor='black'//'#2C2020'
        baseColor='#736C6C'
        onChangeText={(value)=>onChangeHandler(value)}
    />
}


const styles = StyleSheet.create({
    drop:{
        padding: 10
    }
});


export default DropDownGender;