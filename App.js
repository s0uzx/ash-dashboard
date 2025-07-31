import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerGeral}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
   
    <View style={styles.container}>
      <Text>dlkdsçgdelgs!</Text>
      <StatusBar style="auto" />
    </View>
     </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0D47A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
