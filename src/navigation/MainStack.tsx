import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Profile from '../screens/Profile';
import ProductListScreen from '../screens/ProductListScreen';
import CustomDrawer from '../screens/CustomDrawer';

export type MainStackType = {
  Profile: any;
  'Product List': any;
};

const Drawer = createDrawerNavigator<MainStackType>();

const MainStack = props => {
  let username = props.route.params.username;
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} username={username} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#C6F3CA',
        drawerActiveTintColor: '#12B886',
      }}>
      <Drawer.Screen name={'Product List'} component={ProductListScreen} />
      <Drawer.Screen name={'Profile'} component={Profile} />
    </Drawer.Navigator>
  );
};

export default MainStack;
