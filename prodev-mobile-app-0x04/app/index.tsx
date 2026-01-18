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

