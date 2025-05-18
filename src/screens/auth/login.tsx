import { translate } from '@/src/config/i18n/translate';
import { FormInput } from '@/src/shared/components/form';
import { Login } from '@/src/types/form/login';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  MD3Theme,
  Text,
  TextInput,
  useTheme
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SocialLoginButtons } from './components/social-login-buttons';
import { useLoginScreen } from './hooks/useLoginScreen';

const createStyle = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      padding: 16,
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.colors.background
    },
    title: {
      marginBottom: 24,
      textAlign: 'center',
      color: theme.colors.primary
    },
    input: {
      marginBottom: 16
    },
    button: { marginTop: 8 },
    orText: { textAlign: 'center', marginVertical: 12 },
    error: { color: 'red', marginBottom: 8 }
  });

export default function LoginScreen() {
  const theme = useTheme();
  const styles = createStyle(theme);
  const router = useRouter();
  const [securePassword, setSecurePassword] = useState(true);

  const {
    register,
    onSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useLoginScreen();

  React.useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  function toggleSecurePassword() {
    setSecurePassword((prev) => !prev);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Auto empresa
      </Text>

      <FormInput<Login>
        control={control}
        name="email"
        label={translate('form.email')}
        style={styles.input}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <FormInput<Login>
        control={control}
        name="password"
        label={translate('form.password')}
        style={styles.input}
        right={
          <TextInput.Icon
            icon={securePassword ? 'eye-off' : 'eye'}
            onPress={toggleSecurePassword}
          />
        }
        secureTextEntry={securePassword}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      <Button
        mode="contained"
        onPress={onSubmit}
        loading={isSubmitting}
        disabled={isSubmitting}
        style={styles.button}
      >
        {translate('form.login')}
      </Button>

      <Text variant="labelLarge" style={styles.orText}>
        {translate('screen.login.or_login_with')}
      </Text>

      <SocialLoginButtons />

      <Button onPress={() => router.navigate('/(auth)/register')}>
        {translate('screen.login.no_account_register')}
      </Button>
    </SafeAreaView>
  );
}
