import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, NativeModules} from 'react-native'
const initialState={
  taskTitle: '',
      taskDesc: '',
      date:''
}
//import t from 'tcomb-form-native';
class Inputs extends Component {
   state = {
      taskTitle: '',
      taskDesc: '',
      date:''
   }
   handleEmail = (text) => {
        if(text === ''){
         console.log("error")
        }
        else{
          this.setState({ taskTitle: text })
          
        }
      
   }
   handlePassword = (text) => {
       if(text === ''){
         console.log("error")
        }
        else{
         this.setState({ taskDesc: text })
         
        }
      
   }
   handleTime = (text) => {
         if(text === ''){
          console.log("error")
        }
        else{
         this.setState({ date: text })
         
        }
      
   }
    login = (taskTitle, taskDesc, date) => {
      //alert('taskId: ' +taskId  + ' desc: ' + taskDesc +'date:'+date)
     e.preventDefault();
     e.target.reset();
      if(taskTitle == "" && taskDesc == "" && date == ""){
        alert("all fields cannot be empty")
      }
      else if(taskTitle == ""){
        alert("task title cannot be empty")
      }
      else if(taskDesc == ""){
        alert("task Description cannot be empty")
      }
      else if(date == ""){
        alert("time cannot be empty")
      }
      else{
        var args = {"taskTitle":taskTitle,"desc":taskDesc,"date":date}
        this.setState(initialState)
        NativeModules.reactNative.invokeKonyCallback("taskList",args);
      }

     
      
      
   }

   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {[styles.input, this.state.validateInput? styles.error:null]}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Task Title."
               placeholderTextColor = "#1e90ff"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {[styles.input, this.state.validateInput? styles.error:null]}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Task description"
               placeholderTextColor = "#1e90ff"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

             <TextInput style = {[styles.input, this.state.validateInput? styles.error:null]}
               underlineColorAndroid = "transparent"
               placeholder = "Schedule Time"
               placeholderTextColor = "#1e90ff"
               autoCapitalize = "none"
               onChangeText = {this.handleTime}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this,this.state.taskTitle, this.state.taskDesc,this.state.date)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      flex: 1,
 
// Set content's vertical alignment.
justifyContent: 'center',
 
// Set content's horizontal alignment.
alignItems: 'center',
 
// Set hex color code here.
backgroundColor: '#FFFFFF',
borderColor: '#1e90ff',
borderWidth: 2,
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#1e90ff',
      borderWidth: 1,
      width:220,
      color:'#1e90ff'
   },
   submitButton: {
      backgroundColor: '#1e90ff',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },
   error:{
    borderColor: 'red',
    borderWidth: 1,
    
   }
})