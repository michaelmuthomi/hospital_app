import { Stack, Tabs } from 'expo-router';
import React, {useState} from 'react';
import  {HomeIcon, CalendarIcon, RecordsIcon, UserIcon}  from '~/assets/icons';
import { TabBarIcon } from '~/components/navigation/TabBarIcon';
import { Colors } from '~/constants/Colors';
import { useColorScheme } from '~/hooks/useColorScheme';
import LoginPage from './login';
// import { LoginPage } from "~/app/(tabs)/login";

export default function TabLayout() {
  const [isLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Tabs>
          <Tabs.Screen
            name="calendar"
            options={{
              title: "Calendar",
              tabBarIcon: ({ color }) => (
                <CalendarIcon color={color} size={28} />
              ),
            }}
          />
          <Tabs.Screen
            name="signup"
            options={{
              title: "signup",
              tabBarButton: () => null, // Hide the tab
              tabBarIcon: ({ color }) => (
                <CalendarIcon color={color} size={28} />
              ),
            }}
          />
          <Tabs.Screen
            name="records"
            options={{
              title: "Records",
              tabBarIcon: ({ color }) => (
                <RecordsIcon color={color} size={28} />
              ),
            }}
          />
          <Tabs.Screen
            name="user"
            options={{
              title: "User",
              tabBarIcon: ({ color }) => <UserIcon color={color} size={28} />,
            }}
          />
        </Tabs>
      ) : (
        <LoginPage />
      )}
    </>
  );
}