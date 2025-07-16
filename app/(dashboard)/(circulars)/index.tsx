import { Circular } from "@/types/circular";
import { convert } from "@/utils/currency";
import { CIRCULARS } from "@/utils/data";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function List() {
  const posts: Circular[] = CIRCULARS;
  const router = useRouter();

  const handlePostDetails = (index: number) => {
    router.push(`/(circulars)/${index}`);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <MaterialCommunityIcons name="filter" size={24} color="black" />
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Pressable key={index} onPress={() => handlePostDetails(post.id)}>
              <View style={[styles.card, { backgroundColor: "#fff" }]}>
                <View>
                  <Text style={styles.title}>
                    {post.title} for {post.standard} student (
                    {post.preferences.days} Days/Week) - {post.institution} |{" "}
                    {post.id}
                  </Text>
                </View>

                {/* Details */}
                <View style={styles.details}>
                  <Text>{new Date(post.createdAt).toDateString()}</Text>
                  <Text>{convert(post.salary, "BDT")}</Text>
                  <View>
                    {post.preferences.gender === "male" ? (
                      <MaterialCommunityIcons
                        name="gender-male"
                        size={24}
                        color="black"
                      />
                    ) : post.preferences.gender === "female" ? (
                      <MaterialCommunityIcons
                        name="gender-female"
                        size={24}
                        color="black"
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="gender-male-female"
                        size={24}
                        color="black"
                      />
                    )}
                  </View>
                </View>

                {/* Address */}
                <View style={styles.area}>
                  <View style={styles.areaHead}>
                    <MaterialCommunityIcons
                      name="google-maps"
                      size={24}
                      color="black"
                    />
                    <Text>Location : </Text>
                    <Text>Mirpur 1, Dhaka</Text>
                  </View>
                </View>

                {/* Subjects */}
                <View style={styles.area}>
                  <View style={styles.areaHead}>
                    <MaterialCommunityIcons
                      name="book-open-variant"
                      size={24}
                      color="black"
                    />
                    <Text>Subject : </Text>
                  </View>
                  {post.subjects.map((subject: string, index: number) => (
                    <Text key={index} style={styles.badge}>
                      {subject}
                    </Text>
                  ))}
                </View>
              </View>
            </Pressable>
          ))
        ) : (
          <View style={styles.notFound}>
            <MaterialCommunityIcons
              name="database-remove"
              size={24}
              color="black"
            />
            <Text>No circular available.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  area: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 8,
  },
  areaHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  badge: {
    backgroundColor: "yellow",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 8,
  },
  notFound: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
