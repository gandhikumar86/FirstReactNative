import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {MainStackType} from '../navigation/MainStack';
import {AuthContext} from '../navigation/Routes';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  name: string;
};

const products = [
  {key: 1, name: 'Pen', count: 4},
  {key: 2, name: 'Pencil', count: 5},
  {key: 3, name: 'Crayon', count: 7},
  {key: 4, name: 'Eraser', count: 10},
  {key: 5, name: 'Slate', count: 6},
  {key: 6, name: 'Chalk Piece', count: 20},
  {key: 7, name: 'Duster', count: 3},
  {key: 8, name: 'Pen', count: 4},
  {key: 9, name: 'Pencil', count: 5},
  {key: 10, name: 'Crayon', count: 7},
  {key: 11, name: 'Eraser', count: 10},
  {key: 12, name: 'Slate', count: 6},
  {key: 13, name: 'Chalk Piece', count: 20},
  {key: 14, name: 'Duster', count: 3},
];

const Card = ({id, name, count}: any) => {
  return (
    <View style={styles.card}>
      <Text>No.: {id}</Text>
      <Text>Name: {name}</Text>
      <Text>Available :{count}</Text>
    </View>
  );
};

const ProductListScreen = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<MainStackType>>();
  const {signOut} = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {/**products.map((product, key) => {
          return (
            <Pressable key={key} onPress={() => {}}>
              {product && (
                <Text style={{fontSize: 40}}>
                  There are {product.count} {product.name}
                </Text>
              )}
            </Pressable>
          );
        })**/}
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {products.map(product => {
            return (
              <View
                key={product.key}
                style={{width: '50%', flexDirection: 'row'}}>
                <Card
                  id={product.key}
                  name={product.name}
                  count={product.count}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'lightgreen',
    height: 200,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default ProductListScreen;
