// Packages
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

//Screens
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParams } from "./types";
import MainStack from "./mainStack";

/* Initialise Stack Navigator */
const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"MainStack"} component={MainStack} options={{ animation: "ios_from_right" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootStack