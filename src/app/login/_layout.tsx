import { Stack, router } from "expo-router";
import React from "react";
const Layout: React.FC = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Connect" />
    </Stack>
  );
};
export default Layout;
