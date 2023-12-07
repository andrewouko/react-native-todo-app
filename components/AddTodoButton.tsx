import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface HeaderRightButtonProps {
  onPress: () => void;
}

const AddTodoButton: React.FC<HeaderRightButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>+ Add Todo</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginRight: 16,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AddTodoButton;
