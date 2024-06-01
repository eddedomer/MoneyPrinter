import React from 'react';
import { Text, View, StyleSheet} from "react-native";

interface DisplayProps{
    moneyEarned: number;
}

const Display: React.FC<DisplayProps> = ({ moneyEarned }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{moneyEarned.toFixed(2)} kr</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black", // Background color of the container
    },
    text: {
      fontSize: 50,
      color: "lightgreen", // Text color
      fontWeight: "bold",
      fontFamily: "Arial", // Font family
      textAlign: "center",
    },
  });

export default Display;