import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FieldComponent from './src/field'

export default function App() {
  return (
    <View style={styles.container}>
      <FieldComponent name='Поле экспериментов'/>
      <Text>Тут че-то будет</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
