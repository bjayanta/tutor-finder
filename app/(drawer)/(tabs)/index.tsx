import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <Link href={{ pathname: "/user/[id]", params: { id: 1 } }}>
        View first user details
      </Link>

      <Link href={{ pathname: "/user/[id]", params: { id: 2 } }}>
        View second user details
      </Link>
    </View>
  );
}
