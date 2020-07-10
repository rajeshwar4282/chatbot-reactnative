import React from 'react';
import { View ,Text,Image,Button,StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import ChatBot from 'react-native-chatbot';
import * as Application from 'expo-application';

export default class App extends React.Component{
state = {
    image:'https://cdn.eso.org/images/thumb300y/eso1907a.jpg',
    androidid: Application.androidId
  }
render(){
const steps = [
  {
    id: '0',
    message: 'welcome to react-chatbot ',
    trigger: '1',
  },
  {
    id: '1',
    message: 'say hello to start the conversation! ',
    trigger: '2',
  },
  {
    id: '2',
    user:true,
    trigger: '2.5',
  },
  {
    id: '2.5',
    options:[
      {value:1,label:'displaying componets in chatbot ',trigger:'3'},
      {value:2,label:'calling functions in chatbot',trigger:'10'},
      {value:3,label:'exit',trigger:'9'},
    ],  
  },
  {
    id: '10',
    options:[
      {value:1,label:'Getting your android Id ',trigger: '11'},
      {value:2,label:'Launch camera',trigger:()=>{
        ImagePicker.launchCameraAsync();
        return '2.5';
      }
    },
    ],  
  },
  {
    id:'11',
  component:<Text>{this.state.androidid}</Text>,
   trigger:'2.5'
  },
  {
    id: '3',
    options:[
      {value:1,label:'Text ',trigger:'4'},
      {value:2,label:'Image',trigger:'5'},
      {value:3,label:'Button',trigger:'6'},
    ],  
  },
  {
    id:'4',
    component:<Text>rajeshwar4282</Text>,
    trigger:'2.5',

  },
  {
    id:'5',
    component:<Image style={{height:100,width:100}} source={{uri:this.state.image}}/>,
    trigger:'2.5',
  },
  {
    id:'6',
    component:<Button title="button"></Button>,
    trigger:'2.5',
  },
  {
    id:'7',
    message:'continue?',
    trigger:'8',
  },
  
  {
    id:'8',
    options:[
      {value:1,label:'yes ',trigger:'3'},
      {value:2,label:'no ',trigger:'9'}
    ],  
  },
  {
    id:'9',
    message:'Thank you!',
    end:true,
  }
];
console.warn = () => {};
let { image } = this.state;
  return(
    <View style={{flex:1,marginTop:20}}>
      <ChatBot steps={steps} />
    </View>
  );

  }
}
