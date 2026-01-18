import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        resizeMode="cover"
        style={styles.backgroundImageContainer}
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Find Your Comfort</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Search and book apartments easily
            </Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <Pressable
            style={styles.buttonPrimary}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonPrimaryText}>Sign In</Text>
          </Pressable>

          <Pressable
            style={styles.buttonSecondary}
            onPress={() => router.push("/join")}
          >
            <Text style={styles.buttonSecondaryText}>Join Now</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

import PropertyListing from "@/components/PropertyListing";
import { styles } from "@/styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Where to?</Text>
            <TextInput
              style={{ ...styles.searchControl, ...styles.searchFormText }}
              placeholder="Location . Date . Add guest"
            />
          </View>
          <View style={styles.searchButton}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      <View style={{ height: 72, backgroundColor: "white" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterGroup}>
            {FILTERS.map((filter, index) => (
              <View style={styles.filterContainer} key={index}>
                <Image
                  source={require("@/assets/images/mansion.png")}
                  resizeMode="contain"
                  style={{ flex: 1 }}
                />
                <Text>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.listingContainer}>
        <PropertyListing listings={SAMPLE_DATA} />
        <View style={styles.paginationContainer}>
          <TouchableHighlight style={styles.showMoreButton}>
            <Text style={styles.showMoreButtonText}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;


