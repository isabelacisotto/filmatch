import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome }from "../pages/Welcome/Welcome";
import { Login }from "../pages/Login/Login";

const Stack = createNativeStackNavigator();

export function AppRouter() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}