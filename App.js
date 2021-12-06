import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useState } from 'react';

import AddItem from './components/AddItem';
//components
import Modal from './components/Modal';
import index from './components/Lista/index';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  
  const onHandlerChangeItem = (t) => setTextItem(t) 

  const add = () => {
    console.log('ADD NEW ITEM')
    setItemList(currentItems => [
      ...currentItems,
      {id: Math.random().toString(), value:textItem}
    ])
    setTextItem('')
  }

  const OnHandlerDelete = id => {
    console.log('DELETE ITEM')
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandlerModal = id => {
    setItemSelected(itemList.filter(item => item.id === id)[0])
    setModalVisible(!modalVisible)  
  }
    

  return (
    <View style={styles.screen}>
       

        <View style={styles.mainHeader}>
          <Text style={styles.mainText}>LISTA DE COMPRAS</Text>
        </View>

      <View  style={styles.container}>
        <AddItem
          onChange={onHandlerChangeItem}
          onAdditem={addItem}
          value={textItem}
        />

        </View>


      <View>
          {itemList.map(item => <View style={styles.itemList}><Text >{item.value}</Text></View>)}
      </View>
    </View>  
    );

}



// Estilos de campo input y boton de agregar
const styles = StyleSheet.create({
  screen: {
    padding: 70
  },




});



