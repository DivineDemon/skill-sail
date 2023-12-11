import tw from "twrnc";
import React from "react";
import { View, Text } from "react-native";
import styles from "./screenheader.style";
import { TouchableOpacity, Image } from "react-native";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        style={tw`w-[${dimension}] h-[${dimension}] object-cover rounded-lg`}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
