import React from 'react'
import {StyleSheet, View, Animated,  Text, Pressable, Vibration} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/** Adapted from CS455 University of Regina; Dr. Trevor M. Tomesh

* TodoItem()
* Purpose: click photos, and flip camera option
* Parameter(s):
* <1>pressHandler
* <2>item
*
* Precondition(s):
* Item input
*
* Returns: Item button
*
* Side effect:
* <1> onPress adds a new screen (push)
* <2> onLongPress removes the item with a vibration feedback
*
*/


export default function TodoItem({pressHandler, item}){

  const navigation2 = useNavigation();


  return (

            <Pressable onPress={() =>{navigation2.push('Details')}} onLongPress={() => {Vibration.vibrate(); pressHandler(item.key)}}>
                <View style={styles.button}>
            <Animated.View style={styles.bgFill} />
            <Text style = {styles.item}>{item.text}</Text>
          </View>
            </Pressable>

        )

}

/**
* styles
* Purpose: styling the items
*/
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 3,
    borderColor: "#111",
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#822',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  }

});


