import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
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

export default function OtpScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"];

  const { from, name, mobile } = useLocalSearchParams();

  const input1Ref = React.useRef<TextInput>(null);
  const input2Ref = React.useRef<TextInput>(null);
  const input3Ref = React.useRef<TextInput>(null);
  const input4Ref = React.useRef<TextInput>(null);

  const inputRefs = [input1Ref, input2Ref, input3Ref, input4Ref];
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleSubmit = () => {
    const fullOtp = otp.join("");

    if (fullOtp.length < 4) {
      Alert.alert("Incomplete OTP", "Please enter all 4 digits.");
      return;
    }

    if (from === "signup") {
      router.push("/");
    } else {
      router.push("/changePassword");
    }
  };

  const handleResendOtp = () => {
    console.log("Mobile number:", mobile);

    Alert.alert(
      "OTP Resent",
      `Hello ${name || "User"}, a new OTP has been sent to your phone.`
    );
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
            Verify your phone number
          </Text>
          <Text style={[styles.subtitle, { color: theme.text }]}>
            Enter your OTP to continue
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {inputRefs.map((ref, index) => (
            <TextInput
              key={index}
              style={[
                styles.control,
                {
                  borderRadius: theme.radius,
                  borderColor: theme.border,
                  color: theme.text,
                },
              ]}
              keyboardType="number-pad"
              maxLength={1}
              ref={ref}
              autoFocus={index === 0}
              onChangeText={(text) => handleChange(text, index)}
              value={otp[index]}
            />
          ))}
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
            <Text style={[styles.label, { color: "white" }]}>Submit OTP</Text>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: "auto" }}>
          <Text style={[styles.label, { color: "white", textAlign: "center" }]}>
            Didn&apos;t you receive the OTP?
          </Text>

          <Pressable onPress={handleResendOtp}>
            <Text
              style={[
                styles.label,
                {
                  color: theme.primary,
                  textAlign: "center",
                  textTransform: "uppercase",
                },
              ]}
            >
              Resend new OTP
            </Text>
          </Pressable>
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
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  control: {
    width: 56,
    height: 56,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    marginTop: 24,
    marginBottom: 48,
  },
});
