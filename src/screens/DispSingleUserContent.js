import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import user from './CreateScreen'

const DispSingleUserContent=()=>{
    return <View>
        <Text>Displaying the single user ocntent</Text>
        <Text>{user.name}</Text>
        </View>
};

const styles=StyleSheet.create({});

export default DispSingleUserContent;