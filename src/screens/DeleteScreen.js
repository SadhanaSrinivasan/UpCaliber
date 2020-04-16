import React,{Component,useState} from 'react';
import {View,TextInput,Button,StyleSheet,AsyncStorage,TouchableOpacity, ActivityIndicator, FlatList,Text,Alert} from 'react-native';
import sample from '../db/data.json';
import Spacer from '../components/Spacer';
import {Input} from 'react-native-elements'

const tuser={
    name:'',
    dob:"",
    experience:"",
    gender:""
}
inputSetName=(text)=>{
    tuser.name=text
    console.log("In setname",tuser)
}
inputSetDob=(text)=>{
    tuser.dob=text
    console.log("after setting dob",tuser)
}
inputSetGender=(text)=>{
    tuser.gender=text
    console.log("After gender",tuser)
}
inputSetExperience=(text)=>{
    tuser.experience=text
    console.log("After experience",tuser)
}
export default class DeleteScreen extends Component {
    constructor(props)
    {
      super(props)
      this.state={
        loading:true,
        dataSource:[],
        name:'',
        searchResult:[{
            name:'',
            dob:'',
            gender:'',
            experience:''
        }],
        submitted:false
        };

    }
    handleName=(text)=>{
        this.setState({name:text})
    }
    finalName=()=>{
        console.log(this.state.name)
    }
    
    componentDidMount(){
        {fetch('https://my-json-server.typicode.com/SadhanaSrinivasan/JSONServer/users')
        .then(response => response.json())
        .then((json) => {
            this.setState({
                loading:false,
                dataSource:json
                //console.log(dataSource)
            })    
        })
        .catch(error=>console.log(error))     
        } 
    } 

    createTwoButtonAlert = () =>
    Alert.alert(
      "Delete User",
      "Are you sure you want to delete this user?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: this.commitDelete }
      ],
      { cancelable: false }
    );

    commitDelete=()=>{
        const temp = this.state.dataSource.filter(item => item.name !== tuser.name);
        this.setState({ dataSource: temp });
        console.log(this.state.dataSource)
        this.setState({
            submitted:true
        })
        fetch('https://my-json-server.typicode.com/SadhanaSrinivasan/JSONServer/users', {
            method: 'POST',
            body: JSON.stringify({
                firstParam:this.state.dataSource,
                //secondParam: 'yourOtherValue',
            }),
        });
        console.log("submitted",this.state.dataSource)
    }

    tryingMap=()=>{
            const tempname=this.state.name;
            const temp=this.state.dataSource.filter(function(item){
            if(item.name==tempname)
                {
                    console.log(item.name,item.dob)
                    return item
                }
        })
        console.log(temp)
        this.setState({
            searchResult:temp,
            buttonPressed:true
        })
        console.log("Hi after setting serch result, search result is ",this.state.searchResult,this.state.buttonPressed)
    }
    renderItem=(data)=>
        <TouchableOpacity style={styles.list}>
            <Spacer>
            <Text>{data.item.name} || {data.item.dob} || {data.item.gender} || {data.item.experience}</Text>
            </Spacer>
        </TouchableOpacity>
       
    render(){
        if(this.state.loading){//Case 1 when data is being collected for wait symbol
            return(
                <View>
                    <ActivityIndicator size="large" color="#0c9"/>
                    {//console.log(this.state.dataSource)
                    }
                </View>
            )
        }
        if(this.state.submitted){//if delete is done is commited
            return(
                <View>
                    <Text></Text>
                    <Text style={{fontSize:18, color:'rgb(84, 190, 160)', fontWeight:'bold', textAlign:'center'}}>Current List of Users:</Text>
                    <FlatList 
                        data={this.state.dataSource}
                        renderItem={item=>this.renderItem(item)}
                        keyExtractor={item=>item.name}        
                    ></FlatList>  
                    {console.log("Here's the name to search"+this.state.dataSource)
                    //<Button title="Click to try random things" onPress={this.tryingMap}/>  
                    }      
                </View>
            )
     }
         if(this.state.buttonPressed){//when name is entered  as search for editing
                this.state.searchResult.map(function(item){
                    tuser.dob=item.dob
                    tuser.name=item.name
                    tuser.experience=item.experience
                    tuser.gender=item.gender
                })
                if(tuser.name!=''){//if name was found while searching
                    return(
                        <View>
                            <Spacer><Text style={{fontSize:20, margin:10}}>User Details:</Text></Spacer> 
                            <Spacer><Input placeholderTextColor="black" label="Name" placeholder={tuser.name} ></Input></Spacer>
                            <Spacer><Input placeholderTextColor="black" label="Date of Birth" placeholder={tuser.dob} ></Input></Spacer>
                            <Spacer><Input placeholderTextColor="black" label="Gender:" placeholder={tuser.gender} ></Input></Spacer>
                            <Spacer><Input placeholderTextColor="black" label="Experience:" placeholder={tuser.experience} ></Input></Spacer>
                            <TouchableOpacity 
                                style={styles.button}
                                onPress={this.createTwoButtonAlert}
                            >
                                <Text style={styles.textButton}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                else{//if no name was found while searching
                     return <View>
                        <Spacer><Text style={{fontSize:30,color:'black'}}>No such user!</Text></Spacer></View>
                    }
         }
        return (//normal first  screen
        <View>
        <TextInput label="Name" placeholder="Enter Name Here" onChangeText={this.handleName} onSubmitEditing={this.finalName} style={styles.input}/>
        <Text style={{fontSize:18, color:'rgb(84, 190, 160)', fontWeight:'bold', textAlign:'center'}}>Current List of Users:</Text>
        <FlatList 
                        data={this.state.dataSource}
                        renderItem={item=>this.renderItem(item)}
                        keyExtractor={item=>item.name}        
                    ></FlatList> 
        <TouchableOpacity 
            style={styles.button}
            onPress={this.tryingMap}
        >
                <Text style={{
                    fontSize:20,
                    color:'white',
                    padding:10,
                    textAlign:'center'}}>
                        Select User</Text>
        </TouchableOpacity>
        {//<Button title="Click to Find User to delete" onPress={this.tryingMap}/>    
    }
        </View>
        )
    }
}

const styles=StyleSheet.create({
    input: {
        margin: 15,
        height: 50,
        borderColor: '#736C6C',
        borderWidth: 1,
        padding:10
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
