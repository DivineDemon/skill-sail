import tw from "twrnc";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import useFetch from "../../../hooks/useFetch";
import { COLORS, FONT, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState([]);

  const { data, loading, error } = useFetch({
    endpoint: "search",
    query: "query=React developer&num_pages=1",
  });

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={tw`mt-[${SIZES.xLarge}px]`}>
      <View style={tw`flex flex-row items-center justify-between`}>
        <Text
          style={[
            tw`text-[${SIZES.large}px] text-[${COLORS.primary}]`,
            {
              fontFamily: FONT.medium,
            },
          ]}>
          Popular Jobs
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
      <View style={tw`mt-[${SIZES.medium}px]`}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
