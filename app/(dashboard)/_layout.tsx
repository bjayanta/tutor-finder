import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: "Dashboard",
            drawerLabel: "Dashboard",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="briefcase"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="(circulars)"
          options={{
            title: "Circulars",
            drawerLabel: "Circulars",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="briefcase"
                color={color}
                size={size}
              />
            ),
            headerRight: () => (
              <MaterialCommunityIcons name="filter" size={24} color="black" />
            ),
          }}
        />

        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerLabel: "Settings",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
