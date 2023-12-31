import tw from "twrnc";
import { View, Text } from "react-native";
import { COLORS, SIZES } from "../../../constants";
import { Pressable, Image } from "react-native";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <Pressable
      style={tw`w-[40px] h-[40px] bg-[${COLORS.white}] rounded-[${
        SIZES.small / 1.25
      }px] flex flex-row items-center justify-center`}
      onPress={handlePress}>
      <Image
        source={iconUrl}
        style={tw`w-[${dimension}] h-[${dimension}] rounded-lg`}
      />
    </Pressable>
  );
};

export default ScreenHeaderBtn;
