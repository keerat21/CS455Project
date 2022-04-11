import React, {useState} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ScrollView,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoItem from './todoItem';
import AddTodo from './addTodos';
import TList from './ListRender';
import CameraWork from './camera';
import { Camera } from 'expo-camera';

/**
* HomeScreen
* Purpose: Make Screen for Home/calculator, including all the buttons and
necessary requirements
* Parameter(s):
* <1>Navigation
*
* Precondition(s):
* navigation stack, NavigationContainer, createNativeStackNavigator
*
* Returns: homepage UI with the initial list
*
* Side effect:
* <1> manipulations on main screen
*
*/
function HomeScreen({navigation,item}){
  

  return(
    <View style={{flex: 1, justifyContent: 'center' }}>
      <ScrollView>
      <View>
    <TList style={{flex: 1}}/>
    </View>
    <View style={{flex: 1}}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={()=> navigation.navigate('Details')} />

      </View>
      </ScrollView>
      </View>
  


  );
};

/**
* DetailsScreen
* Purpose: It will render the list of tasks
necessary requirements
* Parameter(s):
* <1>Navigation
*
* Precondition(s):
* navigation stack, NavigationContainer, createNativeStackNavigator
*
* Returns: Details screen for the note/task UI with the initial list. includes camera
*
* Side effect:
* <1> list on todo and has buttons to go to home, backscreen and open camera screen 
*
*/
function DetailsScreen({navigation,item}){


  const[text, setText] = React.useState("");
  return(

    
    <View style={{ flex: 5, justifyContent: 'center', backgroundColor: '#ff1'}}>
      <ScrollView>
      <View style={{ flex: 4, justifyContent: 'center'}}> 
    <TList style={{flex: 1}}/>
    </View>
    <View style={{ flex: 1, justifyContent: 'center'}}>
    <Text>NewTask Screen</Text>

    <TextInput
    label ="input"
    value = {text}
    onChangeText = {text => setText(text)}
    />

    <Button 
      title="Restart!"
      onPress={()=>navigation.navigate('Home')} />

          <Button 
      title="back"
      onPress={()=>navigation.goBack()} />


<TouchableOpacity 
  style={{ borderWidth:1,
    borderColor:'powderblue',

    width:100,

    backgroundColor:'powderblue',
    
    borderRadius:100,
  }}
  >
  <Button borderradius='50'  onPress={()=>navigation.navigate('camera')}  style={{shadowColor: false, borderColor:'powderblue', marginVertical:20, alignItems:'center'}} title='Camera' color="black"/>
</TouchableOpacity>

</View>
</ScrollView>
    </View>
  
  )
}



const Stack = createNativeStackNavigator();

export default function App(){



  return (

    <NavigationContainer style={{marginBottom: 120}}> 
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="Home" component ={HomeScreen} />
        <Stack.Screen name="camera" component ={CameraWork} />

        
      </Stack.Navigator>

    </NavigationContainer>

        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});
