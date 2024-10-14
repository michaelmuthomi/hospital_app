import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
import Toast from "react-native-toast-message";
import FlashMessage from "react-native-flash-message";

import {
  useFonts,
  Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from "@expo-google-fonts/inter";

import { useColorScheme } from '~/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  let [loaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
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
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <FlashMessage position="top" />
      <Toast
        position="bottom"
        text1Style={{
          fontFamily: "Inter_600SemiBold",
          fontWeight: "600",
          fontSize: 15,
        }}
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: 10,
          margin: 50,
          height: 100,
        }}
        text2Style={{
          fontFamily: "Inter_400Regular",
          fontWeight: "400",
          fontSize: 10,
        }}
        onPress={() => Toast.hide()}
      />
    </ThemeProvider>
  );
}
