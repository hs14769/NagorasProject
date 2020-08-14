import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import HomeS from './js/home';
import MapS from './js/Map';
import productsReducer from './js/products';

const Tab = createBottomTabNavigator();

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Map') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
          d>
          <Tab.Screen name="Home" component={HomeS} />
          <Tab.Screen name="Map" component={MapS} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    width: 300,
    borderRadius: 20,
  },
  QuickMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    width: '100%',
  },
  QuickButton: {
    borderRadius: 50,
    backgroundColor: 'grey',
    borderStyle: 'solid',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'white',
  },
});
