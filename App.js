import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './views/Login';
import ViewAll from './views/ViewAll';
import AddNew from './views/AddNew';
import SignUp from './views/SignUp';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <View style={styles.background}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Sign in">
            <Stack.Screen name="Sign in" component={Login} />
            <Stack.Screen name="Sign up" component={SignUp} />
            <Stack.Screen name="View all" component={ViewAll} />
            <Stack.Screen name="Add new" component={AddNew} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
    minHeight: '100%',
  },
});
