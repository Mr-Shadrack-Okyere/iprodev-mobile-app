import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "@/styles/_joinstyle";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Welcome back</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />
      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
}
