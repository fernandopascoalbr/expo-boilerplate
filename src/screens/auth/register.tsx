import { translate } from '@/src/config/i18n/translate';
import { FormInput } from '@/src/shared/components/form';
import { Register } from '@/src/types/form/register';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SocialLoginButtons } from './components/social-login-buttons';
import { useRegisterScreen } from './hooks/useRegisterScreen';

export default function RegisterScreen() {
  const router = useRouter();

  const {
    register,
    onSubmit,
    control,
    formState: { isSubmitting, isValid }
  } = useRegisterScreen();

  React.useEffect(() => {
    register('name');
    register('email');
    register('password');
    register('confirmPassword');
  }, [register]);

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Crie sua conta
      </Text>

      <FormInput<Register>
        control={control}
        name="name"
        label={translate('form.name')}
      />

      <FormInput<Register>
        control={control}
        name="email"
        label={translate('form.email')}
      />

      <FormInput<Register>
        control={control}
        name="password"
        label={translate('form.password')}
      />

      <FormInput<Register>
        control={control}
        name="confirmPassword"
        label={translate('form.confirm_password')}
      />

      <Button
        mode="contained"
        onPress={onSubmit}
        loading={isSubmitting}
        disabled={isSubmitting || !isValid}
        style={styles.button}
      >
        {translate('form.register')}
      </Button>

      <Text variant="labelLarge" style={styles.orText}>
        {translate('screen.register.or_register_with')}
      </Text>

      <SocialLoginButtons />

      <Button onPress={() => router.navigate('/(auth)/login')}>
        {translate('screen.register.already_have_account')}
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, justifyContent: 'center' },
  title: { marginBottom: 24 },
  input: { marginBottom: 16 },
  button: { marginTop: 8 },
  orText: { textAlign: 'center', marginVertical: 12 },
  error: { color: 'red', marginBottom: 8 }
});
