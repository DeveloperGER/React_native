import {
    Button,
    Modal,
    Text,
    View,
} from 'react-native';

import React  from 'react';

const Modal2 = props => {
    const {
        visible,
        onDelete
    } = props

    if (!visible) {
        return null;
    }


return ( 
        <Modal
          animationType="slide"
          visible={visible}>

          <View style={styles.modalTitle}>
              <Text>Mi Modal</Text>
          </View>

          <View style={styles.modalMessage}>
            <Text>¿Estas seguro que deseas borrar?</Text>
          </View>

          <View style={styles.modalMessage}>  
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>

          <View style={styles.modalButton}>  
            <Button 
            onPress={onDelete} 
            title="CONFIRM"
            />
          </View>
        </Modal>
    );   
};


const styles = StyleSheet.create({
modalTitle: {
    backgroundColor: '#ccc',
    color: 'white',
    fontSize: 18
  },

  modalMessage: {
    marginBottom: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalButton: {
    marginTop: 15
  },

  modalItem: {
    fontSize: 30  
  }
});

export default Modal2;
