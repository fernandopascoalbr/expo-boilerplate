import { CustomTheme } from '@/src/config/themes';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider as NavigationThemeProvider
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useColorScheme } from 'react-native';
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';

import merge from 'deepmerge';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme
});

const CombinedLightTheme = merge(LightTheme, CustomTheme.light);
const CombinedDarkTheme = merge(DarkTheme, CustomTheme.dark);

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../../../../assets/fonts/SpaceMono-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }
  const theme = colorScheme === 'dark' ? CombinedDarkTheme : CombinedLightTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationThemeProvider value={theme}>
        {children}
      </NavigationThemeProvider>
    </PaperProvider>
  );
}
