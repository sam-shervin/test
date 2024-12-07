import React from "react";
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function AuthPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Auth Page</Text>
      <Button title="Login" onPress={() => router.push("/(auth)/login")} />
    </View>
  );
}
