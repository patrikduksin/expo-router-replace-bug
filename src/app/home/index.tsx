import { Link, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Home: React.FC = () => {
  const { replace } = useRouter();
  return (
    <View style={styles.container}>
      <Text>home index</Text>
      <Pressable onPress={() => replace("/")}>
        <Text>Go to index</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
