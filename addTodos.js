import React, { useState} from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {UseTextInputMultiline} from './useTextInput'
const Stack = createNativeStackNavigator();
/** Adapted from CS455 University of Regina; Dr. Trevor M. Tomesh

* AddTodo()
* Purpose: adds an item on user input; Does not allow user to add empty strings
* Parameter(s):
* <1>submitHandler
*
* Precondition(s):
* <1> N/A
*
* Returns: TextInput and 'add notes' button
*
* Side effect:
* <1> calls submitHandler
* <2> upon 'add notes' button clicked, the text is entered as an item in the flatlist.
*
*/
export default function AddTodo({submitHandler}){
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style = {styles.input}
        placeholder='add notes'
        onChangeText={changeHandler}
        value = {text}
      />


      
      <Button color='coral' onPress = {()=>{if(text!='') submitHandler(text)}} title = 'add notes'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    },
  });