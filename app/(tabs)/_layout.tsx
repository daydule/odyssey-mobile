import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { Header } from '../../components/leaf/Header';

const TabBarIcon = (props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) => {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          headerTitle: () => <Header />,
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          title: 'About',
          headerTitle: () => <Header />,
          tabBarIcon: ({ color }) => <TabBarIcon name='question-circle' color={color} />,
        }}
      />
    </Tabs>
  );
}
