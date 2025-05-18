import {
  AuthLoginRequest,
  AuthLoginResponse
} from '@/src/types/api/auth/login';
import { api } from '..';

const AUTH_VERSION = 'v1';

export const login = async (data: AuthLoginRequest) => {
  const response = await api.post<AuthLoginResponse>(
    `/${AUTH_VERSION}/auth/login`,
    data
  );
  return response.data;
};
