import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from './src/navigation/AppNavigator';
import { CowProvider } from './src/context/CowProvider';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CowProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </CowProvider>
    </QueryClientProvider>
  );
}
