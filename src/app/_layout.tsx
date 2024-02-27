import React, { useEffect } from "react";
import { Stack, useNavigationContainerRef } from "expo-router";

const Layout: React.FC = () => {
  const ref = useNavigationContainerRef();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
        gestureEnabled: false,
        fullScreenGestureEnabled: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default Layout;
