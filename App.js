import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>My Name is
      <Text style={styles.boldText}> Amoah Ebenezer</Text>
      </Text>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  Text: {
    fontSize:24
  },
  boldText: {
    fontWeight: "bold"
  }
});

