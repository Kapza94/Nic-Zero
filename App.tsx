import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Define the type for our stack parameter list
export type RootStackParamList = {
  Home: undefined;
  Progress: undefined;
  Community: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        id="app-navigator"
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'NicZero' }}
        />
        <Stack.Screen 
          name="Progress" 
          component={ProgressScreen} 
          options={{ title: 'Your Progress' }}
        />
        <Stack.Screen 
          name="Community" 
          component={CommunityScreen} 
          options={{ title: 'Community' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 