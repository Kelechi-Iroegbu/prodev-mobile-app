// app/index.tsx
import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  // Optional: Auto-redirect after 2 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/(home)");
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
          
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Join the Club</Text>
          </View>

          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Find new friends to play your favorite sport
            </Text>
          </View>
        </View>

        <View style={{ position: "absolute", bottom: 100, left: 0, right: 0 }}>
          <View style={styles.buttonGroup}>
            <Pressable 
              style={styles.buttonPrimary}
              onPress={() => router.push("/join")}
            >
              <Text style={styles.buttonPrimaryText}>Join now</Text>
            </Pressable>

            <Pressable 
              style={styles.buttonSecondary}
              onPress={() => router.push("/(home)")}
            >
              <Text style={styles.buttonSecondaryText}>Explore</Text>
            </Pressable>
          </View>

          <View style={styles.buttonGroupSubText}>
            <Text style={[styles.titleSubText, { fontSize: 16 }]}>
              Already a member?
            </Text>
            <Pressable onPress={() => router.push("/signin")}>
              <Text
                style={[
                  styles.titleSubText,
                  { fontSize: 16, fontWeight: "600" },
                ]}
              >
                Sign in
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}