import React from 'react';
import {View,Button,TextInput,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=({term,onTermChange,onTermSubmit})=>{
    return <View style={styles.background}>
        <Feather name='search' style={styles.iconStyle}/>
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search" 
            style={styles.inputStyle}
            value={term}
            onChangeText={newTerm=>onTermChange(newTerm)}//or {pnTermChange}
            onEndEditing={()=>onTermSubmit()}//or {onTermSubmit}
        />
        </View>
};

const styles=StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        height: 50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection: 'row'
    },
    inputStyle:{
    
        flex:1,
        //marginHorizontal:5,
        fontSize:18,
        marginHorizontal:10
    },
    iconStyle:{
        fontSize:35,
        marginHorizontal: 0,
        alignSelf:'center'
    }
});
//for search icom=n or any icon goto expo/vector-icons directoy Git and you can find  a bunch of icons
export default SearchBar;