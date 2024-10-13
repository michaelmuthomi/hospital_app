import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Input, Card, Button, TextComponent } from "~/components/ui";
import tw from "twrnc";
import { LogoPlain } from "~/assets/icons";
import Doctors from "~/assets/images/doctors.png";
import { Link } from "expo-router";

export default function SignupPage () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View className={"flex-1 p-8 justify-between"}>
      <Image
        source={Doctors}
        className={"absolute top-0 left-0 h-screen w-screen opacity-30"}
      />
      <TextComponent className="text-4xl leading-normal font-Inter_Bold pt-8">
        Create an Account
      </TextComponent>
      <View style={tw`flex flex-col gap-4`}>
        <TextComponent className="text-sm font-Inter_Medium">
          Start taking care of your health! Book your doctor today and protect
          your love one!
        </TextComponent>
        <Input
          className="font-Inter px-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          className="font-Inter px-4"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        <View className="flex gap-2">
          <Button
            onPress={handleLogin}
            className="bg-green-700 h-14 rounded-full"
          >
            <TextComponent className="text-white font-Inter_Bold">
              Login and Continue
            </TextComponent>
          </Button>
          <Button onPress={handleLogin} className="bg-white h-14 rounded-full">
            <TextComponent className="text-black font-Inter_Bold">
              Phone Number
            </TextComponent>
          </Button>
        </View>
        <TextComponent className="text-center font-Inter_Medium">
          Already have an account? {""}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </TextComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
});
