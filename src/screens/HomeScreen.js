import React from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen=({navigation})=>{
    return <View style={styles.view}>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('Create')}
        >
                <Text style={styles.text} >Create User</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('Search')}
        >
                <Text style={styles.text} >Search for User</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('Edit')}
        >
                <Text style={styles.text} >Edit User</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('Delete')}
        >
                <Text style={styles.text} >Delete User</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('Display')}
        >
                <Text style={styles.text} >Display All Records</Text>
        </TouchableOpacity>
        <Button title="Temporary Search Screen"  onPress={()=>navigation.navigate('tempSearch')}></Button>
        {//<Button title="Temporary Screen"  onPress={()=>navigation.navigate('Temp')}></Button>
        }
        </View>
};

const styles=StyleSheet.create({
    button:{
        margin:20,
        backgroundColor:'rgb(84, 190, 160)',
        textAlign:"center",
        fontSize:12,
        alignSelf:"center",
        height:70,
        width:300,
        alignItems :'center',
        padding:10
    },
    text:{
        fontSize:20,
        color:'white',
        padding:10
        },
    view:{/*alignItems:"center",
    flexDirection:"column",
    justifyContent:"space-around",*/
        margin:20,
        paddingVertical:80
        }
});

export default HomeScreen;