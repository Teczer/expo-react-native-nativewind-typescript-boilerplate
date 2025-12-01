import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { getColor } from '@/utils/colors';
import { ThemeToggle } from '@/components/theme-toggle';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: getColor(colorScheme, 'tabIconSelected'),
        tabBarInactiveTintColor: getColor(colorScheme, 'tabIconDefault'),
        tabBarStyle: {
          backgroundColor: getColor(colorScheme, 'background'),
          borderTopColor: getColor(colorScheme, 'border'),
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={getColor(colorScheme, 'text')}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: true,
          headerRight: () => <ThemeToggle />,
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}

