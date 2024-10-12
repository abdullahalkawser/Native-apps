import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View  className='bg-red-600 mt-20'>
      <Text>Open up App.tsx to start working on your app! this is my new app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

