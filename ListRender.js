import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';



import TodoItem from './todoItem';
import AddTodo from './addTodos';
import { useNavigation } from '@react-navigation/native';



/** Adapted from CS455 University of Regina; Dr. Trevor M. Tomesh

* TList()
* Purpose: contains the list of items/notes, which upon clik open a new screen. Includes the functions definitions:
 pressHandler() and submitHandler()
* Parameter(s):
* <1>N/A
*
* Precondition(s):
* <1> N/A
*
* Returns: Item button
*
* Side effect:
* <1> Renders the list
* <2> onPress item adds a new screen (push)
* <3> onLongPress item removes the item with a vibration feedback
*
*/
export default function TList(){
  const [todos, setTodos] = useState([
    { text: 'Task1', key: '1'},
    { text: 'Task2', key: '2'},
    { text: 'Task3', key: '3'}
  ]);  
  const navigation = useNavigation();

 /** pressHandler
* Returns: list with the selected item removed
*/
const pressHandler = (key) => {
  setTodos( prevTodos => {
    if (todos.length-1 == 0)
    navigation.goBack();
    return prevTodos.filter(filterTodo => filterTodo.key != key);
  });
};

 /** submitHandler
* Returns: list with the item(of given input) added, with a random key
*/
const submitHandler = (text) =>{
  setTodos((prevTodos) => {
    return [
      {text: text, key: Math.random().toString()}, ...prevTodos];
    
  }
  )
}

return (
<View style = {styles.container}>

  <View style={styles.content}>
    <AddTodo submitHandler = {submitHandler}/>
    <View style = {styles.list}>
      <FlatList
        data ={todos}
        renderItem={({item})=>(
          <TodoItem item={item} pressHandler={pressHandler}/>    
        )}
      />
    </View>  
  </View>

</View>

);

}

const styles = StyleSheet.create({
  container: {

  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },
});


