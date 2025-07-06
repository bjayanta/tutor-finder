import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Image, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();

  const menuItems = [
    {
      id: 4,
      title: "Logout",
      icon: "logout",
    },
    {
      id: 5,
      title: "Help",
      icon: "help",
    },
    {
      id: 6,
      title: "About",
      icon: "info",
    },
    {
      id: 7,
      title: "Contact Us",
      icon: "phone",
    },
    {
      id: 8,
      title: "Share",
      icon: "share",
    },
    {
      id: 9,
      title: "Rate Us",
      icon: "star",
    },
    {
      id: 10,
      title: "Feedback",
      icon: "feedback",
    },
    {
      id: 11,
      title: "Privacy Policy",
      icon: "shield",
    },
  ];

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 16, alignItems: "center" }}>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text>Custom Drawer Header</Text>
      </View>

      <DrawerItemList {...props} />

      {menuItems.map((item) => (
        <DrawerItem
          key={item.id}
          label={item.title}
          onPress={() =>
            router.push({
              pathname: "/user/[id]",
              params: { id: item.id.toString() },
            })
          }
        />
      ))}

      <View style={{ padding: 16, alignItems: "center" }}>
        <Text>Custom Drawer Footer</Text>
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
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Home",
          }}
        />

        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{ title: "Settings", drawerLabel: "Settings" }}
        />
        <Drawer.Screen
          name="profile"
          options={{ title: "Profile", drawerLabel: "Profile" }}
        />

        {/* Hide */}
        <Drawer.Screen
          name="user/[id]"
          options={{
            title: "User details",
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
