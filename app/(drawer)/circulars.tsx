import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Circulars() {
  const posts: any[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <View
              key={index}
              style={[styles.card, { backgroundColor: "#fff" }]}
            >
              <Text style={styles.title}>
                Need bangla medium tutor for HSC - 1st Year student (3
                Days/Week) - Home Tutoring
              </Text>

              <View style={styles.identities}>
                <Text>Job ID: 171009</Text>
                <Text>July 05, 2024</Text>
              </View>

              <View style={styles.topics}>
                <View style={styles.areaTitle}>
                  <MaterialCommunityIcons
                    name="book-open-variant"
                    size={24}
                    color="black"
                  />
                  <Text>Subject</Text>
                </View>
                <View style={styles.badgeGroup}>
                  <Text style={styles.badge}>Accounting</Text>
                  <Text style={styles.badge}>Finance</Text>
                  <Text style={styles.badge}>Production Management</Text>
                  <Text style={styles.badge}>Marketing</Text>
                </View>
              </View>

              <View style={styles.details}>
                <View>
                  <View style={styles.areaTitle}>
                    <MaterialCommunityIcons
                      name="map-marker"
                      size={24}
                      color="black"
                    />
                    <Text>Location</Text>
                  </View>
                  <Text style={{ paddingHorizontal: 12 }}>Mirpur 1, Dhaka</Text>
                </View>

                <View>
                  <View style={styles.areaTitle}>
                    <MaterialCommunityIcons
                      name="currency-bdt"
                      size={24}
                      color="black"
                    />
                    <Text>Salary</Text>
                  </View>
                  <Text style={{ paddingHorizontal: 12 }}>BDT 3500</Text>
                </View>
              </View>

              <View style={styles.preference}>
                <MaterialCommunityIcons
                  name="account-group"
                  size={24}
                  color="black"
                />
                <Text>Any tutor preferred</Text>
              </View>
            </View>
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
  identities: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  topics: {},
  areaTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  badgeGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: "yellow",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  preference: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  notFound: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
