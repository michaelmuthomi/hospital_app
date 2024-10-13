import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Input, Card, Button, TextComponent } from "~/components/ui";
import tw from "twrnc";
import { LogoPlain } from "~/assets/icons";
import Doctors from "~/assets/images/doctors.png";
import { Link } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  interface LoginData {
    email: string;
    password: string;
  }

  const login = async ({ email, password }: LoginData) => {
    try {
      const api_route = `${process.env.EXPO_PUBLIC_DEPLOYMENT_URL}/login`;
      const response = await fetch(api_route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error:", error.response ? error.response.data : error.message);
      } else {
        console.error("Error:", (error as Error).message);
      }
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      console.error("Email and password are required");
      return;
    }
    login({ email, password });
  };

  return (
    <View className={"flex-1 p-8 justify-between"}>
      <Image
        source={Doctors}
        className={"absolute top-0 left-0 h-screen w-screen opacity-30"}
      />
      <TextComponent className="text-4xl leading-normal font-Inter_Bold pt-8">
        Protect yourself and your loved ones!
      </TextComponent>
      <View style={tw`flex flex-col gap-4`}>
        <TextComponent className="text-sm font-Inter_Medium">
          Start taking care of your health! Book your doctor today and protect
          your loved one!
        </TextComponent>
        <Input
          className="font-Inter px-4 !h-14"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          className="font-Inter px-4 !h-14"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        <View className="flex gap-2">
          <Button
            onPress={handleLogin}
            size={null}
            className="bg-green-700 h-14 rounded-full"
          >
            <TextComponent className="text-white font-Inter_Bold">
              Login and Continue
            </TextComponent>
          </Button>
          <Button
            onPress={handleLogin}
            size={null}
            className="bg-white h-14 rounded-full"
          >
            <TextComponent className="text-black font-Inter_Bold">
              Phone Number
            </TextComponent>
          </Button>
        </View>
        <TextComponent className="text-center font-Inter_Medium">
          Don't have an account? {""}
          <Link push href={"/(tabs)/signup"} className="text-blue-500">
            Sign Up
          </Link>
        </TextComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
});
