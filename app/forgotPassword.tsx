import { Colors } from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPassword() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"];
  const router = useRouter();

  const [mobile, setMobile] = React.useState<string>("");

  const handleSubmit = () => {
    if (!mobile) {
      Alert.alert("Forgot password", "Mobile number can't be empty");
      return;
    }

    router.push({
      pathname: "/otp",
      params: { from: "forgotPassword", mobile },
    });
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
            Forgot Password
          </Text>
          <Text style={[styles.subtitle, { color: theme.text }]}>
            Get OPT to update your password
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={[styles.label, { color: theme.text }]}>
              Mobile number
            </Text>
            <TextInput
              placeholder="+880**********"
              placeholderTextColor={theme.text}
              style={[
                styles.control,
                {
                  borderRadius: theme.radius,
                  borderColor: theme.border,
                  color: theme.text,
                },
              ]}
              value={mobile}
              onChangeText={setMobile}
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
              <Text style={[styles.label, { color: "white" }]}>Send OTP</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Pressable
          onPress={() => router.back()}
          style={[styles.iconButton, { marginTop: "auto" }]}
        >
          <Text
            style={[
              styles.label,
              { color: theme.text, textAlign: "center", letterSpacing: 0.2 },
            ]}
          >
            Back to Sign in
          </Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={24}
            color={theme.text}
          />
        </Pressable>
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
  iconButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
});
