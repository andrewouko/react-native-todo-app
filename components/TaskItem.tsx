import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Todo} from '../types';

interface TaskItemProps {
  item: Todo;
}

const TaskItem: React.FC<TaskItemProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Task title: ${item.title}`}</Text>
      <View style={item.completed ? styles.completed : styles.incomplete}>
        <Text style={styles.statusText}>{`Task status: ${
          item.completed ? 'Completed' : 'Not Completed'
        }`}</Text>
      </View>
      <Text style={styles.creator}>{`Task creator: ${item.userId}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // White background color
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2, // Adds shadow on Android
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  completed: {
    backgroundColor: '#a5d6a7', // Light green for completed tasks
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  incomplete: {
    backgroundColor: '#ffcdd2', // Light red for incomplete tasks
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  creator: {
    marginTop: 8,
    color: '#777', // Gray color for the creator text
  },
});

export default TaskItem;
