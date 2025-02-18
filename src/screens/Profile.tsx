import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {MainStackType} from '../navigation/MainStack';
import {AuthContext} from '../navigation/Routes';

function Profile(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<MainStackType>>();
  const {signOut} = React.useContext(AuthContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'lightgreen',
        }}>
        <Pressable onPress={() => {}}>
          <Text style={{fontSize: 40, marginBottom: 10}}>My Profile</Text>
        </Pressable>
        <Pressable onPress={() => signOut()}>
          <Text style={{fontSize: 20, color: 'red'}}>Log out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
export default Profile;
