import { JSX } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { NavigationBarRoutesEnum, ScreenNamesEnum } from "../types/navigation";
import Logo from "../assets/images/navIcons/Logo.svg";
import DealsIcon from "../assets/images/navIcons/Deals.svg";
import NewsIcon from "../assets/images/navIcons/News.svg";
import DealsIconWhite from "../assets/images/navIcons/Deals-white.svg";
import NewsIconWhite from "../assets/images/navIcons/News-white.svg";
import DealsIconFocused from "../assets/images/navIcons/Deals-focused.svg";
import NewsIconFocused from "../assets/images/navIcons/News-focused.svg";
import PulseIcon from "../assets/images/navIcons/Pulse.svg";
import PulseIconFocused from "../assets/images/navIcons/Pulse-focused.svg";
import { RootState } from "../store";
import NewsScreen from "../screens/NewsScreen";
import DealsScreen from "../screens/DealsScreen";
import PulseScreen from "../screens/PulseScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => (
    <Tab.Navigator
        initialRouteName={NavigationBarRoutesEnum.NEWS}
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#000",
            tabBarInactiveTintColor: "#ccc",
            tabBarStyle: {
                backgroundColor: "#fff",
                borderTopWidth: 0,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0,
                elevation: 0,
            },
        }}
    >
        <Tab.Screen
            name={NavigationBarRoutesEnum.FirstRoute}
            component={NewsScreen}
            options={{
                tabBarLabel: "",
                tabBarShowLabel: false,
                tabBarIcon: () => <Logo />,
            }}
        />

        <Tab.Screen
            name={NavigationBarRoutesEnum.NEWS}
            component={NewsScreen}
            options={({ navigation }) => {
                // Current route name
                const currentRoute =
                    navigation.getState().routes[navigation.getState().index].name;
                // If the current tab is PULSE, use the white version. Otherwise, use normal logic
                const isPulseActive = currentRoute === NavigationBarRoutesEnum.PULSE;

                return {
                    tabBarIcon: ({ focused }) => {
                        if (isPulseActive) {
                            // If Pulse tab is active, show white icons for News
                            return focused ? <NewsIconFocused /> : <NewsIconWhite />;
                        } else {
                            // Default: black icons
                            return focused ? <NewsIconFocused /> : <NewsIcon />;
                        }
                    },
                };
            }}
        />

        <Tab.Screen
            name={NavigationBarRoutesEnum.DEALS}
            component={DealsScreen}
            // For Deals icons, conditionally show black or white
            options={({ navigation }) => {
                const currentRoute =
                    navigation.getState().routes[navigation.getState().index].name;
                const isPulseActive = currentRoute === NavigationBarRoutesEnum.PULSE;

                return {
                    tabBarIcon: ({ focused }) => {
                        if (isPulseActive) {
                            // White deals icon if Pulse is the current tab
                            return focused ? <DealsIconFocused /> : <DealsIconWhite />;
                        } else {
                            // Otherwise black
                            return focused ? <DealsIconFocused /> : <DealsIcon />;
                        }
                    },
                };
            }}
        />

        {/* Pulse Screen */}
        <Tab.Screen
            name={NavigationBarRoutesEnum.PULSE}
            component={PulseScreen}
            options={{
                tabBarLabel: "Pulse",
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#fff",   // White icons when active
                tabBarInactiveTintColor: "#fff", // White icons when not focused
                tabBarStyle: {
                    backgroundColor: "#000", // Black background
                    borderTopWidth: 0,
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0,
                    elevation: 0,
                },
                tabBarIcon: ({ focused }) =>
                    focused ? <PulseIconFocused /> : <PulseIcon />,
            }}
        />
    </Tab.Navigator>
);

const AppNavigator = (): JSX.Element => {
    const user = useSelector((state: RootState) => state.user);
    return (
        <Stack.Navigator>
            {/* User is authenticated, show main screen. Otherwise, show login screen */}
            {user.isAuthenticated ? (
                <Stack.Screen
                    name="Main"
                    component={MainStack}
                    options={{ headerShown: false }}
                />
            ) : (
                <Stack.Screen
                    name={ScreenNamesEnum.LOGIN_SCREEN}
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
            )}
        </Stack.Navigator>
    );
};

export default AppNavigator;