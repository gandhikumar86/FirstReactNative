import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggle, selectToggle} from '../redux/togglerSlice';

export default function CustomDrawer(props) {
  const togglevalue = useSelector(selectToggle);
  const dispatch = useDispatch();
  let username = props.username;
  console.log('CustomDrawer' + username);
  return (
    <DrawerContentScrollView {...props}>
      {/* header */}
      <View style={styles.header}>
        <View
          style={styles.profileCircle}
          onTouchEnd={() => dispatch(toggle())}>
          <Text style={styles.profileText}>
            {togglevalue ? 'Hide ' : 'Show '}me
          </Text>
        </View>
        <Text style={{...styles.text, display: togglevalue ? 'flex' : 'none'}}>
          {username}
        </Text>
      </View>
      {/* end of header */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  profileCircle: {
    width: 100,
    height: 100,
    backgroundColor: '#12B886',
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: '#fff',
    fontFamily: 'PoppinsBold',
    fontSize: 20,
  },
  text: {
    fontFamily: 'PoppinsBold',
    marginTop: 15,
    fontSize: 18,
  },
});
