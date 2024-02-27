import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Root: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Link push href={"/login/"}>
        Go to login (push)
      </Link>
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

export default Root;
