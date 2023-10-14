import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './component/screen1';
import Screen2 from './component/screen2';
import Screen3 from './component/screen3';
import Screen4 from './component/screen4';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="screen1" component={Screen1} />
          <Stack.Screen name="screen3" component={Screen3} />
        </Stack.Navigator>
      </NavigationContainer>
      //<Screen2/>
      //<Screen4/>
  );
}