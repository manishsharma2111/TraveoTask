import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Item extends React.Component {
  render() {
    const {
      value,
      title,
      titleFontSize,
      valueFontSize,
      color,
      fontWeight
    } = this.props;
    return (
      <View style={styles.componentArea}>
        <View>
          <Text
            style={{
              fontSize: titleFontSize ? titleFontSize : 16,
              color: "#000"
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: valueFontSize ? valueFontSize : 22,
              color: color,
              fontWeight: fontWeight
            }}
          >
            {value}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentArea: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
