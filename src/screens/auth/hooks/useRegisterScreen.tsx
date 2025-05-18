import { login } from '@/src/services/http/auth/login';
import { Toast } from '@/src/shared/utils/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { registerSchema, RegisterSchema } from '../schemas/register';

export function useRegisterScreen() {
  const router = useRouter();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onChange'
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      router.navigate('/(dashboard)/home');
    },
    onError: (error: any) => {
      Toast.show(error?.message ?? '');
    }
  });

  const onSubmit = useCallback(
    (data: RegisterSchema) => {
      mutation.mutate(data);
    },
    [mutation]
  );

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting: mutation.isPending,
    error: mutation.error
  };
}
