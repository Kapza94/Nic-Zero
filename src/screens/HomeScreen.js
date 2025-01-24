import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Progress"
          onPress={() => navigation.navigate('Progress')}
        />
        <Button
          title="Go to Community"
          onPress={() => navigation.navigate('Community')}
        />
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 10,
  },
}); 