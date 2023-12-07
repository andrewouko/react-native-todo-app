import React from 'react';
import {FlatList, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useGetTodosQuery} from './lib/redux/ApiSlice';
import {NativeStackParamList, Todo} from './types';
import {useNavigation} from '@react-navigation/native';
import TaskItem from './components/TaskItem';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AddTodoButton from './components/AddTodoButton';

type TodoViewScreenNavigationProp = NativeStackNavigationProp<
  NativeStackParamList,
  'TodoView'
>;

const TodoListScreen: React.FC = () => {
  const {data: todos, isLoading, isError} = useGetTodosQuery(undefined);
  const navigation = useNavigation<TodoViewScreenNavigationProp>();

  const handleTodoPress = (todoId: number) => {
    navigation.navigate('TodoView', {id: todoId});
  };

  const handleAddTodo = () => {
    navigation.navigate('TodoForm');
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError || !Array.isArray(todos)) {
    return <Text>Error loading todos</Text>;
  }

  return (
    <View style={styles.container}>
      <AddTodoButton onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item: Todo) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleTodoPress(item.id)}>
            <TaskItem item={item} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
});

export default TodoListScreen;
