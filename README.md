     CHATBOT IN REACTNATIVE

<img src="https://miro.medium.com/max/4000/1*m9IJdAYW04MYh75ivpwUNA.png" width="300" height="230">
   
1.INSTALLING DEPENDENCIES FOR CHATBOT
  To build a chatbot in react native we have to install few dependencies 
             
         npm install react-native-chatbot
         
2.CODING FOR CHATBOT
 
         /App.js
         
   BASIC STRUCTURE FOR STEPS IN REACT-NATIVE-CHATBOT,
   
            {
             id:'1',
             message:'hello world',
            trigger:'2'
             }
   ID: it means the unique id for a step in chatbot,<br>
   MESSAGE: it means the data that should be displayed for that id,<br>
   TRIGGER: it means which step should be dispalyed after the showing of message or completion of this step.<br>

      Displaying components using chatbot
   STRUCTURE OF CHATBOT STEP TO DISPLAY COMPONENTS,
   
          {
         id:'1',
        component:<Text> hello world</Text>,
        trigger:'2'
        }     
   (Note:even you can both message and component at a time)
   
         Function call in react-native-chatbot
   STRUCTURE OF THE CHATBOT STEP TO CALL A FUNCTION,
   
         {
         id:'1',
         message:'hello world';
         trigger:()=>{
         console.log('calling a function')
         }   
    
    
3.RUNNING THE APP
      
        npm start
        
  <img src="images/1.png"  width="250" height="500" > &nbsp;&nbsp;<img src="images/2.png"  width="250" height="500" >&nbsp;&nbsp; <img src="images/3.png"  width="250" height="500">
  
  
 <img src="images/4.png"  width="250" height="500" > &nbsp;&nbsp;<img src="images/5.png"  width="250" height="500" >&nbsp;&nbsp; <img src="images/6.png"  width="250" height="500">
  
 <img src="images/7.png"  width="250" height="500" > &nbsp;&nbsp;<img src="images/9.png"  width="250" height="500" >&nbsp;&nbsp; <img src="images/8.png"  width="250" height="500">
  <img src="images/10.png"  width="250" height="500" >
  
