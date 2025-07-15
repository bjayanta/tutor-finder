import { Circular } from "@/app/types/circular";
import { Colors } from "@/constants/Colors";
import { convert } from "@/utils/currency";
import { CIRCULARS } from "@/utils/data";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Linking from "expo-linking";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

export default function Details() {
  const router = useRouter();

  const [circular, setCircular] = useState<any>();
  const circulars: Circular[] = CIRCULARS;

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"];

  const { id } = useLocalSearchParams();

  useEffect(() => {
    circulars.map((circular) => {
      if (circular.id === +id) {
        setCircular(circular);
      }
    });
  }, [circulars, id]);

  const handleCall = async (phoneNumber: any) => {
    const url = `tel:${phoneNumber}`;
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Failed to open URL:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{circular?.title}</Text>

      <View style={{}}>
        <Text>Circular ID: {circular?.id}</Text>
        <Text>Created at: {new Date(circular?.createdAt).toDateString()}</Text>
        <Text>Salary: {convert(circular?.salary, "BDT")}</Text>
      </View>

      <View>
        <Text>Standard: {circular?.standard}</Text>
        <Text>Tuition: {circular?.institution}</Text>
        <Text>Days: {circular?.preferences?.days} days/Week</Text>
        <View>
          <Text>Gender: </Text>
          {circular?.preferences?.gender === "male" ? (
            <Text>
              <MaterialCommunityIcons
                name="gender-male"
                size={20}
                color="black"
              />
              Male
            </Text>
          ) : circular?.preferences?.gender === "female" ? (
            <Text>
              <MaterialCommunityIcons
                name="gender-female"
                size={24}
                color="black"
              />
              Female
            </Text>
          ) : (
            <Text>
              <MaterialCommunityIcons
                name="gender-male-female"
                size={24}
                color="black"
              />
              Male or, Female
            </Text>
          )}
        </View>
      </View>

      {/* Location */}
      <View>
        <Text>Location:</Text>
        <Text>{circular?.location?.area}, </Text>
        <Text>{circular?.location?.city}, </Text>
        <Text>{circular?.location?.country}</Text>
      </View>

      {/* Subject */}
      <View>
        <Text>Subjects:</Text>
        <Text>{circular?.subjects.join(", ")}</Text>
      </View>

      <Pressable onPress={() => handleCall("+8801718556599")}>
        <Text>Call</Text>
      </Pressable>

      {/* Floating Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={[styles.floatingButton, { backgroundColor: theme.primary }]}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  floatingButton: {
    position: "absolute",
    bottom: 36,
    right: 36,
    width: 60,
    height: 60,
    borderRadius: 30, // Makes it circular
    justifyContent: "center",
    alignItems: "center",
    elevation: 8, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
