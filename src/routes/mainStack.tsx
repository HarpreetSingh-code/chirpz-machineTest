// Packages
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

//Screens
import { MainStackParamList } from "./types";
import CreatePost from "../screens/createPost";
import Home from "../screens/home";

/* Initialise Stack Navigator */
const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Home"} component={Home} />
            <Stack.Screen name={"CreatePost"} component={CreatePost} options={{ animation: "slide_from_bottom" }} />
        </Stack.Navigator>
    );
};
export default MainStack