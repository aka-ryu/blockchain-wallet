import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from "../screen/login/login";
import Routes from "./Routes";
import Main from "../screen/main/main";
import Create from "../screen/create/default";
import { SafeAreaView } from "react-native";

const Stack = createStackNavigator();
const RootStackNavigator = () => {
    return (
        <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={Routes.LOGIN}
                    screenOptions={{
                        headerShown: false,
                        cardStyle: { paddingHorizontal: 10 }
                    }}
                >
                    <Stack.Screen name={Routes.LOGIN} component={Login} />
                    <Stack.Screen name={Routes.MAIN} component={Main} />
                    <Stack.Screen name={Routes.CREATE} component={Create} />
                </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackNavigator