import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChangePassword() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"];
  const router = useRouter();

  const [password, setPassword] = React.useState<string>("");

  const handleSubmit = () => {
    if (!password) {
      Alert.alert("Reset password", "Password can't be empty");
      return;
    }

    router.push("/");
  };

  return (
    <SafeAreaView
      style={[styles.wrapper, { backgroundColor: theme.background }]}
    >
      <View style={styles.container}>
        {/* Brand */}
        <View style={{ marginBottom: 36 }}>
          <Image
            source={{ uri: "https://withfra.me/android-chrome-512x512.png" }}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              marginBottom: 12,
            }}
            alt="Logo"
          />
          <Text style={[styles.title, { color: theme.text }]}>
            Change Password
          </Text>
          <Text style={[styles.subtitle, { color: theme.text }]}>
            Strong password can enhance your security
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={[styles.label, { color: theme.text }]}>
              Password (Minimum 8 characters)
            </Text>
            <TextInput
              placeholder="********"
              placeholderTextColor={theme.text}
              style={[
                styles.control,
                {
                  borderRadius: theme.radius,
                  borderColor: theme.border,
                  color: theme.text,
                },
              ]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={handleSubmit}>
            <View
              style={[
                styles.button,
                {
                  backgroundColor: theme.primary,
                  borderRadius: theme.radius,
                },
              ]}
            >
              <Text style={[styles.label, { color: "white" }]}>
                Save changes
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text>Change Password screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  form: {
    flex: 1,
  },
  input: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  control: {
    borderWidth: 1,
    paddingHorizontal: 16,
    height: 48,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    marginTop: 24,
  },
});
