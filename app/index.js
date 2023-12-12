import tw from "twrnc";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import {
  Welcome,
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
} from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-[${COLORS.lightWhite}]`}>
      <Stack.Screen
        style={tw`flex-1 bg-[${COLORS.lightWhite}]`}
        options={{
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-1 p-[${SIZES.medium}px]`}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
