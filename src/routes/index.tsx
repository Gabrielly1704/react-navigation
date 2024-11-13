import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

export type StackNavigator = {
  signin: undefined;
  dashboard: undefined;
};

export type StackNavigatorProps = NativeStackNavigationProp<StackNavigator>;
const TabsNavigator = createBottomTabNavigator();

const TabsNavigatorScreens = () => {
  return (
    <TabsNavigator.Navigator>
      <TabsNavigator.Screen
        name="signin"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={size} color={focused ? "blue" : "gray"} />
          ),
          title: "Perfil",
        }}
      />
      <TabsNavigator.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="settings" size={size} color={focused ? "blue" : "gray"} />
          ),
          title: "Configurações",
        }}
      />
    </TabsNavigator.Navigator>
  );
};

const StackNavigator = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigator.Screen name="signin" component={SignIn} />
        <StackNavigator.Screen name="dashboard" component={TabsNavigatorScreens} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
