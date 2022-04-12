import React, {useState} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ScrollView,ImageBackground} from 'react-native';
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
necessary requirements. Includes background
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
  const image = { uri: "https://i.ibb.co/C6PBB9r/image.png" };

  return(

    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
      </ImageBackground>
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
* Returns: Details screen for the note/task UI with the initial list. includes camera, background
*
* Side effect:
* <1> list on todo and has buttons to go to home, backscreen and open camera screen 
*
*/
function DetailsScreen({navigation,item}){
  const imageBack = { uri: "https://i.ibb.co/C6PBB9r/image.png" };

  const[text, setText] = React.useState("");
  return(

    <View style={styles.container}>
      <ImageBackground source={imageBack} resizeMode="cover" style={styles.image}>
    <View style={{ flex: 5, justifyContent: 'center'}}>
       
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
    </ImageBackground>
    </View>
  
  )
}


/*     
create stack for screens
**/
const Stack = createNativeStackNavigator();


/**
* App()
* Purpose: It will work as the navigator, the main task of the app
* Parameter(s):
* <1>N/A
*
* Precondition(s):
* navigation stack, NavigationContainer, createNativeStackNavigator
*
* Returns: Homescreen as the initialRoute, other screens accessed 
through other buttons in other functions
*
* Side effect:
* <1> N/A
*
*/
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


/**
* styles
* Purpose: container for navigation screen; image for the background image
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
