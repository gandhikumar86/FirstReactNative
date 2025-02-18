import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export type ScreenType = {
  Login: any;
  Signup: any;
  Splash: any;
  Mains: any;
};

const Stack = createStackNavigator<ScreenType>();
export const AuthContext = React.createContext();

const Routes = () => {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            username: action.payload,
            isLoading: false,
          };
        case 'SIGN_IN':
          AsyncStorage.setItem('userToken', action.token);
          AsyncStorage.setItem('username', action.payload);
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            username: action.payload,
          };
        case 'SIGN_OUT':
          AsyncStorage.setItem('userToken', '');
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            username: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      username: null,
    },
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({
          type: 'SIGN_IN',
          token: 'dummy-auth-token',
          payload: data.username,
        });
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({
          type: 'SIGN_IN',
          token: 'dummy-auth-token',
          payload: data.username,
        });
      },
    }),
    [],
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken, username;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        userToken = await AsyncStorage.getItem('userToken');
        username = await AsyncStorage.getItem('username');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken, payload: username});
    };

    bootstrapAsync();
  }, []);

  console.log('Routes' + state.username);

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {state.isLoading ? (
              // We haven't finished checking for the token yet
              <Stack.Screen name="Splash" component={SplashScreen} />
            ) : state.userToken == null ? (
              AuthStack()
            ) : (
              <Stack.Screen
                name="Mains"
                component={MainStack}
                options={{headerShown: false}}
                initialParams={{username: state.username}}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
};

export default Routes;
