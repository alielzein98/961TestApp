import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/navigation';
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store, { persistor } from './src/store';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import _loadFontsAsync from './src/hooks/useFonts';

// Prevent splash screen from auto-hiding before the app is ready
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare(): Promise<void> {
      try {
        await _loadFontsAsync(); // Load custom fonts before rendering the app
      } catch (e) {
        console.warn("app init error:", e);
      } finally {
        console.log("App is ready");
        setAppIsReady(true);
      }
    }
    void prepare();

    return (): void => { };
  }, []);

  // Hides splash screen when app is fully loaded
  const onLayoutRootView = React.useCallback(async () => {
    console.log("onLayoutRootView triggered", appIsReady);
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  // Show nothing until the app is fully ready
  if (!appIsReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider onLayout={onLayoutRootView}>
          <NavigationContainer>
            <GestureHandlerRootView>
              <AppNavigator />
            </GestureHandlerRootView>
          </NavigationContainer>
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}