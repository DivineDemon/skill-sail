import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";
import { useCallback, useState } from "react";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import {
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  ScreenHeaderBtn,
} from "../../components";
import useFetch from "../../hooks/useFetch";
import { icons, COLORS, SIZES } from "../../constants";

const JobDetails = () => {
  const router = useRouter();
  const params = useGlobalSearchParams();
  const [refreshing, setRefreshing] = useState(false);

  const { data, loading, error, refetch } = useFetch({
    endpoint: "job-details",
    query: `job_id=${params.id}`,
  });

  const onRefresh = () => {};

  return (
    <SafeAreaView style={tw`flex-1 bg-[${COLORS.lightWhite}]`}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : data.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          <View style={tw`p-[${SIZES.medium}px] pb-[100px]`}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />
            <JobTabs />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobDetails;
