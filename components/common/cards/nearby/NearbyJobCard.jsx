import tw from "twrnc";
import { checkImageURL } from "../../../../utils";
import { COLORS, FONT, SIZES } from "../../../../constants";
import { View, Text, Pressable, Image } from "react-native";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <Pressable
      style={tw`flex-1 flex flex-row items-center justify-between p-[${SIZES.medium}px] rounded-[${SIZES.small}px] bg-white shadow-md shadow-[${COLORS.white}]`}
      onPress={() => handleNavigate(job.job_id)}>
      <Pressable
        style={tw`w-[50px] h-[50px] bg-[${COLORS.white}] rounded-[${SIZES.medium}] flex items-center justify-center`}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={tw`w-[70%] h-[70%]`}
        />
      </Pressable>

      <View style={tw`flex-1 mx-[${SIZES.medium}px]`}>
        <Text
          style={[
            tw`text-[${SIZES.medium}px] text-[${COLORS.primary}]`,
            {
              fontFamily: FONT.bold,
            },
          ]}
          numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text
          style={[
            tw`text-[${SIZES.small + 2}px] text-[${
              COLORS.gray
            }] mt-[3px] capitalize`,
            {
              fontFamily: FONT.regular,
            },
          ]}>
          {job.job_employment_type}
        </Text>
      </View>
    </Pressable>
  );
};

export default NearbyJobCard;
