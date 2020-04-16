import React,{Component,useState} from 'react';
import {View,Button,Text,StyleSheet,AsyncStorage,TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
import sample from '../db/data.json';
import {Input} from 'react-native-elements'
import Spacer from '../components/Spacer';


export default class DisplayScreen extends Component {
    constructor(props)
    {
      super(props)
      this.state={
        loading:true,
        dataSource:[],
        };

    }
    
    componentDidMount(){
        {fetch('https://my-json-server.typicode.com/SadhanaSrinivasan/JSONServer/users')
        .then(response => response.json())
        .then((json) => {
            this.setState({
                loading:false,
                dataSource:json
            })   
            console.log("Hey sadhs this iw what orues earching for",this.state.dataSource) 
        })
        .catch(error=>console.log(error))
        } 
    } 
    renderItem=(data)=>
        <TouchableOpacity style={styles.list}>
            <Spacer>
            <Text>{data.item.name} || {data.item.dob} || {data.item.gender} || {data.item.experience}</Text>
            </Spacer>
        </TouchableOpacity>
    
    render(){
        if(this.state.loading){
            return(
                <View>
                    <ActivityIndicator size="large" color="#0c9"/>
                    {console.log(this.state.dataSource)}
                </View>
            )
        }
        return (
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
    };
}

const styles=StyleSheet.create({
    lightText:{

    }
});
