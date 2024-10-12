import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"
import Login from './src/Pages/Login';
import EductionalHome from './src/components/EductionalHome';
import SearchBar from './src/components/SearchBar';

export default function App() {
  return (
    <View className='mt-10'>
      {/* <Login /> */}
      <EductionalHome/>
      <SearchBar/>
      <StatusBar style="auto" />
    </View>
  );
}

