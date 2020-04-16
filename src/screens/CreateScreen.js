import React,{useState} from 'react';//use Stae is a hook read more abt it
import {View,StyleSheet,Alert} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import DropDownGender from '../components/DropDownGender'
import DatePickComp from '../components/DatePicker'
//import {Dropdown} from 'react-native-material-dropdown';


const user={name:"",
dob:"",
gender:"",
experience:""}


const CreateScreen=({navigation})=>{
    const [name,setName]=useState('');
    const [exp,setExp]=useState('');
    const [dob,setDobb]=useState('');
    const [gender,setGender2]=useState('');
    const submitted=false;

    
    const setGender=(value)=>{
        //console.log(value,user);
        //this.setState({gender:value})
        setGender2(value);
        
    }
    const setDate=(date)=>{
       //console.log(user);
        setDobb(date);
    }

    return <View style={styles.container}>
        <Spacer>
            <Text h4>  Add a User</Text>
        </Spacer>
        <Spacer>
            <Input label="Name" value={name} onChangeText={setName}/>
        </Spacer>
        <Spacer/>
            <Text style={styles.textStyle}>Date of Birth</Text>
        <Spacer/>
            <DatePickComp onDateHandler={setDate}/>
        <Spacer>
            <DropDownGender onChangeHandler={setGender}/>
        </Spacer>
        <Spacer>
            <Input label="Professional Experience" value={exp} onChangeText={setExp}/>
        </Spacer>
        
        <Spacer>
            <Button title="Add User" onPress={()=>{
                Alert.alert(
                    "Creating User",
                    "Are you sure you want to create the user?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => {
                            console.log("OK Pressed")
                            user.name=name;
                            user.experience=exp;
                            user.gender=gender;            
                            user.dob=dob;                
                            console.log(user);
                            navigation.navigate("DisplaySingleContent")
                        }
                     }
                    ],
                    { cancelable: false });
                }
            }/> 
        </Spacer>                
        </View>
};


const createTwoButtonAlert = () =>
    Alert.alert(
      "Creating User",
      "Are you sure you want to create the user?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

const styles=StyleSheet.create({
    rbContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:100
    },
    textStyle:{
        fontSize:17,
        color:'#736C6C',
        fontWeight:'bold',
        marginLeft:25
    }
});

export default CreateScreen;
