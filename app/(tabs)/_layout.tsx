import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

const HEADER_TITLE = 'Time is Money';

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
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          headerTitle: HEADER_TITLE,
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='info-circle'
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          title: 'About',
          headerTitle: HEADER_TITLE,
          tabBarIcon: ({ color }) => <TabBarIcon name='question-circle' color={color} />,
        }}
      />
    </Tabs>
  );
}
