import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false, // This hides the header for all screens in this stack
        headerStyle: { backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#fff' },
        headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
      }}
    >
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
}