import React,{useState} from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar'

const TemporarySearchScreenDisplay=()=>{
    const [term,setTerm]=useState('');
    return <View>
        <SearchBar 
            term={term} 
            onTermChange={newTerm=>setTerm(newTerm)}
            onTermSubmit={()=>console.log("Term was submitted")}/>
        <Text>Search screen</Text>
        <Text>{term}</Text>
        </View>
};

const styles=StyleSheet.create({});

export default TemporarySearchScreenDisplay;