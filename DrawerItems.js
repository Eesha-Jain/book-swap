export default [ 
  {
    name: 'Profile', 
    iconType: 'Ionicons', 
    iconName: 'person-outline'
  }, 
  {
    name: 'Library', 
    iconType: 'Ionicons', 
    iconName: 'library-outline'
  }, 
  { 
    name: 'MessagePage', 
    iconType: 'AntDesign', 
    iconName: 'message1'
  }, 
  {
    name: 'Find Books', 
    iconType: 'AntDesign', 
    iconName: 'search1'
  }, 
  {
    name: 'Settings', 
    iconType: 'Feather', 
    iconName: 'settings'
  }, 
  {
    name: 'Help', 
    iconType: 'Feather', 
    iconName: 'help-circle'
    
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
 return (
<NavigationContainer>
<Drawer.Navigator
       drawerType="front"
       initialRouteName="Profile"
       drawerContentOptions={{
         activeTintColor: '#e91e63',
         itemStyle: { marginVertical: 10 },
       }}
>
</Drawer.Navigator>
</NavigationContainer>
 );
}

import ProfileScreen from './screens/Profile';
import LibraryScreen from './screens/Library';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MessageScreen from './screens/MessagePage';
import DrawerItems from './constants/DrawerItems'; 

const Drawer = createDrawerNavigator();

export default function App() {
 return (
<NavigationContainer>
<Drawer.Navigator
       drawerType="front"
       initialRouteName="Profile"
       drawerContentOptions={{
         activeTintColor: '#e91e63',
         itemStyle: { marginVertical: 10 },
       }}

>
       {
         DrawerItems.map(drawer=><Drawer.Screen
           key={drawer.name}
         />)
       }
</Drawer.Navigator>
</NavigationContainer>
 );
}
