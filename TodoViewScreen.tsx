import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useGetTodosQuery} from './lib/redux/ApiSlice';
import TaskItem from './components/TaskItem';
import {NativeStackParamList} from './types';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import FullScreenLoader from './components/FullScreenLoader';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<NativeStackParamList, 'TodoView'>;
type TodoViewScreenNavigationProp = NativeStackNavigationProp<
  NativeStackParamList,
  'TodoView'
>;

const TodoViewScreen: React.FC<Props> = ({route}: Props) => {
  const {id: todoId} = route.params;
  const {data, isLoading, isError} = useGetTodosQuery(todoId);
  const navigation = useNavigation<TodoViewScreenNavigationProp>();
  const handleEditPress = () => {
    if (data !== undefined && !Array.isArray(data)) {
      navigation.navigate('TodoForm', {todo: data});
    }
  };

  if (isLoading) {
    return <FullScreenLoader visible={isLoading} />;
  }

  if (isError || data === undefined || Array.isArray(data)) {
    return <Text>Error loading todo</Text>;
  }

  return (
    <TouchableOpacity onPress={handleEditPress}>
      <TaskItem item={data} />
    </TouchableOpacity>
  );
};

export default TodoViewScreen;
