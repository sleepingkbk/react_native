/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{Component} from 'react';
 import{View, Text,Button,Modal} from 'react-native';

 
 class ModalComponent extends Component{
     state = {
         modal: false

     }
     handleModal = ()=> {
        this.setState({
            modal: this.state.modal ? false : true
            })
     }

  render(){
     return(

       <View style={{ width:'100%'}}>
           <Button
            title='Open Modal'
            onPress={this.handleModal}
           
           />
           <Modal
           visible={this.state.modal}
           animationType={'slide'}//none,slide,fade
           onShow={()=>alert('warning')}
           >
               <View style={{
                   marginTop: 60,
                   backgroundColor: 'red'
               }}>
                   <Text>
                       this is modal content
                   </Text>
               </View>
               <Button
            title='go back'
            onPress={this.handleModal}
           />
           </Modal>
       </View>
    
     )     
   }
 }
 

 
 
 export default ModalComponent;