import React from "react";
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function AuthScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Auth Screen</Text>
      <Button title="Login" onPress={() => router.push("/(tabs)")} />
    </View>
  );
}
