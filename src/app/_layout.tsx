import { Stack } from "expo-router";
import { colors } from "@/styles/theme";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import { Loading } from "@/components/loading";
import { SafeAreaView, StatusBar, View } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray[100] }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.gray[100]} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.gray[100],
          },
        }}
      />
    </SafeAreaView>
  );
}
