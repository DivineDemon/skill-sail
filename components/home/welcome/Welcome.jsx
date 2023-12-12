import tw from "twrnc";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { icons, COLORS, FONT, SIZES } from "../../../constants";
import styles from "./welcome.style";

const Welcome = () => {
  const router = useRouter();
  const jobTypes = ["Full-time", "Part-time", "Contractor"];
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={tw`w-full`}>
        <Text
          style={[
            tw`text-[${SIZES.large}px] text-[${COLORS.secondary}]`,
            {
              fontFamily: FONT.regular,
            },
          ]}>
          Welcome Mushood
        </Text>
        <Text
          style={[
            tw`text-[${SIZES.xLarge}px] text-[${COLORS.primary}] mt-2`,
            {
              fontFamily: FONT.bold,
            },
          ]}>
          Find your perfect job
        </Text>
      </View>
      <View
        style={tw`flex flex-row items-center justify-center mt-[${SIZES.large}px] h-[50px]`}>
        <View
          style={tw`flex-1 bg-[${COLORS.white}] mr-[${SIZES.small}px] items-center justify-center rounded-[${SIZES.medium}px] h-full`}>
          <TextInput
            style={[
              tw`w-full h-full px-[${SIZES.medium}px]`,
              {
                fontFamily: FONT.regular,
              },
            ]}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity
          style={tw`w-[50px] h-full bg-[${COLORS.tertiary}] rounded-[${SIZES.medium}px] flex items-center justify-center`}
          onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={[
              tw`w-[50%] h-[50%]`,
              {
                tintColor: COLORS.white,
              },
            ]}
          />
        </TouchableOpacity>
      </View>
      <View style={tw`w-full mt-[${SIZES.medium}px]`}>
        <FlatList
          scrollEnabled={false}
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
