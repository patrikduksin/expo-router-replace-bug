import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Connect: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Connect</Text>
      <Link replace href={"/home/"}>
        Go to home (replace)
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

export default Connect;
