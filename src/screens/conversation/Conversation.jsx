import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { dummyData } from "../../data/users";

const Conversation = () => {
  const route = useRoute();
  const { id } = route.params;
  const [user, setUser] = useState();

  useEffect(() => {
    const res = dummyData.filter((user) => user.id === id);
    setUser(res);
  }, []);
  alert(JSON.stringify(user[0]));
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View key={id}>
          <Text>Discussion number {id}</Text>
          <Text>{user[0]?.name}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Conversation;

const styles = StyleSheet.create({});
