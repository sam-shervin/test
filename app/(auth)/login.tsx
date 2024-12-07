import React from "react";
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <Button title="Login" onPress={() => router.push("/(auth)")} />
    </View>
  );
}
