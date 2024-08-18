import { Fonts } from '@/enums/fonts.enum';
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    [Fonts.Inter]: require('../assets/fonts/Inter-Regular.ttf'),
    [Fonts.InterMedium]: require('../assets/fonts/Inter-Medium.ttf'),
    [Fonts.InterSemiBold]: require('../assets/fonts/Inter-SemiBold.ttf'),
    [Fonts.InterBold]: require('../assets/fonts/Inter-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerTitleStyle: { fontFamily: Fonts.InterBold } }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
