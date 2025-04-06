// Packages
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";

//Screens
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParams } from "./types";
import MainStack from "./mainStack";
import SplashScreen from "react-native-splash-screen";

/* Initialise Stack Navigator */
const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"MainStack"} component={MainStack} options={{ animation: "ios_from_right" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootStack