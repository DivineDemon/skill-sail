import tw from "twrnc";
import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "../../../hooks/useFetch";
import { COLORS, FONT, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, loading, error } = useFetch({
    endpoint: "search",
    query: "query=React developer&num_pages=1",
  });

  return (
    <View style={tw`mt-[${SIZES.xLarge}px]`}>
      <View
        style={tw`flex flex-row items-center justify-between mt-[${SIZES.small}px]`}>
        <Text
          style={[
            tw`text-[${SIZES.large}px] text-[${COLORS.primary}]`,
            {
              fontFamily: FONT.medium,
            },
          ]}>
          Nearby Jobs
        </Text>
        <Pressable>
          <Text
            style={[
              tw`text-[${SIZES.medium}px] text-[${COLORS.gray}]`,
              {
                fontFamily: FONT.medium,
              },
            ]}>
            Show All
          </Text>
        </Pressable>
      </View>
      <View style={tw`mt-[${SIZES.medium}px] gap-[${SIZES.small}px]`}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
