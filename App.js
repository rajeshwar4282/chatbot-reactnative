import React from 'react';
import { View } from 'react-native';
import ChatBot from 'react-native-chatbot';
 
const steps = [
  {
    id: '0',
    message: 'welcome to cardpay assistant ',
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
    trigger: '3',
  },
  {
    id: '3',
    options:[
      {value:1,label:'1.payment related issue ',trigger:'4'},
      {value:2,label:'2.knowing how to use cardpay!',trigger:'5'},
    ],  
  },
  {
    id:'4',
    message:'ok',
    end:true,

  },
  {
    id:'5',
    message:'let me explain',
    end:true,
  }
];
console.warn = () => {};

export default class App extends React.Component{

  render(){
  return(
    <View style={{flex:1,marginTop:20}}>
      <ChatBot steps={steps} />
    </View>
  );

  }
}
