import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export function SocialLoginButtons() {
  return (
    <View style={styles.container}>
      <Button
        mode="outlined"
        icon={() => (
          <MaterialCommunityIcons name="google" size={20} color="#DB4437" />
        )}
        onPress={() => console.log('Login com Google')}
        style={styles.button}
      >
        Google
      </Button>

      <Button
        mode="outlined"
        icon={() => (
          <MaterialCommunityIcons name="facebook" size={20} color="#3b5998" />
        )}
        onPress={() => console.log('Login com Facebook')}
        style={styles.button}
      >
        Facebook
      </Button>

      <Button
        mode="outlined"
        icon={() => (
          <MaterialCommunityIcons name="apple" size={20} color="#000" />
        )}
        onPress={() => console.log('Login com Apple')}
        style={styles.button}
      >
        Apple
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8, marginBottom: 16 },
  button: {}
});
