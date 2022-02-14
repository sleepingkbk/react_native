/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import{TextInput,View, Text,StyleSheet, ScrollView,Button,Image} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Tower from './assets/images/tower.jpg'
import Modal from './src/modal'

class App extends Component{
  state = {
    myTextInput:'',
    alphabet:['a','b','c','d']
}

onChangeInput =(event)=>{
  this.setState({
    myTextInput: event
  })

}

   onAddTextInput = (e) => {
     this.setState(prevState =>{
       return{
         myTextInput:'',//빈값으로 업데이트
         alphabet:[...prevState.alphabet,prevState.myTextInput]//빈값이 되었으니 이전값 넣어주기
}
       
     })
   }


  render(){
    return(
      <View style={styles.mainView}>
        <Modal/>
        
      </View>
    )
      

    
  }
}

const styles = StyleSheet.create({
  mainView:{
    backgroundColor: 'white',
        flex:1,
        paddingTop:50,
        alignItems:'center',
        //justifyContent:'center'
      },
  subView:{
    
    backgroundColor:'yellow',
    marginBottom:10,
    
  },
  anotherSubView:{
    flex:2,
    backgroundColor:'yellow',
    marginBottom:10,
    width:'100%',
    alignItems:'center',
    justifyContent:'center' 
  } ,
  mainText:{
    fontSize:20,
    fontWeight:'normal',
    color:'red',
    padding:20,
    margin: 20,
    backgroundColor:'pink'
  },
  input:{
    width:'100%',
    backgroundColor:'#cecece',
    marginTop: 20,
    fontSize: 25,
    padding:10
  },
  Image:{
    backgroundColor:'red',
    width:'100%',
    height:700
  }
})




  

export default App;
