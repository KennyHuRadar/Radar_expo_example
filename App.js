import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Radar from "react-native-radar";
// this line should be called from native, putting it here just for simplicity
Radar.initialize("prj_test_pk__");
Radar.setUserId("test-user-id");

async function startTracking() {
  const foregroundStatus = await Radar.requestPermissions(false);

  // request for background location permission
  if (foregroundStatus === "GRANTED_FOREGROUND") {
    Radar.trackOnce()
    await Radar.requestPermissions(true);
  }

  // if background location permission was granted, register user for radar and start tracking
  const status = await Radar.getPermissionsStatus();

  if (status === "GRANTED_BACKGROUND") {
    Radar.setUserId(user.id);
    Radar.startTrackingResponsive();
  }
}
export default function App() {
  useEffect(() => {
    startTracking();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
