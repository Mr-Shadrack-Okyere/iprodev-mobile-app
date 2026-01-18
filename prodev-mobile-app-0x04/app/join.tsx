import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "@/styles/_joinstyle";

export default function Join() {
  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join</Text>
        <Text style={styles.subText}>Create a new account</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput style={styles.formControl} />

        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />
      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>
    </View>
  );
}
