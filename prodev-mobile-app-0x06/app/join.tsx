import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { styles } from "@/styles/_joinstyle";

export default function Join() {
  return (
    <View style={styles.container}>

      <View style={styles.iconsection}>
        <Text onPress={() => router.back()}>←</Text>
        <Text>Sign Up</Text>
        <View />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Join us and start your journey</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput style={styles.formControl} placeholder="Enter name" />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} placeholder="Enter email" />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              placeholder="Create password"
              secureTextEntry
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Text
          style={styles.signupSubTitleText}
          onPress={() => router.push("/signin")}
        >
          Sign In
        </Text>
      </View>
    </View>
  );
}
