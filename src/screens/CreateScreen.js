import React,{useState} from 'react';//use Stae is a hook read more abt it
import {View,StyleSheet,Alert,ActivityIndicator,TouchableOpacity,FlatList} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import DropDownGender from '../components/DropDownGender'
import DatePickComp from '../components/DatePicker'
//import {Dropdown} from 'react-native-material-dropdown';


const user={name:"",
dob:"",
gender:"",
experience:""}

const renderItem=(data)=>
        <TouchableOpacity style={styles.list}>
            <Spacer>
            <Text>{data.item.name} || {data.item.dob} || {data.item.gender} || {data.item.experience}</Text>
            </Spacer>
        </TouchableOpacity>


const CreateScreen=({navigation})=>{
    const [name,setName]=useState('');
    const [exp,setExp]=useState('');
    const [dob,setDobb]=useState('');
    const [gender,setGender2]=useState('');
    const [submitted,setSubmitted]=useState(false);
    const [pressDispAllUsers,setpressDispAllUsers]=useState(false);
    const [loading,setLoading]=useState(false)
    const [dataSource,setDataSource]=useState([]);
    
    const setGender=(value)=>{
        //console.log(value,user);
        //this.setState({gender:value})
        setGender2(value);
        
    }
    const setDate=(date)=>{
       //console.log(user);
        setDobb(date);
    }
    if(pressDispAllUsers){
        return<View>
            <Text style={{fontSize:18, color:'rgb(84, 190, 160)', fontWeight:'bold', textAlign:'center'}}>Current List of Users:</Text>
            <FlatList 
            data={dataSource}
            renderItem={item=>renderItem(item)}
            keyExtractor={item=>item.name}        
        ></FlatList>
        <Spacer>
            <Text>{user.name} || {user.dob} || {user.gender} || {user.experience}</Text>
        </Spacer>
        </View>
    }

    if(loading){
        fetch('https://my-json-server.typicode.com/SadhanaSrinivasan/JSONServer/users')
                .then(response => response.json())
                .then((json) => {
                    console.log(json)
                    setDataSource(json)
                    console.log(dataSource)
                    setpressDispAllUsers(true)
                    setLoading(false)
                    })

        return(
            <View>
                <ActivityIndicator size="large" color="#0c9"/>    
            </View>
        )
    }
    
    if(submitted)
        return(
            <View>
                <View>
                    <Spacer><Text style={{fontSize:20, margin:10}}>User Details:</Text></Spacer> 
                    <Spacer><Input placeholderTextColor="black" label="Name" placeholder={user.name} ></Input></Spacer>
                    <Spacer><Input placeholderTextColor="black" label="Date of Birth" placeholder={user.dob} ></Input></Spacer>
                    <Spacer><Input placeholderTextColor="black" label="Gender:" placeholder={user.gender} ></Input></Spacer>
                    <Spacer><Input placeholderTextColor="black" label="Experience:" placeholder={user.experience} ></Input></Spacer>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>{//setLoading(true)
                        console.log("once ok was pressed")
                        setLoading(true)}
                    }>
                                <Text style={styles.textButton}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    return (<View style={styles.container}>
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
                            setSubmitted(true);
                            
                            //navigation.navigate("DisplaySingleContent")
                        }
                     }
                    ],
                    { cancelable: false });
                }
            }/> 
        </Spacer>                
        </View>)
};

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
    },
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
    textButton:{
        fontSize:20,
        color:'white',
        padding:10
        }
});

export default CreateScreen;
