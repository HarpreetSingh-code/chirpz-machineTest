import { NavigatorScreenParams } from "@react-navigation/native"

type RootStackParams = {
    MainStack: NavigatorScreenParams<MainStackParamList>
}

type MainStackParamList = {
    Home: undefined
    CreatePost: undefined
}