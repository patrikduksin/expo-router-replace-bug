import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>login index</Text>
      <Link href={"/login/Connect"}>Go to connect(push)</Link>
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

export default Login;
