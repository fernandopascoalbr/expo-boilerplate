import { setCache } from '@/src/services/cache';
import { login } from '@/src/services/http/auth/login';
import { Toast } from '@/src/shared/utils/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { LoginSchema, loginSchema } from '../schemas/login';

export function useLoginScreen() {
  const router = useRouter();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange',
    reValidateMode: 'onBlur'
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      await setCache('token', data.access_token);
      router.navigate('/(dashboard)/home');
    },
    onError: (error: any) => {
      Toast.show(error?.message ?? '')
    }
  });

  const onSubmit = useCallback(
    (data: LoginSchema) => {
      mutation.mutate(data);
    },
    [mutation]
  );

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit)
  };
}
