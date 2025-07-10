import { Colors } from "@/constants/Colors";
import { Menu } from "@/constants/Menu";
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
  const menu = Menu as {
    label: string;
    icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    onPress: () => void;
  }[];

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        paddingStart: 0,
        paddingEnd: 0,
        backgroundColor: theme.background,
        flex: 1,
      }}
      {...props}
    >
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
        }}
      >
        <Text
          style={{ fontSize: 24, fontWeight: "bold", color: theme.foreground }}
        >
          Sourov Biswas
        </Text>
        <Text style={{ color: theme.foreground }}>amisourov@gmail.com</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text style={{ color: theme.foreground }}>Tutor ID: 123456</Text>
          <Text style={{ color: theme.foreground }}>|</Text>
          <Text style={{ color: theme.foreground }}>Since Jul 05, 2023</Text>
        </View>
      </View>

      {/* Main content */}
      <DrawerItemList {...props} />

      {/* Footer */}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: theme.border,
        }}
      >
        {menu.map((item, index) => (
          <DrawerItem
            key={index}
            label={item.label}
            onPress={item.onPress}
            icon={({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name={item.icon}
                  size={size}
                  color={theme.foreground}
                />
              );
            }}
            labelStyle={{
              color: theme.foreground,
            }}
            style={{
              borderRadius: 0,
            }}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveTintColor: theme.secondary,
          drawerInactiveTintColor: theme.foreground,
          drawerActiveBackgroundColor: theme.foreground,
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
                name="view-dashboard"
                color={color}
                size={size}
              />
            ),
            // drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="circulars"
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
