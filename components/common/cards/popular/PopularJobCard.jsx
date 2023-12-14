import tw from "twrnc";
import { View, Text, Pressable, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";
import { FONT, SIZES } from "../../../../constants";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <Pressable
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <Pressable style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={tw`w-[70%] h-[70%]`}
        />
      </Pressable>
      <Text
        style={tw`text-[${SIZES.medium}px] font-[${
          FONT.regular
        }] text-[#B3AEC6] mt-[${SIZES.small / 1.5}px]`}
        numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={tw`mt-[${SIZES.large}px]`}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text
          style={tw`text-[${SIZES.medium - 2}px] font-[${
            FONT.regular
          }] text-[#B3AEC6]`}>
          {item.job_country}
        </Text>
      </View>
    </Pressable>
  );
};

export default PopularJobCard;
