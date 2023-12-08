import React from 'react';
import {Modal, View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const FullScreenLoader = ({visible, text}: Props) => (
  <Modal transparent animationType="slide" visible={visible}>
    <View style={styles.modalContainer}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#fff" />
        {text && <Text style={styles.loaderText}>{text}</Text>}
      </View>
    </View>
  </Modal>
);

interface Props {
  visible: boolean;
  text?: string;
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loaderContainer: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  loaderText: {
    color: '#fff',
    marginTop: 10,
  },
});

export default FullScreenLoader;
