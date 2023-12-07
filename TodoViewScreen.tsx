import React from 'react';
import {Text} from 'react-native';
import {useGetTodosQuery} from './lib/redux/ApiSlice';
import TaskItem from './components/TaskItem';
import {NativeStackParamList} from './types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<NativeStackParamList, 'TodoView'>;

const TodoViewScreen: React.FC<Props> = ({route}: Props) => {
  const {id: todoId} = route.params;
  const {data, isLoading, isError} = useGetTodosQuery(todoId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError || data === undefined || Array.isArray(data)) {
    return <Text>Error loading todo</Text>;
  }

  return <TaskItem item={data} />;
};

export default TodoViewScreen;
