import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoListScreen from './TodoListScreen';
import TodoViewScreen from './TodoViewScreen';
import {NativeStackParamList} from './types';
import TodoFormScreen from './TodoFormScreen';

const Stack = createNativeStackNavigator<NativeStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoList">
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen
          name="TodoView"
          component={TodoViewScreen}
          initialParams={{id: 1}}
        />
        <Stack.Screen name="TodoForm" component={TodoFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
