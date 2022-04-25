import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../hooks/auth';

import { SplashScreen } from '../screens/SplashScreen';
import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export function SplashRoutes() {
    const { user } = useAuth();

    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Splash"
        >
            <Screen
                name="Splash"
                component={SplashScreen}
            />
            <Screen
                name="HomeSplash"
                component={user.id ? AppTabRoutes : AuthRoutes}
            />
        </Navigator>
    )
}