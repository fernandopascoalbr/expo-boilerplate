import Source from '@/src';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export const unstable_settings = {
  initialRouteName: '(dashboard)'
};

export default function RootLayout() {
  return (
    <Source>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(dashboard)"
          options={{ headerShown: false, title: 'Auto empresa' }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </Source>
  );
}
