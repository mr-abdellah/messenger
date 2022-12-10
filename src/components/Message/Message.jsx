import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Message = ({ pic, name, message, isOnline }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "20%" }}>
        <View
          style={{
            width: 60,
            height: 60,
            resizeMode: "contain",
            borderRadius: 50,
            backgroundColor: "#EEEEEE",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {pic !== null ? (
            <Animated.Image
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
                borderRadius: 50,
              }}
              source={{ uri: pic }}
            />
          ) : (
            <Text
              style={{
                fontFamily: "SF-Regular",
                fontSize: 26,
                color: "#303030",
              }}
            >
              {name.slice(0, 2).toUpperCase()}
            </Text>
          )}

          {isOnline && (
            <View
              style={{
                position: "absolute",
                width: 10,
                height: 10,
                bottom: 0,
                right: 10,
                borderRadius: 50,
                backgroundColor: "#34C759",
                zIndex: 122,
              }}
            />
          )}
        </View>
      </View>
      <View style={[styles.text, tw``]}>
        <View>
          <Text
            style={[
              tw``,
              { fontFamily: "SF-Regular", fontSize: 20, color: "#303030" },
            ]}
          >
            {name}
          </Text>
          <Text style={{ color: "#9E9F9F", fontSize: 16 }}>{message.text}</Text>
        </View>
        <View style={{ position: "relative" }}>
          <Text
            style={{
              fontFamily: "SF-Regular",
              fontSize: 14,
              color: "#9E9F9F",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          >
            {message.time}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
    width: "80%",
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
  },
});
