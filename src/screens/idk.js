import React,{Component,useState} from 'react';
import {View,TextInput,Button,StyleSheet,AsyncStorage,TouchableOpacity, ActivityIndicator, FlatList,Text} from 'react-native';
import sample from '../db/data.json';
import Spacer from '../components/Spacer';
//import {Input} from 'react-native-elements'


export default class EditScreen extends Component {
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
        buttonPressed:false
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
    //setSearchResult=(temp)=>{}

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
   
    render(){
        if(this.state.loading){
            return(
                <View>
                    <ActivityIndicator size="large" color="#0c9"/>
                    {//console.log(this.state.dataSource)
                    }
                </View>
            )
        }
        else if(this.state.buttonPressed){
            const tuser={
                name:'',
                dob:"",
                experience:"",
                gender:""
            }
            this.state.searchResult.map(function(item){
                tuser.dob=item.dob
                tuser.name=item.name
                tuser.experience=item.experience
                tuser.gender=item.gender
            })
            if(tuser.name!=''){
                return(<View>
                <Spacer><Text style={{fontSize:30,color:'black'}}>Here's your result!</Text></Spacer>
                <Spacer><Text style={{fontSize:25,color:'black'}}>Name:</Text>
                <Text style={{fontSize:18}} >{tuser.name}</Text>
                </Spacer> 
                <Spacer><Text style={{fontSize:25,color:'black'}}>Dob:</Text>
                <Text style={{fontSize:18}}>{tuser.dob}</Text> 
                </Spacer>
                <Spacer><Text style={{fontSize:25,color:'black'}}>Gender:</Text>
                <Text style={{fontSize:18}}>{tuser.gender}</Text> 
                </Spacer>
                <Spacer>
                <Text style={{fontSize:25,color:'black'}}>Work Experienxe:</Text>
                <Text style={{fontSize:18}}>{tuser.experience}</Text> 
                </Spacer>
                {   
                console.log(this.state.searchResult,tuser)}
                </View>
            )}
            else{
                return <View>
                <Spacer><Text style={{fontSize:30,color:'black'}}>No such user!</Text></Spacer></View>
            }
        }
        return (
        <View>
        <TextInput label="Name" placeholder="Enter Name Here" onChangeText={this.handleName} onSubmitEditing={this.finalName} style={styles.input}/>
  
        <Button title="Click to Find User" onPress={this.tryingMap}/>    
            
        </View>
        )
    };
}

const styles=StyleSheet.create({
    input: {
        margin: 15,
        height: 50,
        borderColor: '#736C6C',
        borderWidth: 1,
        padding:10
     }
});
