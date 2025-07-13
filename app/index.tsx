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

export default function Index() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"];

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Login", "Email address and password can't be empty");
      return;
    }

    router.push("/(dashboard)");
  };

  return (
    <SafeAreaView
      style={[styles.wrapper, { backgroundColor: theme.background }]}
    >
      <View style={styles.container}>
        <View style={{ marginBottom: 36 }}>
          <Image
            source={{ uri: "https://withfra.me/android-chrome-512x512.png" }}
            style={{ width: 100, height: 100, alignSelf: "center" }}
            alt="Logo"
          />
          <Text style={[styles.title, { color: theme.text }]}>
            Tutor Finder
          </Text>
          <Text style={[styles.subtitle, { color: theme.text }]}>
            Get access to your dashboard and more
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={[styles.label, { color: theme.text }]}>
              Email address
            </Text>
            <TextInput
              placeholder="jayanta@example.com"
              placeholderTextColor={theme.text}
              style={[
                styles.control,
                { borderRadius: theme.radius, borderColor: theme.border },
              ]}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.input}>
            <Text style={[styles.label, { color: theme.text }]}>Password</Text>
            <TextInput
              placeholder="********"
              placeholderTextColor={theme.text}
              style={[
                styles.control,
                { borderRadius: theme.radius, borderColor: theme.border },
              ]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={handleLogin}>
            <View
              style={[
                styles.button,
                {
                  backgroundColor: theme.primary,
                  borderRadius: theme.radius,
                },
              ]}
            >
              <Text style={[styles.label, { color: "white" }]}>Sign in</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={[styles.footer, { marginTop: "auto" }]}
          >
            <Text
              style={[styles.label, { color: theme.text, letterSpacing: 0.2 }]}
            >
              Don&apos;t have an account? Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
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
  footer: {
    marginTop: "auto",
    alignItems: "center",
  },
});
