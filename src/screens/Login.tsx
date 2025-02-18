import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthContext} from '../navigation/Routes';

const Login = (): React.JSX.Element => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  const {signIn}: any = React.useContext(AuthContext);

  React.useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
    validateForm();
  }, [username, password]);

  const validateForm = () => {
    let errorsV = {};

    // Validate name field
    if (!username) {
      errorsV.username = 'Username is required.';
    }

    // Validate password field
    if (!password) {
      errorsV.password = 'Password is required.';
    } else if (password.length < 6) {
      errorsV.password = 'Password must be at least 6 characters.';
    }

    // Set the errors and update form validity
    setErrors(errorsV);
    setIsFormValid(Object.keys(errorsV).length === 0);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.username}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.password}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={{...styles.button, opacity: isFormValid ? 1 : 0.5}}
        disabled={!isFormValid}
        onPress={() => signIn({username, password})}>
        <Text style={{fontSize: 24}}>Sign in</Text>
      </TouchableOpacity>
      {!(!username && !password) &&
        Object.values(errors).map((err, index) => (
          <Text key={index} style={styles.error}>
            {err}
          </Text>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
  username: {
    width: '80%',
    height: 80,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 5,
    fontSize: 24,
  },
  password: {
    width: '80%',
    height: 80,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 5,
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 10,
    marginBottom: 24,
    height: 80,
    width: '50%',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 12,
  },
});
export default Login;
