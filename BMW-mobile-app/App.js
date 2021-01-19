import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button,Text,Image } from 'react-native';
import CarList from './components/CarList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import CarDetails from './components/CarDetails'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();


function Feed({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
      <Icon.Button style={styles.menu} title="Open drawer" onPress={() => navigation.openDrawer()} size={25} name="ios-menu" backgroundColor="transparent"></Icon.Button>
      <Image style={styles.logo} source={require('./assets/images/logo1.png')} />
      </View>
      <CarList />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}



function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}
    drawerStyle={{
      // backgroundColor: 'black',
      // width: 240,
      marginTop: 50
    }}
    />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer >
      <Stack.Navigator initialRouteName="" screenOptions={{ 
        headerTransparent: true,
      }}>
      <Stack.Screen name="Home" component={MyDrawer} />
      <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeader: {
    position: 'absolute',
    top: 70,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5
},
logo: {
    width: 100,
    height: 60,
    resizeMode: 'contain'

},
menu: {
  resizeMode: 'contain',
  color: 'black'
},

  
});
