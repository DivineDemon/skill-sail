import tw from "twrnc";
import styles from "./company.style";
import { checkImageURL } from "../../../utils";
import { View, Text, Image } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../../constants";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={tw`my-[${SIZES.medium}px] flex items-center justify-center`}>
      <View
        style={tw`w-[80px] h-[80px] flex items-center justify-center bg-white rounded-[${SIZES.large}px]`}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          style={tw`w-[80%] h-[80%]`}
        />
      </View>
      <View style={tw`mt-[${SIZES.small}px]`}>
        <Text
          style={[
            tw`text-[${SIZES.large}px] text-[${COLORS.primary}] text-center`,
            {
              fontFamily: FONT.bold,
            },
          ]}>
          {jobTitle}
        </Text>
      </View>
      <View
        style={tw`mt-[${
          SIZES.small / 2
        }px] flex flex-row items-center justify-center`}>
        <Text
          style={[
            tw`text-[${SIZES.medium - 2}px] text-[${COLORS.primary}]`,
            {
              fontFamily: FONT.medium,
            },
          ]}>
          {companyName} /
        </Text>
        <View style={tw`flex flex-row items-center justify-center`}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={tw`w-[14px] h-[14px]`}
            tintColor={COLORS.gray}
          />
          <Text
            style={[
              tw`text-[${SIZES.medium - 2}px] text-[${COLORS.gray}] ml-[2px]`,
              {
                fontFamily: FONT.regular,
              },
            ]}>
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
