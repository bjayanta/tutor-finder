import { Colors } from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Text, useColorScheme, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"];

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        paddingStart: 0,
        paddingEnd: 0,
      }}
      {...props}
    >
      {/* Header */}
      <View
        style={{
          padding: 16,
          backgroundColor: theme.background,
        }}
      >
        <Text style={{ color: theme.foreground }}>Sourov Biswas</Text>
        <Text style={{ color: theme.foreground }}>amisourov@gmail.com</Text>

        <View>
          <Text style={{ color: theme.foreground }}>Tutor ID: 123456</Text>
          <Text style={{ color: theme.foreground }}>Since Jul 05, 2023</Text>
        </View>
      </View>

      {/* Main content */}
      <DrawerItemList {...props} />

      {/* Footer */}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <DrawerItem
          label="Sign Out"
          onPress={() => console.log("Sign Out")}
          icon={({ color, size }) => {
            return (
              <MaterialCommunityIcons name="logout" size={size} color={color} />
            );
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveTintColor: "red",
          drawerHideStatusBarOnOpen: true,
          drawerItemStyle: {
            borderRadius: 0,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Dashboard",
            drawerLabel: "Dashboard",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="desktop-mac-dashboard"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="jobs"
          options={{
            title: "Jobs",
            drawerLabel: "Jobs",
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
          name="(account)"
          options={{
            title: "Account",
            drawerLabel: "Account",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
            // drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
