import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CowListScreen from '../screens/CowListScreen';
import CowDetailScreen from '../screens/CowDetailScreen';
import Colors from '../theme/color';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CowList" component={CowListScreen} options={{
                title: 'Cow Catalog',
                headerTitleStyle: {
                    color: Colors.white,
                    fontSize: 22
                },
                headerStyle: {
                    backgroundColor: Colors.primary
                }
            }} />
            <Stack.Screen name="CowDetail" component={CowDetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
