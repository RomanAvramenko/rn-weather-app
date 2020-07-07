import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from './src/store/store';
import {ListScreen} from './src/screens/ListScreen';
import {ExpandScreen} from './src/screens/ExpandScreen';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="List"
            component={ListScreen}
            options={{
              title: 'Weather App',
              headerStyle: {
                backgroundColor: '#6c63ff',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen name="Expand" component={ExpandScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
