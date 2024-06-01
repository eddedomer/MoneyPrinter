import { Text, View } from "react-native";

export default function Index() {
  let korv = 25;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Text>Edit app/index.tsx to edit this screen.  {korv} </Text>
      
    </View>
  );
}
