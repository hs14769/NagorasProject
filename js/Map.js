import React, {Component} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductDescriptionScreen from './productDescription';
import {useState, useEffect} from 'react';

import Geolocation from 'react-native-geolocation-service';

const UserLocation = () => {
  const [location, setLocation] =
    (useState < ILocation) | (undefined > undefined);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
  return (
    <Container>
      {location && (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      )}
    </Container>
  );
};

function MapScreen({navigation}) {
  return (
    <>
      <MapView
        style={{height: '50%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 34.95583,
          longitude: 127.49028,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDescription')}>
          <Image
            style={{width: 100, height: 100, resizeMode: 'contain'}}
            source={{
              uri:
                'https://mblogthumb-phinf.pstatic.net/20150929_180/hamebio_1443500955434xeOBz_JPEG/banana1.jpg?type=w2',
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
const Stack = createStackNavigator();
function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Maps"
        component={MapScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDescription"
        component={ProductDescriptionScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default App;
