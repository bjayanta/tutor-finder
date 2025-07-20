import { Colors } from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
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

export default function Signup() {
  const router = useRouter();

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"];

  const [name, setName] = React.useState<string>("");
  const [mobile, setMobile] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSignup = () => {
    if (!name || !mobile || !password) {
      Alert.alert(
        "Sign up",
        "Name, mobile number, and password can't be empty"
      );
      return;
    }

    router.push({ pathname: "/otp", params: { from: "signup", name, mobile } });
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
            Tutor Finder
          </Text>
          <Text style={[styles.subtitle, { color: theme.text }]}>
            Sign up to start your journey
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={[styles.label, { color: theme.text }]}>Full name</Text>
            <TextInput
              placeholder="Jone Doe"
              placeholderTextColor={theme.text}
              style={[
                styles.control,
                {
                  borderRadius: theme.radius,
                  borderColor: theme.border,
                  color: theme.text,
                },
              ]}
              value={name}
              onChangeText={setName}
            />
          </View>

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

          <TouchableOpacity onPress={handleSignup}>
            <View
              style={[
                styles.button,
                {
                  backgroundColor: theme.primary,
                  borderRadius: theme.radius,
                },
              ]}
            >
              <Text style={[styles.label, { color: "white" }]}>Sign up</Text>
            </View>
          </TouchableOpacity>

          <Link
            href="/"
            style={[
              styles.label,
              {
                color: theme.text,
                letterSpacing: 0.2,
                textAlign: "center",
                marginTop: "auto",
              },
            ]}
          >
            Already have an account? Sign in
          </Link>
        </View>
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
