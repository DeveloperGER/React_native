import {Button, StyleSheet, TextInput, View} from 'react-native';

const AddItem = (props) => {  

    const {onChange, onAddItem, value } = props;


    return (
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Item de Lista"       
          style={styles.input} 
          onChangeText={onChange}
          value={value}

          />
      <Button title="ADD" onPress={onAddItem}/>  
      </View>  
    );
};


const styles = StyleSheet.create({ 
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'  
      },
      input: {
        width: 250,
        borderBottomColor: 'black', 
        borderBottomWidth: 1
      },

});

export default AddItem;

