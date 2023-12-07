import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {AddTodo, NativeStackParamList, TodoSchema} from './types';
import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {usePostTodoMutation} from './lib/redux/ApiSlice';
// import {usePostTodoMutation} from './lib/redux/ApiSlice';

type TodoListScreenNavigationProp = NativeStackNavigationProp<
  NativeStackParamList,
  'TodoList'
>;

export default function TodoFormScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AddTodo>({
    resolver: zodResolver(TodoSchema),
    defaultValues: {completed: false},
  });
  const [createPost, {isLoading, isError, error, data: createPostResult}] =
    usePostTodoMutation();
  const onSubmit: SubmitHandler<AddTodo> = data => {
    console.log(data);
    createPost(data);
  };

  const navigation = useNavigation<TodoListScreenNavigationProp>();

  const showAlert = (title: string, message: string) =>
    Alert.alert(title, message, [], {
      cancelable: true,
    });

  React.useEffect(() => {
    if (createPostResult) {
      console.log(createPostResult);
      showAlert('Success', 'Successfully created the todo with status');
    }
    if (isError) {
      console.error(error);
      showAlert('Failed', 'Failed to create the todo.');
    }
    if (isLoading) {
      showAlert('In Progress', 'Creating todo...');
    }
  }, [createPostResult, error, isError, isLoading]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User ID:</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value === undefined ? '' : `${value}`}
          />
        )}
        name="userId"
        rules={{required: true}}
      />
      {errors.userId && (
        <Text style={styles.errorLabel}>{errors.userId.message}</Text>
      )}

      <Text style={styles.label}>Title:</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
        rules={{required: true}}
      />
      {errors.title && (
        <Text style={styles.errorLabel}>{errors.title.message}</Text>
      )}

      <Text style={styles.label}>Completed:</Text>
      <Controller
        control={control}
        name="completed"
        render={({field: {onChange, value}}) => (
          <CheckBox
            onValueChange={onChange}
            value={value}
            style={styles.input}
          />
        )}
      />
      {errors.completed && (
        <Text style={styles.errorLabel}>{errors.completed.message}</Text>
      )}
      <View style={styles.button}>
        <Button title="Add Todo" onPress={handleSubmit(onSubmit)} />
      </View>
      <View style={styles.button}>
        <Button
          title="View Todos"
          onPress={() => {
            navigation.navigate('TodoList');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  errorLabel: {
    color: 'red',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
