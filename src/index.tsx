import '@/src/setup';
import Providers from '@/src/shared/components/_providers';
import 'react-native-reanimated';
// import { ToastHost } from './shared/components/toast';

export default function Source({ children }: React.PropsWithChildren) {
  return (
    <Providers>
      {/* <ToastHost /> */}
      {children}
    </Providers>
  );
}
